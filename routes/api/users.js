const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../../config/keys').secret;
const passport = require('passport');

// Load User Model
const User = require('../../models/User');

/**
 * @route GET api/users/register
 * @desc Register User / Saving it to the Database
 * @access Public
 */
router.post('/register', (req, res) => {
    let errors = {}
    if (req.body.password !== req.body.confirm_password) {
        errors['msg'] = 'Passwords do not match.';
        return res.status(400).json(errors)
    }
    // Find the unique Email address
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            errors['msg'] = 'Email already exists.';
            return res.status(400).json(errors);
        } else {
            // Find for the unique Username
            User.findOne({
                username: req.body.username
            }).then(user => {
                if (user) {
                    // Username is taken
                    errors['msg'] = 'Username is taken.';
                    return res.status(400).json(errors);
                } else {
                    // Create a new user
                    let newUser = new User({
                        username: req.body.username,
                        password: req.body.password,
                        email: req.body.email,
                        name: req.body.name
                    });
                    // Hash the password
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save().then(user => {
                                return res.status(201).json({
                                    success: true,
                                    user: newUser
                                })
                            }).catch(err => {
                                console.log(err);
                            });
                        });
                    });
                }
            })
        }
    });
});


/**
 * @route GET api/users/login
 * @desc Login User / Sending the login Token back
 * @access Public
 */
router.post('/login', (req, res) => {
    let errors = {};
    // Find the user by email
    User.findOne({
        username: req.body.username
    }).then(user => {
        if (!user) {
            errors['msg'] = "Username not found.";
            return res.status(404).json(errors);
        }
        // Match the password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                // Now send the auth token back b generating it and sign it
                // JWT Payload
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    username: user.username
                }
                jwt.sign(
                    payload,
                    key, {
                        expiresIn: 604800
                    }, (err, token) => {
                        res.status(200).json({
                            success: true,
                            user: user,
                            token: `Bearer ${token}`,
                            message: "You are successfully logged in."
                        });
                    });
            } else {
                errors['msg'] = 'Password incorrect'
                return res.status(400).json(errors);
            }
        });
    });
});

/**
 * @route GET api/users/profile
 * @desc Login User / Sending the login Token back
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.status(200).json({
        user: req.user
    });
});

module.exports = router
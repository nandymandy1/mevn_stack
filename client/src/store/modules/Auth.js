import axios from 'axios';
import router from '../../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: ''
}

const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user
}

const actions = {
    async login({
        commit
    }, user) {
        commit('auth_request')
        let res = await axios.post('/api/users/login', user)
        if (res.data.success) {
            // save the token
            const token = res.data.token
            const user = res.data.user
            // storing the token in localstorage
            localStorage.setItem('token', token)
            // Set default axios token
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
        }
        return res;
    },
    async register({
        commit
    }, user) {
        commit('register_request')
        let res = await axios.post('/api/users/register', user)
        if (res.data.success !== undefined) {
            commit('register_success')
        }
        return res;
    },
    async loadProfile({
        commit
    }) {
        let res = await axios.get('/api/users/profile')
        commit('get_profile', res.data.user)
        return res;
    },
    async logout({
        commit
    }) {
        await localStorage.removeItem('token')
        commit('logout')
        delete axios.defaults.headers.common['Authorization']
        router.push('/login');
        return
    }
}

const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    register_request(state) {
        state.status = 'loading'
    },
    register_success(state) {
        state.status = 'success'
    },
    register_error(state) {
        state.status = 'error'
    },
    auth_success(state, token, user) {
        state.status = 'success'
        state.token = token
        state.user = user
    },
    get_profile(state, user) {
        state.user = user
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = ''
        state.token = ''
        state.user = {}
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}
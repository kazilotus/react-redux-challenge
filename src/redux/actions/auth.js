import { 
    SET_USER,
} from '../types'

import { notification } from 'antd';

export const login = (form) => {
    return async (dispatch, getState) => {

        const { users } = getState().auth
        const user = users.find(user => user.email === form.email && user.password === form.password)

        if (user) {
            dispatch(setUser(user.id))
        } else {
            notification['error']({
                message: 'Login Failed',
                description: 'Incorrect credentials',
            });
        }
        
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch(setUser(null))
    }
}

export const setUser = (id) => {
    return async (dispatch) => {
        dispatch({ type: SET_USER, payload: id })
    }
}
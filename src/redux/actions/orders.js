import { 
    ADD_ORDER,
    REMOVE_ORDER,
    APPROVE_ORDER,
    DECLINE_ORDER
} from '../types'

export const addOrder = (order) => {
    return async (dispatch) => {
        dispatch({ type: ADD_ORDER, payload: order })
    }
}

export const removeOrder = (orderId) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_ORDER, payload: orderId })
    }
}

export const approveOrder = (orderId) => {
    return async (dispatch) => {
        dispatch({ type: APPROVE_ORDER, payload: orderId })
    }
}

export const declineOrder = (orderId) => {
    return async (dispatch) => {
        dispatch({ type: DECLINE_ORDER, payload: orderId })
    }
}
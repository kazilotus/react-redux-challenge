import { 
    SHOW_PRODUCT,
    HIDE_PRODUCT
} from '../types'

export const showProduct = (id) => {
    return async (dispatch) => {
        dispatch({ type: SHOW_PRODUCT, payload: id })
    }
}

export const hideProduct = () => {
    return async (dispatch) => {
        dispatch({ type: HIDE_PRODUCT })
    }
}
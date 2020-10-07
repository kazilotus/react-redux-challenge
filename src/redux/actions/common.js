import { SHOW_PRODUCT } from '../types'

export const showProduct = (id) => {
    return async (dispatch) => {
        dispatch({ type: SHOW_PRODUCT, payload: id })
    }
}
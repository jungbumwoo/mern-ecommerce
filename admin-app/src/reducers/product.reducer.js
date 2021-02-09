import axiosInstance from "../helpers/axios";

const initialState = {
    products: []
};

export const addProduct = form => {
    return async dispatch => {
        const res = await axiosInstance.post('product/create', form);
        console.log(res);
    }
}

export default (state=initialState, action) => {
    return initialState
}


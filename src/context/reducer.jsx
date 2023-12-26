const ProductReducer = (state, action) => {
    if(action.type === "SET_LOADING") {
        return {
            ...state,
            isLoading: true,
        }
    }
    if(action.type === "API_ERROR") {
        return {
            ...state,
            isLoading: false,
            isError: true,
        }
    }
    if(action.type === "MY_API_DATA") {
        const featureData = action.payload.filter((currentElement) => {
            return currentElement.rating.rate >= 4.0;
        });
        return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureData,
        }
    }
    return state;
}

export default ProductReducer;
const initialState = {
    item: [],
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TO_CART' :
            return {
                ...state,
                item: [
                    ...state.item,
                    action.payload
                ],
            };
        case 'REMOVE_FROM_CART' : {
            return {
                ...state,
                item: state.item.filter(o => o.id != action.payload)
            };
        };
        default :
            return state;
    }
};
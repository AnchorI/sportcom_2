const initialState = {
    isReadyCat : false,
    item: null,

};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_CAT':
            return {
                ...state,
                item: action.payload,
                isReadyCat: true,
            };
        case 'SET_IS_CAT_READY' : {
            return {
                ...state,
                isReadyCat: action.payload
            };
        };
        default :
            return state;
    }
};
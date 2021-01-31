const initialState = {
    isReadyAdmin : false,
    item: null,

};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_TASK' :
            return {
                ...state,
                item: action.payload,
                isReadyAdmin: true,
            };
        case 'SET_IS_READY' : {
            return {
                ...state,
                isReadyAdmin: action.payload
            };
        };
        default :
            return state;
    }
};
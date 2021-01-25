const initialState = {
    isReady : false,
    item: null,

};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_TEAM' :
            return {
                ...state,
                item: action.payload,
                isReady: true,
            };
        case 'SET_IS_TEAM_READY' : {
            return {
                ...state,
                isReadyTeam: action.payload
            };
        };
        default :
            return state;
    }
};
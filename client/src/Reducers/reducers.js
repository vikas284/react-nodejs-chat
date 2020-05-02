import actions from '../Actions/actions';

const defaultState = {
    usersList: [],
    userinfo: {}

};

function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.ADD_USER:
            return {
                usersList: [...state.usersList, action.data]
            }
        case actions.USER_INFO:
            state.userinfo = action.data;
            return state;
        default:
            return state;
    }
}

export default rootReducer;
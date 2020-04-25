import actions from '../Actions/actions';

const defaultState = {
    usersList: []
};

function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.ADD_USER:
            return {
                usersList: [...state.usersList, action.data]
            }
        default:
            return state;
    }
}

export default rootReducer;
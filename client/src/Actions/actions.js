const ADD_USER = 'add_user';
const REMOVE_USER = 'remove_user';


const addUser = userData => ({
    type: ADD_USER,
    data: userData
});

const deleteUser = index => ({
    type: REMOVE_USER,
    index: index
});

export default { addUser, deleteUser, ADD_USER, REMOVE_USER };
const ADD_USER = 'add_user';
const USER_INFO = 'user_info';
const REMOVE_USER = 'remove_user';


const addUser = userData => ({
    type: ADD_USER,
    data: userData
});
const userInfo = userData => ({
    type: USER_INFO,
    data: userData
});

const deleteUser = index => ({
    type: REMOVE_USER,
    index: index
});

export default { addUser, deleteUser,userInfo, ADD_USER, REMOVE_USER,USER_INFO };
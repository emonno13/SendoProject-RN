const infoReducer = (state ={}, action) => {
    switch(action.type) {
        case "ACTION_TYPE":
            return action.info;
        default:
            return state;        
    }
}
export default infoReducer;
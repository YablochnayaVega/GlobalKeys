const initialState = {
};

export default function reducer(state = initialState, action) {
    if (action.type === 'UPDATE_SEARCH') {
        return action.payload;
    }
    return state;
}

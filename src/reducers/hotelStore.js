const initialState = {

};

export default function reducer(state = initialState, action) {
    if (action.type === 'UPDATE_HOTEL_STORE') {
        return action.payload;
    }
    return state;
}

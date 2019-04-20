const initialState = {
hotel:1
};

export default function reducer(state = initialState, action) {
    if (action.type === 'UPDATE_HOTEL_STORE') {
        return action.payload;
    }
    return state;
}

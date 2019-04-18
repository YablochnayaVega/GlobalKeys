const initialState = {
    city: 1,
    startDatetime: null,
    endDatetime: null,
    guests: null
};

export default function reducer(state = initialState, action) {
    if (action.type === 'UPDATE_SEARCH') {
        return action.payload;
    }
    return state;
}
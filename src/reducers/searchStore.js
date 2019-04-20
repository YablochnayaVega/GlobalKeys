const initialState = {
    city: 1,
    startDatetime: '2018-01-01',
    endDatetime: '2018-01-02',
    guests: 4
};

export default function reducer(state = initialState, action) {
    if (action.type === 'UPDATE_SEARCH') {
        return action.payload;
    }
    return state;
}
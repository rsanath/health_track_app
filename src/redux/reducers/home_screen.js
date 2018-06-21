import { HomeActions } from '../actions/home_screen';

const initialState = {
    loading: true,
    error: false,
    data: 'initial data',
};

export default (state = initialState, action) => {
    switch (action.type) {

        case HomeActions.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case HomeActions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            };
        case HomeActions.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: undefined
            };
        default:
            return state
    }
}
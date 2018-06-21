export const HomeActions = {
    FETCH_DATA_BEGIN: 'FETCH_DATA',
    FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE'
}

export const HomeActionCreators = {
    fetchDataBeign: () => ({type: HomeActions.FETCH_DATA_BEGIN}),
    fetchDataSuccess: data => ({type: HomeActions.FETCH_DATA_SUCCESS, payload: data}),
    fetchDataFailure: error => ({type: HomeActions.FETCH_DATA_FAILURE, payload: error})
}

export function fetchData() {
    return dispatch => {
        dispatch(HomeActionCreators.fetchDataBeign());
        setTimeout(() => {
            dispatch(HomeActionCreators.fetchDataSuccess('Hello World'))
        }, 2000)
    };
}
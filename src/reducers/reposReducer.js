const SET_REPOS = 'SET_REPOS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const CURRENT_PAGE = 'CURRENT_PAGE'
const SET_FETCH_ERROR='SET_FETCH_ERROR'

const initialState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
    isFetchError:false,
}

export default function reposReducer(state = initialState, action) {
    switch (action.type) {
        case SET_REPOS: {
            return {
                ...state,
                items: action.payload.items,
                isFetching: false,
                totalCount: action.payload.total_count
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case SET_FETCH_ERROR: {
            return {
                ...state,
                isFetchError: action.payload
            }
        }
        default:
            return state
    }
}
export const setRepos = (repos) => {
    return {
        type: SET_REPOS,
        payload: repos
    }
}
export const setIsFetching = (bool) => {
    return {
        type: SET_IS_FETCHING,
        payload: bool
    }
}
export const setCurrentPage = (page) => {
    return {
        type: CURRENT_PAGE,
        payload: page
    }
}
export const setFetchError = (bool) => {
    return {
        type: SET_FETCH_ERROR,
        payload: bool
    }
}
import { combineReducers } from 'redux';
const ADD_BOOKMARK = 'ADD_BOOKMARK';
const INCREAMENT_BOOKMARK = 'INCREAMENT_BOOKMARK';

export function addBookmarks(quotes) {
    return {
        type: ADD_BOOKMARK,
        quotes
    }
}
export function increamentBookmark(quotes) {
    return {
        type: INCREAMENT_BOOKMARK,
        quotes
    }
}

// const defaultBookmark = [{ content: "", author: "" }]

function bookmarks(state = [], action) {
    console.log(action)
    switch (action.type) {
        case ADD_BOOKMARK:
            return [
                ...state,
                {
                    content: action.quotes.content,
                    author: action.quotes.author
                }
            ];
        case INCREAMENT_BOOKMARK:
            const quote = state.find(b => action.quotes === b.content)
            const quotes = state.filter(b => action.quotes !== b.content)
            return [...quotes, { ...quote }];
        default:
            return state;
    }
}

const BookmarkApp = combineReducers({bookmarks});
export default BookmarkApp;

import { combineReducers } from 'redux';
const ADD_BOOKMARK = 'ADD_BOOKMARK';
const INCREAMENT_BOOKMARK = 'INCREAMENT_BOOKMARK';
const DELETE_BOOKMARK = 'DELETE_BOOKMARK';

export function addBookmarks(quotes) {
    return {
        type: ADD_BOOKMARK,
        quotes
    }
}
export function deleteBookmarks(quotes) {
    return {
        type: DELETE_BOOKMARK,
        quotes
    }
}
export function increamentBookmark(quotes) {
    return {
        type: INCREAMENT_BOOKMARK,
        quotes
    }
}

function bookmarks(state = [], action) {
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
        case DELETE_BOOKMARK:
            const book_quotes = state.filter(b => action.quotes.content !== b.content)
            return [
                ...book_quotes
            ];

        default:
            return state;
    }
}

const BookmarkApp = combineReducers({ bookmarks });
export default BookmarkApp;

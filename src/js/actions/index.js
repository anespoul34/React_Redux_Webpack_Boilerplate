import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};
export function foundBadWord(payload) {
    return { type: FOUND_BAD_WORD, payload } 
};

// Redux-thunk Example :

// export function getData() {
//     return function(dispatch) {
//         return fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(json => {
//             dispatch ({ type: "DATA_LOADED", payload:json });
//         });
//     }
// }

// Redux-saga Example :

export function getData() {
    return { type: "DATA_REQUESTED" };
}
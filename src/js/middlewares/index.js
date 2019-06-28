import { ADD_ARTICLE } from "../constants/action-types";
import { foundBadWord } from "../actions/index";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {

            // Do stuff

            if (action.type == ADD_ARTICLE) {
                
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                );
            
                if (foundWord.length) {
                    action.payload.title = "Error from middleware";
                    return dispatch(foundBadWord(action.payload));
                }
            }
            return next(action);
        }
    }
}
import { combineReducers } from "redux";
import { QuizReducer } from "./quizReducer";
import { TestReducer } from "./testReducer";

export const rootReducer = combineReducers({
    quiz: QuizReducer,
    test: TestReducer,
});
import NewsReducer from "./NewsReducer";
import { combineReducers } from "redux";

const root = combineReducers({
    news: NewsReducer,
})

const rootReducer = (state, action) =>{
    return root(state, action);
};

export default rootReducer;
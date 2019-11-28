import { combineReducers } from "redux"
import { reducerCommon } from "./Common/Reducers"
import { tryAuthenticate } from "./Auth/Reducers"
import { reducerLibrary } from "./Library/Reducers"
 

export default combineReducers({
    common: reducerCommon,
    auth: tryAuthenticate,
    library: reducerLibrary
});

  
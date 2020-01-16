import { combineReducers } from "redux"
import { reducerCommon } from "./Common/Reducers"
import { reducerAuthorisation } from "./Auth/Reducers"
import { reducerLibrary } from "./Library/Reducers"
import { reducerPreferences } from "./Preferences/Reducers" 


export default combineReducers({
    common: reducerCommon,
    auth: reducerAuthorisation,
    library: reducerLibrary,
    preferences: reducerPreferences
});

  
import { combineReducers } from 'redux'
import AgendaReducer from './agendaReducer'

const rootReducer = combineReducers({
    
    agenda: AgendaReducer

})  

export default rootReducer
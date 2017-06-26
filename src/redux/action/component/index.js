import {combineReducers} from "redux"
let content = {}
function addpositionReducer(state = content, action){
  switch (action.type) {
    case "POSITION":
    console.log(action.content)
    return action.content
    default:
  return state
  }
}
  let rootReducer = combineReducers({
    content:addpositionReducer
  })

  export default rootReducer

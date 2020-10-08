
import users from './users.json'

const initialState = users;
  
export default function(state = initialState, action) {
  switch (action.type) {
      default:
        return state;
  }
}
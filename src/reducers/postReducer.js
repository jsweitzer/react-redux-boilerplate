import { FETCH_POSTS, NEW_POST, INIT_STATE } from '../actions/types'

const initialState = {}

export default function(state = initialState, action) {
    console.log('reducing');
    switch(action.type){
        case FETCH_POSTS:
        return { ...state, webItems: [...action.payload] }
        case NEW_POST:
            action.post.id = state.items.length + 1;
            return {...state, items: [ action.post,...state.items ]}
        case INIT_STATE:
            return  {...state}
        default:
            return state;
    }
}


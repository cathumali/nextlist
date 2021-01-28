import { memesConstants } from '../constants';

const initialState = {
    data: {
      memes: []
    },
    loading :false
};

export const memesReducer = (state = initialState, action) => {

	switch (action.type) {
		case memesConstants.FETCH_MEMES_REQUEST:
			return { 
				...state, 
				loading: true,  
			}
      break;	
		case memesConstants.FETCH_MEMES_SUCCESS:
			return { 
				...state, 
        loading: false,  
        data: action.payload
			}
      break;	
    case memesConstants.FETCH_MEMES_FAILED:
			return { 
				...state, 
				loading: false, 
			}
      break;	
    default :
        return state;
	}
}

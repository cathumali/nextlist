import { jobsConstants } from '../constants';

const initialState = {
    data: [],
    loading :false
};

export const jobsReducer = (state = initialState, action) => {

	switch (action.type) {
		case jobsConstants.FETCH_JOBS_REQUEST:
			return { 
				...state, 
				loading: true, 
				data: []
			}
      break;	
		case jobsConstants.FETCH_JOBS_SUCCESS:
			return { 
				...state, 
        loading: false,  
        data: action.payload
			}
      break;	
    case jobsConstants.FETCH_JOBS_FAILED:
			return { 
				...state, 
				loading: false, 
			}
      break;	
    default :
        return state;
	}
}

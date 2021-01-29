import { memesConstants } from '../constants';
const axios = require('axios');

export const fetchAllMemes = () => dispatch => {
  dispatch({ type: memesConstants.FETCH_MEMES_REQUEST });
  const config =  {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      "Accept": "application/json",
      'Cache-Control': 'no-cache',
    },
    withCredentials: true,
    credentials: 'same-origin'
  }
  fetchAllMemesService(config)
  .then( res => {
    dispatch({ type: memesConstants.FETCH_MEMES_SUCCESS, payload: res.data });
  }).catch((error) => {
    console.log(error); 
    dispatch({ type: memesConstants.FETCH_MEMES_FAILED });
  });
} 

/**
 * Services
 */
const fetchAllMemesService = (config) => {
  // const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
  // const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
  // const memesUrl = `https://api.imgflip.com/get_memes`
  // return fetch( `${corsAnywhere}${memesUrl}`, config ).then(res => res.json())
  const fileData = 'api/memes';
  return fetch( `${fileData}`, config ).then(res => res.json())
}


 
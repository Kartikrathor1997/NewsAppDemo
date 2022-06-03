import * as types from '../types'
import {endpoints, getFullUrl, services} from '../../utils';
import { touchProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { API_KEY } from '../../utils/config';


export const getNewsAction = (data) => {

    return(dispatch) => {
        dispatch({
            type: types.GET_API_DATA_START,
            payload: null
        });

   console.log("in action")

        services.get(getFullUrl(endpoints.news),{
            api_key: API_KEY,
        })
        console.log("apil link", getFullUrl(endpoints.news))
        .then((res)=>{
            console.log(res)
            if(res){
                console.log(res,"res"); 
                dispatch({
                    type: types.GET_API_DATA_SUCCESS,
                    payload: res
                })
            }
            else{
                dispatch({
                    type: types.GET_API_DATA_FAIL,
                    payload: res
                })
            }
        })
    

    }
  }
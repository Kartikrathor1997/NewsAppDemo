import * as types from '../types'

const init_state = {

    data:null,
    newsData:{
        data:null
    },
    getSearchedData:{
        data:null
    }
}


 const NewsReducer = (state = init_state, action)  => {
    switch(action.type){
        case types.GET_API_DATA_START : {
            return{
                ...state,
                newsData:{
                    data:null
                }
            }
        }
        case types.GET_API_DATA_SUCCESS : {
            return{
                ...state,
                newsData:{
                    data:action.payload.data
                }
            }
        }

        case types.GET_API_DATA_FAIL : {
            return{
                ...state,
                newsData:{
                    data:null
                }
            }
        }
    }
    return state;
}

export default NewsReducer;
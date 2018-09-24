import {FATCH_WATHERE} from '../actions/index'

export default function(state=[],action){
    //here state =null but we need array []
    switch(action.type){
        
            case FATCH_WATHERE:
             console.log(action.payload);
           // return state.concat([action.payload.data]);
            return [action.payload.data,...state];
            //both the above line is same 

    }
//console.log('action recieved:',action)


return state;
}
import {FATCH_WATHERE} from '../actions/index'

export default function(state=[],action){
    //here state =null but we need array []
    switch(action.type){
        
            case FATCH_WATHERE:
             console.log(action.payload.data);
           // return state.concat([action.payload.data]);
           //return [Object.assign(action.payload.data,state)];
           const temp =[action.payload.data,...state];

           const length= temp.length;
           console.log(length);
           if(length==3){
                 
            temp.splice(-1,1)
           }

            return temp;
            //both the above line is same 

    }
//console.log('action recieved:',action)


return state;
}
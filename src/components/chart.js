import _ from 'lodash';

import React, {Component} from 'react';
import { Sparklines,SparklinesLine,SparklinesReferenceLine  } from 'react-sparklines';

function average(data){

    return _.round(_.sum(data)/data.length);
}

export default (props)=>{
     return(
        <div  style={{height:100 +'px',width:200+'px'}}>   
            <Sparklines data={props.data} >
                    <SparklinesLine color={props.color} />
                    <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>avg{average(props.data)} unit {props.unite}</div>
        </div>

     )


}
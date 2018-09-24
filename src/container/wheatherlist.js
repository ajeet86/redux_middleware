import React,{Component} from 'react';
import { connect } from 'react-redux';

class WheatherList extends Component{

    renderWhather(cityData){
        console.log('request:',cityData.city.name);
        return(
              <tr  key={cityData.city.id} ><td >{cityData.city.name}</td></tr>
        )

    }

    render(){

        if(!this.props.weather){
            return <div>loading</div>
        }
        console.log(this.props);
            return(
               <table className="table table-hover">
                   <thead>
                       <tr><th>city</th></tr>
                       <tr><th>temp</th></tr>
                       <tr><th>preser</th></tr>
                       <tr><th>humidity</th></tr>
                   </thead>
                   <tbody>
                   {this.props.weather.map(this.renderWhather)}
                   </tbody>



               </table>
            );

    }
}
/*function mapStateToProps(state){
    console.log('amamamamamam'+state.wheather);
     return {wheather:state.wheather}

}*/

function mapStateToProps({ weather }) {
    return { weather };
  }
export default connect(mapStateToProps)(WheatherList);
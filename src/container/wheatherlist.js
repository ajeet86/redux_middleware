import React,{Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googlemapcom';


class WheatherList extends Component{
    
    renderWhather(cityData){
      //  console.log('request:',cityData.city.name);
      const name=cityData.city.name;
      const temps=cityData.list.map(tepmraterdat=>tepmraterdat.main.temp);
      const pressures=cityData.list.map(tepmraterdat=>tepmraterdat.main.pressure);
      const humiditys=cityData.list.map(tepmraterdat=>tepmraterdat.main.humidity);
      const {lat,lon}=cityData.city.coord;
     // console.log(temps);
        return(
              <tr  key={name} >
              <td  >{name}<GoogleMap  lat={lat}  lon={lon}  /></td>
              <td >
            <Chart data={temps}   color='red' unite='K' />
                    </td>
              <td> <Chart data={pressures}  color='orange'  unite='hpa'/> </td>
              <td><Chart data={humiditys}  color="blue" unite='%' /> </td>
              
              </tr>
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
                   <tr><th>city</th>
                       <th>temp</th>
                       <th>preser</th>
                       <th>humidity</th></tr>
                   </thead>
                   <tbody>
                   {this.props.weather.map(this.renderWhather)}
                   </tbody>



               </table>
            );

    }
}
/*function mapStateToProps(state){
    console.log('amamamamamam'+state.weather);
     return {weather:state.weather}

}*/

function mapStateToProps({ weather }) {
    return { weather };
  }
export default connect(mapStateToProps)(WheatherList);
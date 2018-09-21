import React,{Component} from 'react';

 class SearcBox  extends Component {

constructor(props){
    super(props);

    this.state={searchterm:''}
    this.onInputchange=this.onInputchange.bind(this)//this line write here this is an instace of searchbox 
    //and has afunction call onInputchange and bind this function which is search bar in new bind function this.onInputchange 
}

onInputchange(event){

    //console.log(event.target.value);
    this.setState({searchterm:event.target.value});
}
onFormSubmit(event){
    event.preventDefault();

}

     render(){

        return(

            <div>
                    srearch box here
                    <form id='search' onSubmit={this.onFormSubmit}>
                        <input 
                        type='text'
                         placeholder="get data from api"
                         value={this.state.searchterm}
                         onChange={this.onInputchange}
                         
                         />
                        <button >submit</button>
                    </form>
            </div>
        )

     }


}

export default SearcBox
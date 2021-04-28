import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import { CircularProgress } from '@material-ui/core';


class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={lat:null,errorMessage:''};
    }

    render()
    {
       if(!this.state.lat && !this.state.errorMessage)
       {
        return <CircularProgress/>
       }
       if(!this.state.lat && this.state.errorMessage)
       {
        return <div>Error Message:{this.state.errorMessage}</div>
       }
    
        return <SeasonDisplay lat={this.state.lat}/>
    }

    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                console.log(position);
                this.setState({lat:position.coords.latitude});
            },
            (error)=>{
                console.log(error.message);
               this.setState({errorMessage:error.message})
            });
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));
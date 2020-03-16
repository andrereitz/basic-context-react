import React from 'react';
import { MyContext } from '../contexts';

export class Person extends React.Component{
    constructor(props){
        super(props)
        console.log('the props', props);
    }
    render(){
        return(
            <div>
                <ul>
                    <li>Person Name: {this.props.who.name}</li>
                    <li>Person Age: {this.props.who.age}</li>
                    <li>Is he cool? {this.props.who.cool ? 'yep' : 'no'}</li>
                </ul>
                {/* <p>Person name: {this.props.who.name}</p> */}
                {/* <p>Person age: {context.state.age}</p>*/}
                <button onClick={ () => this.props.onAgeIncrease(this.props.who.name) }>Increase one year</button> 
            </div>
        )
    }
}
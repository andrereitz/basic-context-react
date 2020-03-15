import React from 'react';
import { MyContext } from '../contexts';

export class Person extends React.Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p>Person name: {context.state.name}</p>
                            <p>Person age: {context.state.age}</p>
                            <button onClick={ () => context.increaseOneYear(context.state.name) }>Increase one year</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}
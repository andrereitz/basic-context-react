import React, {Component} from 'react';

// Create the context
export const MyContext = React.createContext();

// Create the provider
export class MyProvider extends Component{
    state = {
        name: 'Andre',
        age: 31,
        cool: true
    }

    increaseOneYear = (name) =>{
        console.log('increasing one year of', name);
        // console.log(props);
        this.setState({ age: this.state.age + 1 })
    }
    render(){
        return(
            <MyContext.Provider value={{
                state: this.state,
                increaseOneYear: this.increaseOneYear
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
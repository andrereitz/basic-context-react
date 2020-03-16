import React, {Component} from 'react';

// Create the context
export const MyContext = React.createContext();

// Create the provider
export class MyProvider extends Component{
    state = {
        people:[
            {
                name: 'Andre',
                age: 31,
                cool: true
            },
            {
                name: 'Mark',
                age: 18,
                cool: false
            },
            {
                name: 'John',
                age: 29,
                cool: true
            }
        ]
    }

    increaseOneYear = (name) =>{
        console.log('increasing one year of', name);
        this.setState({ people: this.state.people.map( person => {
                if(person.name === name){
                    person.age = person.age + 1;
                }

                return person;
            }) 
        })
        console.log(this.state);
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
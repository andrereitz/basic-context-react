import React, {Component, useContext} from 'react';
import { Person } from './Person';
import { MyContext } from '../contexts';

const getPeople = (context) =>{
        // console.log('function called', context.state.people.map(person => person.name) )

        const result = context.state.people.map( (person, index) => {
            return (
                <Person key={index} who={person} />
            )
        } )

        return result;

}

export class Family extends Component{
    render(){
        return(
            <MyContext.Consumer>
                {(context) => (
                    <div className="family">
                        {/* {getPeople(context)} */}
                        { Object.keys(context.state.people).map(function(person) {
                            return(
                                <Person key={person} who={context.state.people[person]} onAgeIncrease={context.increaseOneYear} />
                            )
                        })}
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}
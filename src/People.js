import React from 'react';

const People = ({people, deletePerson}) => {

    const listOfPeople = people.length ? (
        people.map(person => {
            return(
                <div key={person.id}>
                    <span onClick={() => {deletePerson(person.id)}}>{person.name} : {person.gender}</span>
                </div>
            )
        })
    ) : (
        <p>there are no people left</p>
    )
    return(
        <div>{listOfPeople}</div>
    )
}

export default People;
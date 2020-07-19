import React from 'react'

function Person({person}) {
    return (
        <div>
             <h2>my id {person.id} my Name is {person.name} my skills are {person.skill}</h2>
        </div>
    )
}

export default Person

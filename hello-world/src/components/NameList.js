import React from 'react'
import Person from './Person'

function NameList() {
const persons = [
    {
        id:1,
        name:'Jai Amirthesh ',
        skill: 'Angular'

    },
    {
        id:2,
        name:'Vijaya lakshmi  ',
        skill: 'React'
    },
    {
        id:3,
        name:'Sundaram  ',
        skill: 'React Rudex'
    }
]
//const personList = persons.map(person => <h2>my id {person.id} my Name is {person.name} my skills are {person.skill}</h2>)
const personList = persons.map(person =><Person key={person.id } person ={person}/>)
return <div>{personList}</div>

    //const names=['Sundar','Abi','Viji']

    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )
}

export default NameList

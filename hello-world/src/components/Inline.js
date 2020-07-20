import React from 'react'
const headLine ={
    fontSize:'72px',
    color:'blue'
}

function Inline() {
    return (
        <div>
            <h1 className='error'>Error </h1>
            <h1 style={headLine}>InLine style </h1>
            
        </div>
    )
}

export default Inline

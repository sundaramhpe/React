import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux'


function HooksCakeContainer() {
    // import the use selector 
    const numberOfCakes = useSelector(state => state.numberOfCakes)
    // import use dispatch 
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes -{numberOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
            
        </div>
    )
}

export default HooksCakeContainer

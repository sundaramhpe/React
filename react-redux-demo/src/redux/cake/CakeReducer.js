import {BUY_CAKE} from './CakeTypes'
// create the initialaization constant 
const initialState ={
    numberOfCakes:10
}
// define the reducer function
const cakeReducer = (state = initialState ,action)=>{
    switch(action.type){
        case BUY_CAKE : return {
            // existing state to maintain 
            ...state,
            numberOfCakes:state.numberOfCakes - 1
        }
        default : return state

    }

}
export default cakeReducer
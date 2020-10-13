import React , {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {FruitContext} from "../../App";


function Form (){
    const {state, dispatch} = useContext(FruitContext);
    console.log(state.fruit)
    // const fruitContext = useContext(FruitContext)
    return(
        <div>
            {/*<div>{state.fruit}</div>*/}
            <div>
                <NavLink  to="/piechart" >Pie Chart</NavLink>

            </div>

            <input type="text"/>
            <input type="text"/>
            <button onClick={()=>{dispatch({type:'add', payload:{name:"sdf",count:20}})}}>добавить</button>
            {JSON.stringify(state.fruit)}
        </div>
    )

}
export default Form
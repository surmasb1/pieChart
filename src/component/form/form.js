import React, {useContext, useRef} from 'react';
import {NavLink} from "react-router-dom";
import {FruitContext} from "../../App";


function Form (){
    const fruitRef = useRef(null)
    const countRef = useRef(null)

    const handleclick = ()=>{
        const body = {
            name:fruitRef.current.value,
            count: Number(countRef.current.value)
        }
        console.log(body)
         dispatch({type:'add', payload:body})
    }


    const {state, dispatch} = useContext(FruitContext);
    // const fruitContext = useContext(FruitContext)
    return(
        <div>
            {/*<div>{state.fruit}</div>*/}
            <div>
                <NavLink  to="/piechart" >Pie Chart</NavLink>

            </div>

            <input ref={fruitRef} type="text" placeholder='фрукт'/>
            <input ref={countRef} type="text" placeholder='значение'/>
            <button onClick={handleclick}>добавить</button>

                 {/*dispatch({type:'add', payload:{name:"sdf",count:20}})}*/}

            {JSON.stringify(state.fruit)}
        </div>
    )

}
export default Form
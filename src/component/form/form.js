import React, {useContext, useRef} from 'react';
import {NavLink} from "react-router-dom";
import {FruitContext} from "../../App";
import './form.css'

function Form (){
    const fruitRef = useRef(null)
    const countRef = useRef(null)
    const handleClick = ()=>{
        const body = {
            name:fruitRef.current.value,
            count: Number(countRef.current.value)
        }
         dispatch({type:'add', payload:body})
        fruitRef.current.value=''
        countRef.current.value=''
    }

    const { dispatch} = useContext(FruitContext);
    return(
        <div className='gtt'>
            <div>
                <NavLink className='button1' to="/piechart" >Pie Chart</NavLink>
            </div>
            <h3 className='infoappl'>Введіть дані:</h3>
            <div>
                <input className='nameAppl' ref={fruitRef} type="text" placeholder='фрукт'/>
            </div>
            <div>
                <input className='nameAppl' ref={countRef} type="number" min={0} placeholder='значение'/>
            </div>
            <button className='button' onClick={handleClick}>Добавити</button>
       </div>
    )
}
export default Form
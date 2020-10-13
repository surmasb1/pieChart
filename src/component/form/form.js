import React , {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {FruitContext} from "../../App";


function Form (){
    const fruitContext = useContext(FruitContext)
    return(
        <div>
            <div>{fruitContext.fruitState}</div>
            <div>
                <NavLink  to="/piechart" >Pie Chart</NavLink>

            </div>

            <input type="text"/>
            <input type="text"/>
            <button onClick={()=>fruitContext.fruitDispatch('add')}>добавить</button>
        </div>
    )

}
export default Form
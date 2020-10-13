import React, {useReducer} from 'react';
import './App.css';
import { BrowserRouter, Route,  Switch, NavLink  } from "react-router-dom";
import PieChart from "./component/PieChart/PieChart";
import Form from "./component/form/form";

export const FruitContext = React.createContext()

const initialState ={
    fruit: [{
                name:'apple',
                count:6
            },
            {
                name:'orange',
                count:3
            },
            {
                name:'lemon',
                count:3
            }
            ]
}
const reducer = (state, action) => {
    switch (action.type){
        case 'add':
            return{
                state,
               fruit:[...state.fruit, action.payload]
            }
            default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer,initialState)
    return (
        <FruitContext.Provider
        value={{state,  dispatch}}
        >
            <BrowserRouter>

                <Switch>
                    <Route path={'/'} exact component={Form}/>
                    <Route path={'/piechart'} component={PieChart}/>
                </Switch>
            </BrowserRouter>
        </FruitContext.Provider>


    )

  //   const fruit = [
  //       {
  //           name:'apple',
  //           count:23
  //       },
  //       {
  //           name:'orange',
  //           count:2
  //       },
  //       {
  //           name:'limon',
  //           count:3
  //       },
  //       {
  //           name:'bananna',
  //           count:4
  //       },
  //       {
  //           name:'fgfg',
  //           count:5
  //       },
  //       {
  //           name:'fgftgg',
  //           count:1
  //       }
  //   ];
  //   let totalcount = fruit.reduce((accamval,currentval)=> accamval+currentval.count,0);
  //
  //   let arr= [];
  //   let camul =0;
  //   fruit.forEach((elem,index)=>{
  //        camul = elem.count+camul;
  //       let alpha = {
  //           x: Math.cos(2 * Math.PI * (camul/totalcount))*100,
  //           y: Math.sin(2 * Math.PI * (camul/totalcount))*100,
  //       }
  //       arr.push(alpha)
  //   })
  //
  // return (
  //   <div className="App">
  //       <svg height="600" width="600"  viewBox="-100 -100 200 200">
  //           <g transform="rotate(-90)">
  //               {arr.map((n , index)=>{
  //                   let start = `L100,0`;
  //                   let curentxy = index +1 === arr.length ?`100,0` : `${n.x},${n.y}`
  //                   let dd= `M0,0 ${index === 0 ? start : "L"+arr[index-1].x+","+arr[index-1].y } A100,100 0 ${fruit[index].count/totalcount >= 0.5 ? 1: 0 },1 ${curentxy} Z`
  //                   let colorel = `rgb(${255 * Math.random()}, ${255 * Math.random()},${255 * Math.random()})`
  //                   return(
  //                           <path key={index} d={dd} fill={colorel} fillOpacity='0.7'/>
  //                       )
  //               })}
  //
  //
  //           </g>
  //       </svg>
  //
  //
  //   </div>
  // );
}

export default App;

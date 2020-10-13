import React, {useContext, useRef} from 'react';
import {NavLink} from "react-router-dom";
import {FruitContext} from "../../App";


const PieChart = ()=>{

    const {state} = useContext(FruitContext);
const {fruit} = state
    // const fruit = [
    //     {
    //         name:'apple',
    //         count:16
    //     },
    //     {
    //         name:'orange',
    //         count:30
    //     },
    //     {
    //         name:'limon',
    //         count:3
    //     },
    //     {
    //         name:'bananna',
    //         count:4
    //     },
    //     {
    //         name:'fgfg',
    //         count:5
    //     },
    //     {
    //         name:'fgftgg',
    //         count:1
    //     }
    // ];
    let totalcount = fruit.reduce((accamval,currentval)=> accamval+currentval.count,0);
    let idRef= useRef(null)

    let arr= [];
    let camul =0;
    fruit.forEach((elem)=>{
        camul = elem.count+camul;
        let alpha = {
            x: Math.cos(2 * Math.PI * (camul/totalcount))*100,
            y: Math.sin(2 * Math.PI * (camul/totalcount))*100,
        }
        arr.push(alpha)
    })
    // const hideTooltip = ()=>{
    //     const elem = idRef.current;
    //     elem.innerHTML = ''
    //
    // }
 const showName = (e,title)=>{
         const elem = idRef.current;
         const {pageY, pageX} = e;
         elem.innerHTML = title;

     idRef.current.style.position = "absolute"
     // idRef.current.style.display = "block"
     idRef.current.style.top = `${pageY-20}px`;
     idRef.current.style.left = `${pageX}px`;

 }
    return (
        <div >
            <div>
                <NavLink  to={'/'}>Form</NavLink>
            </div>
            <div  ref={idRef}/>
            <div>

                <svg height="600" width="600"  viewBox="-100 -100 200 200">
                    <g  transform="rotate(-90)">
                        {arr.map((n , index)=>{
                            let start = `L100,0`;
                            let curentxy = index +1 === arr.length ?`100,0` : `${n.x},${n.y}`
                            let dd= `M0,0 ${index === 0 ? start : "L"+arr[index-1].x+","+arr[index-1].y } A100,100 0 ${fruit[index].count/totalcount >= 0.5 ? 1: 0 },1 ${curentxy} Z`
                            let colorel = `rgb(${255 * Math.random()}, ${255 * Math.random()},${255 * Math.random()})`
                            return(
                                <path key={index} d={dd} fill={colorel} fillOpacity='0.7'  onMouseOver={(event)=>{

                                    showName(event,fruit[index].name)
                                }}/>
                            )
                        })}


                    </g>
                </svg>
            </div>



        </div>
    );
}
export default PieChart
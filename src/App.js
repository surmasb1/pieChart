import React, {useReducer} from 'react';
import './App.css';
import { BrowserRouter, Route,  Switch  } from "react-router-dom";
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

}

export default App;

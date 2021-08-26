import React from 'react';
import {Add,Sub,Mul,Div} from './Calculator';

function App(){
    return(
        <>
        <h1>
        <ol>
            <li>Sum of this:- {Add(50,11)}</li>
            <li>Sub of this:- {Sub(50,11)}</li>
            <li>Mul of this:- {Mul(50,11)}</li>
            <li>Div of this:- {Div(50,11)}</li>
        </ol>
        </h1>
      </>
    );
}
export default App;
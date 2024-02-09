import * as React from "react";
function reducer(state,action){
    switch(action.type){
        case 'changeName':
            return {
             ...state,
                name:action.value
            };
        case 'changeAge':
            return {
                ...state,
                age:action.value
            };
        default:
            throw new Error("Invalid action type");
    }
}

export default function Reducer1(){
    const [{name,age},dispatch]=React.useReducer(reducer,{
        name:"",
        age:"",
    });

    return(
    <>
    <input placeholder="Name" value={name} 
        onChange={(e)=>dispatch({type:"changeAge",value:e.target.value})} />
        <br/>
        {name}<br/>
        {age}
    </>
    );
}
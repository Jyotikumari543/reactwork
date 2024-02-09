import * as React from "react";
const initialState = {
    options:[
        {id:1,value:20,name:"car"},
        {id:2,value:30,name:"cycle"},
        {id:3,value:40,name:"plane"},
        {id:4,value:50,name:"bike"},
    ],
    selected:1,
    quantity:1,
};

function reducerButtonState(state){
    return{
        ...state,
        incrementDisabled:state.quantity === 10,
        decrementDisabled:state.quantity === 0,
    };
}

function reduceTotal(state){
    const option = state.options.find((i)=>i.id === state.selected);
    return {...state, total:state.quantity * option.value};
}

function reducer(state,action){
    let newState;
    switch(action.type){
        case 'init':
            newState = reduceTotal(state);
            return  reducerButtonState(newState);
        case "decrementQuantity":
            newState = {...state,quantity:state.quantity - 1};
            newState = reduceTotal(newState);
            return reducerButtonState(newState);
        case "incrementQuantity":
            newState = {...state,quantity:state.quantity + 1};
            newState = reduceTotal(newState);
            return reducerButtonState(newState);
        case "selectItem":
            newState = {...state,selected:Number(action.id)};
            return reduceTotal(newState);
        default:
            throw new Error("Action not Supported");
    }
}

export default function ReducerDepends(){
    const[{
        options,
        selected,
        quantity,
        total,
        incrementDisabled,
        decrementDisabled,
    },dispatch] = React.useReducer(reducer,initialState);

    React.useEffect(()=>{
        dispatch({type:'init'});
    });
    return(
        <>
        <button disabled={incrementDisabled} 
        onClick={()=>dispatch({type:"incrementQuantity"})}>+</button>

        <button disabled={decrementDisabled} 
        onClick={()=>dispatch({type:"decrementQuantity"})}>-</button>

        <input readOnly value={quantity} />

        <select value={selected}
            onChange={(e)=>dispatch({type:"selectItem",id:e.target.value})}>
            {options.map((i)=>(
                <option key={i.id} value={i.id}>{i.name}</option>
            ))}
        </select>
        {total}
        </>
    );
}

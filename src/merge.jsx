import * as React from "react";
import { UserProvider } from "./UserContext";
import {Page1,Page2,Page3} from "./Pages";

function SelectPage({index}){
    const Page = [Page1, Page2, Page3][index];
    return <Page/>;
}

export function MergedComp(){
    const [index,setIndex]= React.useState(0);
    return (
        <>
        <UserProvider>
            <button onClick={()=>setIndex(0)} disabled={index === 0}>
                Page1
                </button>
                <button onClick={()=>setIndex(1)} disabled={index === 1}>
                Page2
                </button>
                <button onClick={()=>setIndex(2)} disabled={index === 2}>
                Page3
                </button>
        </UserProvider>
        </>
    )
}
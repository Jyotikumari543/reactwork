import React from "react";
import {UserContext} from "./UserContext"

function UserName(){
        const user = React.useContext(UserContext);
        return(
                <p>
                        Logged in as {user.name} and Id is {user.id}
                </p>
        )
}

export function Page1(){
        return(
                <>
                        <h1>Page1</h1>
                        <UserName/>
                </>
        )
}

export function Page2(){
        return(
                <>
                        <h1>Page2</h1>
                        <UserName/>
                </>
        )
}

export function Page3(){
        return(
                <>
                        <h1>Page3</h1>
                        <UserName/>
                </>
        )
}
import * as React from "react";
export const UserContext = React.createContext();
function fetchUser(){
        return new Promise((resolve)=>{
                setTimeout(()=>{
                        resolve({id:"1",name:"Rku"});

                },3000);
        });
}

export function UserProvider({children}){
        const[user,setUser]= React.useState({name:"loading....", id:"..."});
        React.useEffect(()=>{
                fetchUser().then((user)=>{
                        setUser(user);
                });
        },[]);
        return(
                <>
                        <UserContext.Provider value={user}>{children}</UserContext.Provider>
                </>
        )
}
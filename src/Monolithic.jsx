import * as React from "react";
const id = (function* (){
    let i =1;
    while(true){
        yield i;
        i++;
    }
})
class MonolithicComp extends React.Component{
    state = {
        articles:[
            {id:id.next(),title:"Title1",summary:"Summary1"},
            {id:id.next(),title:"Title2",summary:"Summary2"},
            {id:id.next(),title:"Title3",summary:"Summary3"},
        ],
        summary:"",
        title:"",
    };

    onChangeTitle=(e)=>{
        this.setState({title:e.target.value});
    };

    onChangeSummary=(e)=>{
        this.setState({summary:e.target.value});
    };

    onClickAdd=()=>{
        this.setState((state)=>({
            articles:[
                ...state.articles,
                {
                    id:id.next(),
                    title:state.title,
                    summary:state.summary,
                },
            ],
            title:"",
            summary:"",
        }));
    };

    render(){
        return(
            <>

            </>
        );
    }
}

export default MonolithicComp;
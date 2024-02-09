import * as React from "react";
 const id=(function*() {
    let i=1;
    while(true){
        yield i;
        i+=1;
    }
})();
export default function MyRefactoredFeature({addArticle,articleList}{
    const [articles,setArticles]=React.useState([
        {id:id.next(),title:"Title1",summary:"summary1",display:"none"},
        {id:id.next(),title:"Title2",summary:"summary2",display:"none"},
        {id:id.next(),title:"Title3",summary:"summary3",display:"none"},
        {id:id.next(),title:"Title4",summary:"summary4",display:"none"},

    ]);
    const[title,setTitle]=React.useState("");
    const[summary,setSummary]=React.useState("");
    function onChangeTitle(e){
        setTitle(e.target.value);
    };
    function onChangeSummary(e){
        setSummary(e.target.value);
    };
}
)
    )

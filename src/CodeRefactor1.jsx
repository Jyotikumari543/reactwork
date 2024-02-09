export default function AddArticle({
        title,
        summary,
        onChangeTile,
        onChangeSummary,
        onClickAdd,
    }){
        return <>
                <input placeholder='title' value={title} onChange={onChangeTile}/>
                <input placeholder='summary' value={summary} onChange={onChangeSummary}/>
                <button onClick={onClickAdd}>Add</button>
            </>;
        
    }
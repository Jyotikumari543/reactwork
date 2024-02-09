import ArticleItem from "./CodeRefactor2";
export default function ArticleList({
    articles,
    onClickRemove,
    onClickToggle
}) {
    return(
     <>
    <ul>
        {articles.map((i)=>(
            <ArticleItem 
            key={i.id}
            article={i} 
            onClickRemove={onClickRemove}
            onClickToggle={onClickToggle}
            />
       ))}
    </ul>
    </>
    );
}
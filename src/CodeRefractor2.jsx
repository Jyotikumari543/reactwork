export default function ArticleItem({article,onClickToggle,onClickRemove}){
        return (
        <li>
            <a
            href="{`#${article.id}`}
            title="Toggle Display"
            onClick={onClickToggle.bind(null,article.id)}
            >
            {article.title}
            </a>{" "}
            <a
            href={`#${article.id}`}
            title="Delete Article"
            onClick={onClickRemove.bind(null,article.id)}
            >
            {"Delete"}
            </a>
            {" "}
            <p style={{display:article.display}}>{article.summary}</p>
        </li>
    
        );
    }
   
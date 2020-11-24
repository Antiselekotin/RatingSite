import React from 'react';
import {Link} from "react-router-dom";

const ArticleItem = ({data}) => {
    const {article_id, article_title, article_slug} = data;
    return (
        <tr className='c-dark'>
            <th scope="row">{article_id}</th>
            <td>{article_title}</td>
            <td>{article_slug}</td>
            <td>
                <Link to={`/admin/articles/${article_id}/edit`} className='table-list table-list_companies h-silver'>
                    Изменить
                </Link>
            </td>
        </tr>
    )
}


export default ArticleItem

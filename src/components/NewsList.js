import React from 'react';
import NewsListItem from "./NewsListItem";

const NewsList = (props) => {
    return (
        <ul>
            {props.posts.map(post =>
                <li>
                    <NewsListItem post={post} />
                </li>
            )}
        </ul>
    );
};

export default NewsList;
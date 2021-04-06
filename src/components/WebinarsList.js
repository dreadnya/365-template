import React from 'react';
import WebinarsListItem from "./WebinarsListItem";

const WebinarsList = (props) => {
    return (
        <ul>
            {props.posts.map(post =>
                <li>
                    <WebinarsListItem post={post} />
                </li>
            )}
        </ul>
    );
};

export default WebinarsList;
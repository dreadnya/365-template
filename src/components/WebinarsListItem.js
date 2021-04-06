import React from 'react';
import {Link} from "gatsby";

const WebinarsListItem = ({post}) => {
    return (
        <div>
            <Link to={`webinars/${post.frontmatter.slug}`} key={post.frontmatter.slug}>
                {post.frontmatter.title}
            </Link>
            <p>{post.frontmatter.date}</p>
        </div>
    );
};

export default WebinarsListItem;
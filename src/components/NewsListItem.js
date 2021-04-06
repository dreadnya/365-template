import React from 'react';
import {Link} from "gatsby";

const NewsListItem = ({post}) => {
    return (
        <div>
            <Link to={`news/${post.frontmatter.slug}`} key={post.frontmatter.slug}>
                {post.frontmatter.title}
            </Link>
            <p>{post.frontmatter.date}</p>
        </div>
    );
};

export default NewsListItem;
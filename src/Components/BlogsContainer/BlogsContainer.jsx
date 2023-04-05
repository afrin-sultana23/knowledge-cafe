import React from "react";
import "./BlogsContainer.css";
import Blog from "../Blog/Blog";

const BlogsContainer = ({ blogs, setBookmark, markAsRead }) => {
    return (
        <div id="blog-container-section">
            {blogs.map((blog, index) => (
                <Blog
                    key={index}
                    blog={blog}
                    setBookmark={setBookmark}
                    markAsRead={markAsRead}
                />
            ))}
        </div>
    );
};

export default BlogsContainer;

import React, { useEffect, useState } from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { getBookmarkList } from "../../utility/fakedb";

import { format } from "date-fns";

const Blog = ({ blog, setBookmark, markAsRead }) => {
    let [bookmarkIcon, setBookmarkIcon] = useState(farBookmark);
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const setLocalBookmark = (itemId) => {
        if (bookmarkIcon == farBookmark) {
            setBookmarkIcon(fasBookmark);
        } else {
            setBookmarkIcon(farBookmark);
        }
        setBookmark(itemId);
    };

    useEffect(() => {
        let storedList = getBookmarkList();
        if (storedList.includes(blog.id)) {
            setBookmarkIcon(fasBookmark);
        }
    }, []);

    return (
        <div className="my-3">
            <div className="card mb-5 p-0 border-0 border-bottom">
                <img
                    src={blog.cover_image}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body px-0">
                    <div className="card-title-area my-3">
                        <div className="author-area d-flex">
                            <div className="author-image">
                                <img
                                    src={blog.author_image}
                                    className="rounded-circle"
                                    alt=""
                                />
                            </div>
                            <div className="author-info">
                                <h5>{blog.author_name}</h5>
                                <p className="text-body-secondary">

                                    {monthNames[
                                        new Date(blog.publish_date).getMonth()
                                    ] +
                                        " " +
                                        format(
                                            new Date(blog.publish_date),
                                            "dd"
                                        )}
                                </p>
                            </div>
                        </div>
                        <div className="read-time-area">
                            {blog.read_time} min read{" "}
                            <FontAwesomeIcon
                                onClick={() => setLocalBookmark(blog.id)}
                                icon={bookmarkIcon}
                            />
                        </div>
                    </div>
                    <h2 className="card-title mb-3">{blog.blog_title}</h2>
                    <p>
                        {blog.tags.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="text-body-secondary"
                            >
                                #{tag}{" "}
                            </span>
                        ))}
                    </p>
                    <p
                        className="markBtn"
                        onClick={() => markAsRead(blog.read_time)}
                    >
                        Mark as read
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;

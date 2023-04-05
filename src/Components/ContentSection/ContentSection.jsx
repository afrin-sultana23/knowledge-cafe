import React, { useState, useEffect } from "react";
import BlogsContainer from "../BlogsContainer/BlogsContainer";
import BookmarkContainer from "../BookmarkContainer/BookmarkContainer";
import { addToBookmark, getBookmarkList } from "../../utility/fakedb";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContentSection.css";

const ContentSection = () => {
    const [bookmarkedList, setBookmarkedList] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [totalReadTime, setTotalReadTime] = useState(0);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    const setBookmark = (id) => {
        addToBookmark(id);
        fetchAndStoreBookmark();
    };

    const fetchAndStoreBookmark = () => {
        let localStoragelist = getBookmarkList();
        let nameList = [];

        for (let item of blogs) {
            if (localStoragelist.includes(item.id)) {
                nameList.push(item.blog_title);
            }
        }
        setBookmarkedList(nameList);
    };

    useEffect(() => {
        fetchAndStoreBookmark();
    }, [blogs]);

    const markAsRead = (time) => {
        let newTotal = parseInt(totalReadTime) + parseInt(time);
        setTotalReadTime(newTotal);
    };

    return (
        <>
            <ToastContainer />
            <div
                id="content-section"
                className="container border-top p-0 pt-3 mt-3 border-dark-subtle"
            >
                <BlogsContainer
                    blogs={blogs}
                    setBookmark={setBookmark}
                    markAsRead={markAsRead}
                />
                <BookmarkContainer
                    bookmarkedList={bookmarkedList}
                    totalReadTime={totalReadTime}
                />
            </div>
        </>
    );
};

export default ContentSection;

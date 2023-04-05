import React from "react";
import "./BookmarkContainer.css";

const BookmarkContainer = ({ bookmarkedList, totalReadTime }) => {
    return (
        <div id="bookmark-container" className="my-3">
            <div id="spent-time-section">
                Spent time on read: {totalReadTime} min
            </div>
            <div id="bookmark-list-section">
                <h4 className="mt-2">
                    Bookmarked Blogs: {bookmarkedList.length}
                </h4>
                {bookmarkedList.map((item, index) => (
                    <div key={index} className="bookmarked-blog mb-3">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookmarkContainer;

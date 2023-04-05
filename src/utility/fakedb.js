import { toast } from "react-toastify";


const getBookmarkList = () => {
    let bookmarkList = [];
    const storageBookmarkList = localStorage.getItem("bookmarked-list");
    if (storageBookmarkList) {
        bookmarkList = storageBookmarkList;
    } else {
        localStorage.setItem("bookmarked-list", JSON.stringify(bookmarkList));
    }
    return bookmarkList;
};

const addToBookmark = (id) => {
    let storedBookmarkList = getBookmarkList();
    let item;
    if (typeof storedBookmarkList == "string") {
        storedBookmarkList = JSON.parse(storedBookmarkList);
        item = storedBookmarkList.find((ele) => ele == id);
    }

    if (item) {
        removeFromBookmark(item);
    } else {
        let storedBookmarkListArr = [...storedBookmarkList, id];
        localStorage.setItem(
            "bookmarked-list",
            JSON.stringify(storedBookmarkListArr)
        );
        toast.success("Bookmarked!!!", { autoClose: 1000 });
    }
};

const removeFromBookmark = (item) => {
    let storedBookmarkList = getBookmarkList();
    if (storedBookmarkList) {
        let storedBookmarkListArr = JSON.parse(storedBookmarkList);
        if (storedBookmarkListArr.includes(item)) {
            let index = storedBookmarkListArr.indexOf(item);
            if (index !== -1) {
                storedBookmarkListArr.splice(index, 1);
                toast.success("Removed bookmark!!!", { autoClose: 1000 });
            }
        }
        localStorage.setItem(
            "bookmarked-list",
            JSON.stringify(storedBookmarkListArr)
        );
    }
};

export { getBookmarkList, addToBookmark };

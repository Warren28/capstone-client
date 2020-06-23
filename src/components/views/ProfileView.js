import React from "react";
import { Link } from "react-router-dom";

const ProfileView = (props) => {
  //console.log(typeof props.user);
  //console.log( props.user.bookmarks);
  //console.log(typeof props.user.email);
  let display;
  if (props.user.bookmarks) {
    display = props.user.bookmarks.map((bookmark) => (
      <div key={bookmark.id}>
        <h1>{bookmark.title}</h1>
        <p>{bookmark.ingredients}</p>
      </div>
    ));
  } else {
    display = (
      <div className="all-campuses">There are no recipe you bookmarked</div>
    );
  }

  return (
    <>
      <div>Profile</div>
      <div>Email: {props.user.email}</div>
      {/* <div>Bookmarks: {props.user.bookmarks.ingredients}</div> */}
      {display}
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </nav>
    </>
  );
};

export default ProfileView;

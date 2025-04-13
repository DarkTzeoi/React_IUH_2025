import React from "react";
import { Row } from "react-bootstrap";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import rating from "../../assets/rating_4.png";
const Infor = () => {
  return (
    <div className="flex flex-col border rounded-lg my-5">
      <div className="flex justify-between items-center mt-6 mb-20">
        <div>
          <img
            src="https://randomuser.me/api/portraits/women/23.jpg"
            alt=""
            className="rounded-full w-10 h-10 ms-5 me-2 inline"
          />
          <span className="inline">Emma Gonzalez</span>
        </div>
        <div className="flex items-center justify-center w-9 h-9 transition-colors duration-200 bg-pink-500 rounded-full shadow-md  me-3">
          <FaRegBookmark color="white" size="20px" />
        </div>
      </div>

      <div className="flex justify-around text-center">
        <div className="time">
          <p>Time</p>
          <p>45 minutes</p>
        </div>
        <div className="time">
          <p>Notes</p>
          <p>352 community notes</p>
        </div>
        <div className="time">
          <p>Rating:</p>
          <img src={rating} alt="rating" width={"150px"} />
        </div>
      </div>
    </div>
  );
};

export default Infor;

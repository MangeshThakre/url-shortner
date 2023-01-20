import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function Track({ notify }) {
  const navigate = useNavigate();
  const { urlId } = useParams();
  const [totalClicks, setTotalClicks] = useState(0);
  const [loading, setLoading] = useState(false);
  const URL = process.env.REACT_APP_URL;
  useEffect(() => {
    getClicks();
  }, []);

  async function getClicks() {
    setLoading(true);
    try {
      const response = await axios(URL + "/api/clicks/" + urlId);
      const { data } = response.data;
      setLoading(false);
      setTotalClicks(data.clicks);
    } catch (error) {
      setLoading(false);
      notify(error.response.data.message, "error");
      navigate("/track_url_count");
    }
  }

  return (
    <div className="  px-8 flex flex-col gap-5">
      <div className="  my-4">
        <h1 className="  my-2  md:text-6xl  text-3xl  font-semibold    text-[#febd61]   font-sans">
          Total
          <span className="text-[#f4baf4]"> URL </span>
          Clicks
        </h1>
        <p className=" md:text-lg  text-sm font-thin text-gray-400">
          The total number of clicks that your link has received so far.
        </p>
      </div>
      <div className="flex flex-col gap-3 max-w-2xl">
        <div className="flex  justify-center">
          <h1 className="text-5xl font-bold  text-[#f4baf4] ">
            {loading ? "LOaDinG..." : totalClicks}{" "}
            <span className="text-sm font-normal text-[#febd61] ">
              {totalClicks > 1 ? "clicks" : "click"}{" "}
            </span>
          </h1>
        </div>

        <p className="text-gray-100  md:text-lg  text-sm">
          Our tool will count each click as one hit to the long URL, even if
          there are multiple clicks from the same person or device. Check the
          <Link className="text-blue-400 cursor-pointer" to="/track_url_count">
            {" "}
            total number of clicks{" "}
          </Link>
          from other URL.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          className="    rounded-lg w-fit font-bold top-0 mt-[1px] right-0 p-2.5 text-sm  text-white bg-[#F7BE38] hover:bg-[#F7BE38]/90  focus:outline-none   "
        >
          Create other Short URL
        </Link>
      </div>
    </div>
  );
}

export default Track;

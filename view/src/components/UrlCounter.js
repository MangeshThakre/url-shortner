import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UrlCounter() {
  const navigate = useNavigate();
  const [shortUrl, setShortUrl] = useState("");

  function getClicks(e) {
    e.preventDefault();
    console.log(shortUrl.split("/"));
    navigate("/track/" + shortUrl.split("/")[3]);
  }

  return (
    <div className="  px-8 flex flex-col gap-10">
      <div className="  my-4">
        <h1 className="  my-2  md:text-6xl  text-3xl  font-semibold    text-[#febd61]   font-sans">
          <span className="text-[#f4baf4]"> URL </span>
          Click Counter
        </h1>
        <p className=" md:text-lg  text-sm font-thin text-gray-400">
          Enter the URL to find out how many clicks it has received so far.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <form
          className="flex  md:flex-row flex-col   gap-4  items-center  "
          onSubmit={(e) => getClicks(e)}
        >
          <input
            type="url"
            id="url"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter short URL Here"
            required
            onChange={(e) => setShortUrl(e.target.value)}
          />
          <button
            type="submit"
            className="py-2 px-3  md:py-[0.6rem]  flex items-center font-bold  md:w-36 md:text-sm  w-34  text-xs bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50  text-center text-white  rounded-lg  "
          >
            Track clicks
          </button>
        </form>
        <p className="  md:text-left text-gray-400 text-sm">
          {" "}
          <span className="text-white">Example :</span>{" "}
          https://shorty-url.vercel.app/AbckedfH
        </p>
      </div>
      <p className="md:text-lg text-gray-100 text-sm">
        * Track the total hits of the shortened URL in real time, you do not
        have to register.
      </p>
    </div>
  );
}

export default UrlCounter;

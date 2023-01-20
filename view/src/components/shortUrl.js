import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function ShortUrl() {
  const { urlId } = useParams();
  const [iscopied, setIscopied] = useState(false);
  const URL = process.env.REACT_APP_URL;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(URL + "/" + urlId);
      await setIscopied(true);
      setTimeout(() => setIscopied(false), 5000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="  px-8 flex flex-col gap-5">
      <div className="  my-4">
        <h1 className="  my-2  md:text-6xl  text-3xl  font-semibold    text-[#febd61]   font-sans">
          Your shortened
          <span className="text-[#f4baf4]"> URL </span>
        </h1>
        <p className=" md:text-lg  text-sm font-thin text-gray-400">
          Copy the shortened link and share it in messages, texts, posts,
          websites and other locations.
        </p>
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex  justify-center">
          <div className="relative w-full  max-w-lg">
            <input
              type="search"
              id="search-dropdown"
              defaultValue={URL + "/" + urlId}
              disabled
              className="block  font-bold p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              style={iscopied ? { backgroundColor: "#F7BE38" } : null}
            />
            <button
              type="button"
              onClick={() => copyContent()}
              className="absolute      font-bold top-0 mt-[1px] right-0 p-2.5 text-sm  text-white bg-[#F7BE38] hover:bg-[#F7BE38]/90  focus:outline-none     rounded-r-lg"
            >
              {iscopied ? "copied ✅" : "Copy URL"}

              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>

        <p className="text-gray-100 text-sm md:text-lg">
          Track{" "}
          <Link
            className="  text-blue-400  cursor-pointer"
            to={"/track/" + urlId}
          >
            the total of clicks{" "}
          </Link>
          in real-time from your shortened URL. Create other
          <Link className="text-blue-400 cursor-pointer" to="/">
            {" "}
            shortened URL.{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ShortUrl;

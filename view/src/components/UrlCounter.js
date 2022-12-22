import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UrlCounter({ notify }) {
  const navigate = useNavigate();
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const URL = process.env.REACT_APP_URL;

  async function getClicks(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios(URL + "/clicks/" + shortUrl.split("/")[3]);
      const { data } = response.data;
      setLoading(false);
      navigate("/track/" + data.clicks);
    } catch (error) {
      setLoading(false);
      notify(error.response.data.message, "error");
      navigate("/track_url_count");
    }
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
            {loading ? (
              <svg
                aria-hidden="true"
                role="status"
                className="inline ml-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            ) : null}
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

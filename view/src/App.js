import "./App.css";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShortUrl from "./components/shortUrl";
import Track from "./components/Track";
import UrlCounter from "./components/UrlCounter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const notify = (message, type) => toast[type](message);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home notify={notify} />} />
        <Route path="/shorturl/:urlId" element={<ShortUrl />} />
        <Route path="/track/:urlId" element={<Track notify={notify} />} />
        <Route path="/track_url_count" element={<UrlCounter />} />
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

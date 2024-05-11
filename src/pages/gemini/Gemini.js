import { React, useState } from "react";
import "./Gemini.scss";
import { gemini } from "../../redux/slices/feedSlice";
import { useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";

const Gemini = () => {
  const [queryy, setquery] = useState("");
  const [response, setresponse] = useState(null);
  const dispatch = useDispatch();

  const ask = async (e) => {
    e.preventDefault(); 
    const response = dispatch(
      gemini({
        query: queryy,
      })
    ).then((res) => {
      setresponse(res.payload);
      console.log(response);
    });
  };

  return (
    <div className="gemini_outer">
      <div class="wrapper">
        <label>
          <input placeholder= "Tell me Something about Dipesh" onChange={(e) => setquery(e.target.value)} />
        </label>
        <div class="buttons">
            <button onClick={ask} class="blob-btn">
                Ask
                <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                </span>
                </span>
            </button>
        </div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
    </filter>
  </defs>
</svg>
      </div>
      <br />
      <div className="gemini-response">
        {response &&
          response
            .split("\n")
            .map((line, index) => (
              <ReactMarkdown key={index}>{line}</ReactMarkdown>
            ))}
      </div>
    </div>
  );
};

export default Gemini;

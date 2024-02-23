import React, { useState } from "react";
import Definitions from "./Definitions";
import { motion } from "framer-motion";

function Home() {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [search, setsearch] = useState(false);
  const [error, seterror] = useState();
  const [fetched, setfetched] = useState();
  const [fetching, setfetching] = useState(false);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setWord(text);
      setText("");
      setsearch(true);
      setfetched(false);
    }
  };
  if (search === true) {
    navigator.clipboard.writeText(`${word}`);
    seterror(false);
    setfetching(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        setWord("");
        return res.json();
      })
      .then((result) => {
        setfetching(false);
        if (result.title === "No Definitions Found") {
          seterror(true);
          setfetching(false);
        } else {
          seterror(false);
          setfetching(false);
          setData(result);
          setfetched(true);
        }
      })
      .catch((err) => console.log(err));

    setsearch(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className={`w-11/12 min-h-screen flex flex-col gap-8 justify-center items-center ${
        fetched && "pb-20 mt-16"
      }`}
    >
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={handleEnter}
        placeholder="Search"
        className={`py-3 ${
          fetched && "mt-4"
        } px-3 md:px-5 border-2 border-white/40 outline-none outline-0 rounded-lg bg-transparent w-11/12 md:w-10/12 placeholder:text-sm`}
      />
      {error && (
        <div className="error-404 flex flex-col items-center">
          {/* <p className="text-lg font-medium">
            Oh that's
            <span className="text-[#930000]"> embarrasing🤭</span>
          </p>
          <p className="text-xs font-medium mb-4">
            At your big age you can't spell
          </p> */}
          <iframe
            title="Error 404"
            src="https://giphy.com/embed/FUKCPzVj0GGrCsdsmP"
            // width="480"
            // height="330"
            frameBorder="0"
            class="giphy-embed"
            className=""
            allowFullScreen
          ></iframe>
          {/* <iframe
            title="Error 404"
            src="https://giphy.com/embed/jOpLbiGmHR9S0"
            frameBorder="0"
            className="rounded-lg  w-full"
            class="giphy-embed"
            allowFullScreen
          ></iframe> */}
          <div className="text-center">
            <p className="text-[2rem] text-wrap7 md:text-[4rem] heading font-medium mt-4">
              Try entering another word
            </p>
          </div>
        </div>
      )}
      {fetching && <div class="loader"></div>}
      {fetched && <Definitions word={data} />}
    </motion.div>
  );
}

export default Home;

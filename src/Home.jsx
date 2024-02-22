import React, { useState } from "react";
import Definitions from "./Definitions";
import { motion } from "framer-motion";

function Home() {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [search, setsearch] = useState(false);
  const [fetched, setfetched] = useState();
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
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        setWord("");
        console.log(res.status);
        return res.json();
      })
      .then((result) => {
        if (result.title === "No Definitions Found") {
          alert("Sorry! No definitions found for this word.");
        } else {
          setData(result);
          console.log(result);
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
      className="w-11/12 min-h-screen flex flex-col gap-8 justify-center items-center pb-20"
    >
      {!fetched && (
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleEnter}
          placeholder="Search"
          className="py-3 mt-4 px-3 md:px-5 border-2 border-white/40 outline-none outline-0 rounded-lg bg-transparent w-11/12 md:w-10/12 placeholder:text-sm"
        />
      )}

      {fetched && <Definitions word={data} />}
    </motion.div>
  );
}

export default Home;

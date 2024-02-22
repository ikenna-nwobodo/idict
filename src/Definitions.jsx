import React from "react";
import Definition from "./Definition";
import { motion } from "framer-motion";

function Definitions({ word }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex flex-col"
    >
      <p className="heading text-[2rem] md:text-[4rem] text-ellipsis w-full leading-[4rem] font-bold">
        {word[0].word}
      </p>
      <div className="flex flex-wrap items-center gap-1">
        {word[0].phonetics.map((phonetic) => {
          return (
            <>
              <small>{phonetic.text}</small>
              {/* <div className="bg-white/50 h-1 w-3 rounded-full"></div> */}
            </>
          );
        })}

        {/* <div className="bg-white/50 h-1 w-3 rounded-full"></div>
        <small>/wo:d/</small>
        <div className="bg-white/50 h-1 w-3 rounded-full"></div>
        <small>/wo:d/</small> */}
      </div>
      <div className="definitions gap-6 flex flex-col justify-center items-center w-full mt-8">
        {word.map((word) =>
          word.meanings.map((meaning) => {
            return <Definition definition={meaning} />;
          })
        )}
      </div>
    </motion.div>
  );
}

export default Definitions;

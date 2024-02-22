import React from "react";

function Definition({ definition }) {
  const hasKey = (obj, key) => Object.keys(obj).includes(key);

  return (
    <div className="bg-transparent border-2 border-white/40 w-full p-4 rounded-xl gap-2 flex flex-col items-start">
      <code className="text-sm capitalize mb-3">{definition.partOfSpeech}</code>
      <div className="flex flex-col gap-4 w-full">
        {definition.definitions.map((def) => {
          return (
            <div className="bg-[#1d1d1d] text-white shadow-xl rounded-md w-full p-2">
              <p className="text-sm md:text-base">{def.definition}</p>
              {hasKey(def, "example") && (
                <p className="text-xs mt-2">
                  Example: <i> {def.example}</i>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Definition;

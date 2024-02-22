import React from "react";

function Nav() {
  return (
    <div className="w-full flex sticky top-0 bg-black/40 z-10 backdrop-blur-xl items-center justify-center py-3 ">
      {/* <code className="text-base text-white/70 font-bold">ikenna.</code> */}
      <p className="heading w-11/12 text-4xl">
        <span className="text-[#930000]">Dic</span>tionary
      </p>
    </div>
  );
}

export default Nav;

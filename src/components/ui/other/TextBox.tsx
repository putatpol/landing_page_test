import React from "react";

const TextBox = ({ label }: { label: string }) => {
  return (
    <div className="rounded-lg border-2 border-b-4 bg-white px-6 py-1">
      {/* == triangle == */}
      <div>
        <div className="absolute right-5 -bottom-[18px] rotate-210 border-r-8 border-b-24 border-l-8 border-r-transparent border-b-black border-l-transparent" />
        <div className="absolute right-4 -bottom-[11px] rotate-210 border-r-8 border-b-24 border-l-8 border-r-transparent border-b-white border-l-transparent" />
        <div className="absolute right-6 bottom-1 size-2 bg-white" />
      </div>
      <p className="uppercase text-xs md:text-base font-semibold">{label}</p>
    </div>
  );
};

export default TextBox;

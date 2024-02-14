import React from "react";

function Input({ value, onChange, placeholder, onClick }) {
  return (
    <div className="relative">
      <input
        className="w-[678px] placeholder-slate-400 bg-slate-200 px-4 py-2 text-xl rounded-lg"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button
        className="flex items-start pt-1 w-16 justify-center h-[44px] absolute bg-[#EA5959] right-0 bottom-0 rounded-lg"
        onClick={onClick}
      >
        +
      </button>
    </div>
  );
}

export default Input;

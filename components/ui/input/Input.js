import React from "react";

function Input({ placeholder, state, setState }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="block w-full p-1 text-[20px] font-medium  border-gray-500 outline-none border-2 rounded-md mb-4"
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  );
}

export default Input;

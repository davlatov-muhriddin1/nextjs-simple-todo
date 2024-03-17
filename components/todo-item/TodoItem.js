import React from "react";

function TodoItem({ id, name, lastname, hanleDelete }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{lastname}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => hanleDelete(id)}
          className="bg-red-800 px-4 py-2 text-white font-semibold rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;

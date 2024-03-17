"use client";
import TodoItem from "@/components/todo-item/TodoItem";
import Input from "@/components/ui/input/Input";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    if (!name || !lastname) {
      console.log("error");
      return;
    }

    const todoData = {
      id: uuidv4(),
      name,
      lastname,
    };

    setData([...data, todoData]);

    setName("");
    setLastname("");
  };

  const hanleDelete = (id) => {
    const deletedItem = data.filter((item) => item.id !== id);
    setData(deletedItem);
  };

  return (
    <div className="container py-4">
      <form onSubmit={handleClick}>
        <Input placeholder="Enter Your Name" state={name} setState={setName} />
        <Input
          placeholder="Enter Your Lastname"
          state={lastname}
          setState={setLastname}
        />
        <div className="flex justify-end">
          <button className="bg-green-800 px-5 py-2 font-bold text-white rounded-md">
            Send
          </button>
        </div>
      </form>
      {data.length ? (
        <table className="min-w-full text-center text-sm font-light mt-4">
          <thead className="border-b font-medium  bg-neutral-700 text-white">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Lastname</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-400 font-semibold text-[20px]">
            {data.map((item, idx) => (
              <TodoItem {...item} key={idx} hanleDelete={hanleDelete} />
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-center text-7xl mt-10 font-bold">Not Todo</h1>
      )}
    </div>
  );
}

export default Home;

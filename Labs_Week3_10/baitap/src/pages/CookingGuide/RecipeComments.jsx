import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
const RecipeComments = ({ notes }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [like, setLike] = useState(false);
  return (
    <div className="mt-16">
      <h2 className="mb-6 text-2xl font-bold">Cooking note</h2>

      <div className="p-6 mb-6 border border-gray-200 rounded-lg">
        <textarea
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="State your opinion about the article"
          rows="4"
        ></textarea>
        <div className="flex justify-end">
          <button className="px-6 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-600">
            Send
          </button>
        </div>
      </div>

      <div className="mb-6 border-b border-gray-200">
        <div className="flex mb-2 space-x-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "all"
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-500 hover:text-pink-400"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Notes (32)
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "helpful"
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-500 hover:text-pink-400"
            }`}
            onClick={() => setActiveTab("helpful")}
          >
            Most Helpful (20)
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "private"
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-500 hover:text-pink-400"
            }`}
            onClick={() => setActiveTab("private")}
          >
            Private (1)
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {notes.map((note) => (
          <div key={note.id} className="flex mb-6">
            <div className="flex-shrink-0 mr-4">
              <img
                src={note.avatar}
                alt={note.user}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-800">{note.user}</h4>
                <span className="text-sm text-gray-500">{note.time}</span>
              </div>
              <p className="text-gray-700">{note.content}</p>
              <div className="flex mt-2 space-x-4">
                <button className="text-gray-500 hover:text-pink-500">
                  {like ? <AiOutlineLike color="pink" /> : <AiOutlineLike />}
                </button>
                <button className="text-gray-500 hover:text-pink-500 mx-6">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeComments;

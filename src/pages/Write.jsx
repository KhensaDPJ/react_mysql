import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex gap-5">
      <div className="w-[60%] h-screen flex flex-col gap-5 pt-5 pl-10">
        <input
          type="text"
          placeholder="Title"
          className="w-full border-2 h-10 outline-none drop-shadow-lg"
        />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="h-[50%]"
        />
      </div>
      <div className="pt-5">
        <div className="border-2 h-[200px] pl-2 rounded-lg ">
          <h1 className="text-2xl font-bold">Publish</h1>
          <span>
            <b>Status : </b>Draft
          </span>
          <br />
          <span>
            <b>Visibility : </b>Public
          </span>
          <br />
          <input type="file" id="file" name="" className="hidden" />
          <label
            className="underline hover:text-blue-500 hover:po"
            htmlFor="file"
          >
            Upload Image
          </label>
          <div className="pt-5 flex gap-5">
            <button className="text-teal-400 border-2 w-28 h-10 border-teal-400 hover:drop-shadow-md">
              Save as Draft
            </button>
            <button className="border-2 w-28 h-10 bg-teal-400 text-white hover:drop-shadow-md">
              Update
            </button>
          </div>
        </div>
        <div className="border-2 h-[200px] pl-2 rounded-lg mt-5">
          <h1 className="text-2xl font-bold">Category</h1>
          <div className="text-teal-400">
          <div>
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div>
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div>
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div>
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div>
            <input type="radio" name="cat" value="design" id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div>
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Write;

"use client";
import React from "react";

const MessageInput = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <form style={{ position: "absolute", bottom: "16px", width: "77%" }}>
        <label htmlFor="chat-input" className="sr-only">
          Enter your prompt
        </label>
        <div className="relative">
          <textarea
            id="chat-input"
            className="block w-full resize-none rounded-xl border-none bg-slate-800 p-4 pr-16 text-sm text-slate-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-500 sm:text-base"
            placeholder="Enter your prompt"
            rows="1"
            required
          ></textarea>
          <button
            type="submit"
            className="absolute bottom-2 right-2.5 rounded-lg bg-blue-600 p-2 text-sm font-medium text-slate-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              aria-hidden="true"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;

'use client';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Sidebar = ({ agents, handleAgentClick }) => {
  const [activeValue, setactiveValue] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    setactiveValue(searchParams.get('agent'));
  }, [searchParams]);

  return (
    <aside className="flex">
      {/* First Column */}
      <div className="flex h-screen w-12 flex-col items-center space-y-8 border-r border-slate-700 bg-slate-900 py-8 dark:border-slate-700 dark:bg-slate-900 sm:w-16">
        {/* Logo */}
        <a href="/" className="mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-blue-600"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 24 24"
          >
            <path d="M20.553 3.105l-6 3C11.225 7.77 9.274 9.953 8.755 12.6c-.738 3.751 1.992 7.958 2.861 8.321A.985.985 0 0012 21c6.682 0 11-3.532 11-9 0-6.691-.9-8.318-1.293-8.707a1 1 0 00-1.154-.188zm-7.6 15.86a8.594 8.594 0 015.44-8.046 1 1 0 10-.788-1.838 10.363 10.363 0 00-6.393 7.667 6.59 6.59 0 01-.494-3.777c.4-2 1.989-3.706 4.728-5.076l5.03-2.515A29.2 29.2 0 0121 12c0 4.063-3.06 6.67-8.046 6.965zM3.523 5.38A29.2 29.2 0 003 12a6.386 6.386 0 004.366 6.212 1 1 0 11-.732 1.861A8.377 8.377 0 011 12c0-6.691.9-8.318 1.293-8.707a1 1 0 011.154-.188l6 3A1 1 0 018.553 7.9z"></path>
          </svg>
        </a>
        {/* New conversation */}
        <a
          href="#"
          className="rounded-lg p-1.5 text-slate-400 transition-colors duration-200 hover:bg-slate-800 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 9h8"></path>
            <path d="M8 13h6"></path>
            <path d="M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"></path>
            <path d="M16 19h6"></path>
            <path d="M19 16v6"></path>
          </svg>
        </a>
        {/* Conversations */}
        <a
          href="#"
          className="rounded-lg bg-blue-800 p-1.5 text-blue-600 transition-colors duration-200 dark:bg-slate-800 dark:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
          </svg>
        </a>
        {/* Discover */}
        <a
          href="#"
          className="rounded-lg p-1.5 text-slate-400 transition-colors duration-200 hover:bg-slate-800 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </a>
        {/* User */}
        <a
          href="#"
          className="rounded-lg p-1.5 text-slate-400 transition-colors duration-200 hover:bg-slate-800 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
          </svg>
        </a>
        {/* Settings */}
        <a
          href="#"
          className="rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          </svg>
        </a>
      </div>
      {/* Second Column */}
      <div
        className="h-screen w-52 overflow-y-auto bg-slate-900 py-8 dark:bg-slate-900 sm:w-60 "
        style={{ border: '1px solid #ffffff2b' }}
      >
        <div className="flex items-start">
          <h2 className="inline px-5 text-lg font-medium text-slate-200 dark:text-slate-200">
            Agents
          </h2>
          <span className="rounded-full bg-blue-600 px-2 py-1 text-xs text-slate-200">
            {agents?.length}
          </span>
        </div>

        <div className="mx-2 mt-8 space-y-4 h-[460px] overflow-auto">
          <Scrollbars
            universal
            style={{ height: '100%' }}
            renderThumbVertical={({ style, ...props }) => (
              <div
                {...props}
                style={{
                  ...style,
                  backgroundColor: 'rgb(56 58 102)',
                  borderRadius: '10px',
                  margin: '-6px',
                  marginTop: '2px',
                }}
              />
            )}
          >
            {agents?.map((item, i) => (
              <button
                onClick={() => {
                  handleAgentClick(item.id, item.name);
                }}
                key={i}
                className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-800 focus:outline-none dark:hover:bg-slate-800"
                style={{
                  background:
                    activeValue?.replaceAll('_', ' ') === item?.name &&
                    'rgb(30 41 59) ',
                }}
              >
                <h1 className="text-sm font-medium capitalize text-slate-200 dark:text-slate-200">
                  {item?.name}
                </h1>
                <p className="text-xs text-slate-400 dark:text-slate-400">
                  {item?.createdDate?.slice(0, 10)}
                </p>
              </button>
            ))}
          </Scrollbars>
        </div>
        <div
          style={{
            width: '221px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            bottom: '17px',
            gap: '10px',
            padding: '6px',
            position: 'absolute',
          }}
        >
          <p
            className="hover:text-red-400 text-red cursor-pointer text-[#2563eb]"
            style={{
              fontSize: '20px',
              borderRight: '1px solid white',
              paddingRight: '20px',
            }}
          >
            Agents
          </p>
          <p
            className="hover:text-red-400 text-red cursor-pointer text-white"
            style={{
              fontSize: '20px',
              paddingLeft: '10px',
            }}
          >
            Data
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

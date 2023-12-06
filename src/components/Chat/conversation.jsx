'use client';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Conversation = ({ chats }) => {
  return (
    <div style={{ height: '466px', overflow: 'auto', marginTop: '62px' }}>
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
        <div className="flex-1 space-y-6 overflow-y-auto  bg-slate-900 p-4 text-sm leading-6 text-slate-300 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7 pr-[24px]">
          {chats?.length > 0 ? (
            chats?.map((chat, i) => (
              <div
                key={i}
                className="flex items-start"
                style={{
                  flexDirection:
                    chat?.role === 'apiMessage' ? 'row' : 'row-reverse',
                }}
              >
                <p
                  className="mr-2 h-8 w-8 rounded-full"
                  style={{
                    background:
                      chat?.role === 'apiMessage' ? '#354ea1' : '#363536',
                    display: ' flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: chat?.role === 'apiMessage' ? '0px' : '8px',
                    marginRight: chat?.role === 'apiMessage' ? '8px' : '0px',
                  }}
                >
                  {chat?.role === 'apiMessage' ? 'A' : 'U'}
                </p>
                <div className="flex rounded-b-xl rounded-tr-xl bg-slate-800 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
                  <p>{chat.content}</p>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '500px',
                fontSize: '25px',
              }}
            >
              <p>No Chats</p>
            </div>
          )}
        </div>
      </Scrollbars>
    </div>
  );
};

export default Conversation;

"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const Sessions = ({ sessions, selectedSession, setSelectedSession }) => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Listbox value={selectedSession} onChange={setSelectedSession}>
        {({ open }) => (
          <>
            <div className="relative mt-2 w-[303px]">
              <Listbox.Button className="h-[43px] bg-[#1e293b]  relative w-full cursor-default rounded-md  py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span className="block truncate">
                  {selectedSession?.content}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {sessions.map((session) => (
                    <Listbox.Option
                      key={session.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-8 pr-4"
                        )
                      }
                      value={session}
                    >
                      {({ selectedSession, active }) => (
                        <>
                          <span
                            className={classNames(
                              selectedSession ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {session?.content}
                          </span>

                          {selectedSession ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 left-0 flex items-center pl-1.5"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Sessions;

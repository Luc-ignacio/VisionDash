"use client";

import { Search } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import recipientsList from "./recipients-list-data";
import { SetStateAction, useState } from "react";
import { HiH3 } from "react-icons/hi2";

export const RecipientsList = () => {
  const [allRecipients, setAllRecipients] = useState(recipientsList);
  const [searchParam, setSearchParam] = useState("");

  function handleInputChange(e: { target: { value: SetStateAction<string> } }) {
    return setSearchParam(e.target.value);
  }

  const recipientsFiltered = allRecipients.filter((recipient) =>
    recipient.name.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between px-4 pb-4 border-b border-gray-300/50">
        <div className="flex items-center text-sm mb-4 lg:mb-0">
          <div className="px-4 py-2 rounded-l border border-gray-300">All</div>
          <div className="px-4 py-2 border-t border-b border-gray-300">
            My Accounts
          </div>
          <div className="px-4 py-2 rounded-r border border-gray-300">
            Recent
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-white border border-gray-300 rounded flex items-center px-2 py-2 text-sm gap-2 lg:mb-0">
            <Search size={18} className="text-gray-900" />

            <input
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
              className="bg-transparent w-40 placeholder:text-gray-900 focus:outline-none"
            />
          </div>

          <button className="text-sm bg-gray-300/50 transition-colors hover:text-pumpkin px-3 py-2 rounded cursor-pointer">
            Add New
          </button>
        </div>
      </div>

      <div className="px-4 mb-4">
        {recipientsFiltered.length > 0 ? (
          recipientsFiltered.map((recipient) => {
            return (
              <div key={recipient.id}>
                <div className="flex p-4 items-center justify-between hover:bg-gray-300 rounded cursor-pointer border-b border-gray-300/50">
                  <div className="flex gap-4 items-center relative">
                    <Image
                      src={recipient.avatar}
                      alt={recipient.name}
                      width={65}
                      height={65}
                      className="rounded-full"
                    />
                    <Image
                      src={recipient.flag}
                      alt={recipient.currency}
                      width={30}
                      height={30}
                      className="absolute rounded-full outline-2 outline-white bottom-[-8] left-13"
                    />

                    <div className="ml-4">
                      <p className="text-sm lg:text-base">{recipient.name}</p>
                      <p className="text-xs lg:text-sm text-gray-900">
                        {recipient.currency} account ending in{" "}
                        {recipient.account}
                      </p>
                    </div>
                  </div>

                  <ChevronRight size={24} className="mr-[-8]" />
                </div>
              </div>
            );
          })
        ) : (
          <h3 className="py-4">Sorry, no results. 🙁</h3>
        )}
      </div>
    </div>
  );
};

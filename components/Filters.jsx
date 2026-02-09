"use client";
import { useState, useRef, useEffect } from "react";

function Dropdown({ id, label, options, openId, setOpenId }) {
  const ref = useRef(null);
  const isOpen = openId === id;

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenId(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenId]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpenId(isOpen ? null : id)}
        className="border rounded-full px-4 py-2 text-sm hover:bg-gray-100"
      >
        {label} ⌄
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-2 bg-white border rounded-xl shadow-lg w-48">
          {options.map((opt) => (
            <div
              key={opt}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => setOpenId(null)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Filters({ view, setView }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto">
      <Dropdown
        id="price"
        label="Price"
        options={["$0 - $500k", "$500k - $1M", "$1M+"]}
        openId={openId}
        setOpenId={setOpenId}
      />

      <Dropdown
        id="type"
        label="Property type"
        options={["House", "Condo", "Townhome", "Land"]}
        openId={openId}
        setOpenId={setOpenId}
      />

      <Dropdown
        id="rooms"
        label="Rooms"
        options={["1+", "2+", "3+", "4+"]}
        openId={openId}
        setOpenId={setOpenId}
      />

      <Dropdown
        id="more"
        label="More"
        options={["New construction", "Open house", "No HOA"]}
        openId={openId}
        setOpenId={setOpenId}
      />

      <button className="border rounded-full px-4 py-2 text-sm">
        Save search
      </button>

      {/* List / Map Toggle */}
      <div className="ml-auto flex border rounded-full overflow-hidden">
        <button
          onClick={() => setView("list")}
          className={`px-4 py-2 text-sm ${view === "list" ? "bg-gray-200 font-medium" : ""
            }`}
        >
          List
        </button>
        <button
          onClick={() => setView("map")}
          className={`px-4 py-2 text-sm ${view === "map" ? "bg-gray-200 font-medium" : ""
            }`}
        >
          Map
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";

const Filter = ({ filter, width, onFilterConfirm, onResetConfirm }) => {
  const [categories, setCategories] = useState(filter.categories);
  const [fromDate, setFromDate] = useState(filter.fromDate);
  const [toDate, setToDate] = useState(filter.toDate);
  const [people, setPeople] = useState(filter.people);
  const [state, setState] = useState(filter.state);
  const [country, setCountry] = useState(filter.country);

  const handleCategoryChange = (category) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const confirmFilter = () => {
    onFilterConfirm({
      categories,
      fromDate,
      toDate,
      people,
      state,
      country,
    });
  };

  const confirmReset = () => {
    onResetConfirm();
  };

  return (
    <div
      className="absolute top-full right-0 mt-2 bg-white shadow-lg p-4 z-50"
      style={{ width: width }}
    >
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        {["People", "Landscapes", "Buildings", "Nature", "Other"].map(
          (category) => (
            <label key={category} className="block mb-2">
              <input
                type="checkbox"
                value={category}
                checked={categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              {category}
            </label>
          )
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-lg font-semibold">From Date:</span>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-lg font-semibold">To Date:</span>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-lg font-semibold">Number of People:</span>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="Number of People"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-lg font-semibold">State:</span>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-lg font-semibold">Country:</span>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="flex gap-2">
        <button
          className="w-full border-2 border-slate-800 my-2 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300 text-lg"
          onClick={confirmFilter}
        >
          Apply Filters
        </button>
        <button
          className="w-full border-2 border-slate-800 my-2 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300 text-lg"
          onClick={confirmReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;

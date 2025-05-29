import { useState } from "react";

const Filter = ({ filter, width, onFilterConfirm, onResetConfirm }) => {
  // State for managing filter inputs
  const [categories, setCategories] = useState(filter.categories);
  const [fromDate, setFromDate] = useState(filter.fromDate);
  const [toDate, setToDate] = useState(filter.toDate);
  const [people, setPeople] = useState(filter.people);
  const [state, setState] = useState(filter.state);
  const [country, setCountry] = useState(filter.country);

  // Handle changes to the categories filter (toggle categories)
  const handleCategoryChange = (category) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Confirm and apply the selected filters
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

  // Reset filters to default values
  const confirmReset = () => {
    onResetConfirm();
  };

  return (
    <div
      className="absolute top-full right-0 mt-2 bg-white shadow-lg p-4 z-50"
      style={{ width: width }} // Dynamically set the width of the filter panel
    >
      <h2 className="text-2xl font-bold mb-4">Filters</h2>

      {/* Category selection section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        {["People", "Landscapes", "Buildings", "Nature", "Other"].map(
          (category) => (
            <label key={category} className="block mb-2">
              <input
                type="checkbox"
                value={category}
                checked={categories.includes(category)}
                onChange={() => handleCategoryChange(category)} // Handle checkbox change
                className="mr-2"
              />
              {category}
            </label>
          )
        )}
      </div>

      {/* Date range filters */}
      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-lg font-semibold">From Date:</span>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)} // Set the "from" date
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
            onChange={(e) => setToDate(e.target.value)} // Set the "to" date
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Number of people filter */}
      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-lg font-semibold">Number of People:</span>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)} // Set the number of people
            placeholder="Number of People"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* State filter */}
      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-lg font-semibold">State/Japan City:</span>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)} // Set the state
            placeholder="State"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Country filter */}
      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-lg font-semibold">Country:</span>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)} // Set the country
            placeholder="Country"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Buttons for applying or resetting filters */}
      <div className="flex gap-2">
        <button
          className="w-full border-2 border-slate-800 my-2 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300 text-lg"
          onClick={confirmFilter} // Apply the selected filters
        >
          Apply Filters
        </button>
        <button
          className="w-full border-2 border-slate-800 my-2 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300 text-lg"
          onClick={confirmReset} // Reset the filters
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;

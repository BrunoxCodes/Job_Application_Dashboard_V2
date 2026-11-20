import type { FilterProps, SearchFilter } from "../../../types/db_types";

const SelectComponent = ({ setSearchFilter }: FilterProps) => {
  return (
    <select
      className="w-[30%] py-2 px-6 bg-(--surface) border border-(--border) focus-visible:outline-none focus-visible:ring-2 
      focus-visible:ring-blue-500 focus-visible:border-blue-500 rounded-md divide-x divide-slate"
      onChange={(e) => setSearchFilter(e.target.value as SearchFilter)}
    >
      <option value="all">All</option>
      <option value="applied">Applied</option>
      <option value="interview">Interview</option>
      <option value="offer">Offer</option>
      <option value="rejected">Rejected</option>
    </select>
  );
};

export default SelectComponent;

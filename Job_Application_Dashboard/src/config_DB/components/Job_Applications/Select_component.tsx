import type { SelectProps, SearchFilter } from "../../../types/db_types";

const SelectComponent = ({ statusFilter, setStatusFilter }: SelectProps) => {
  return (
    <select
      className="w-[30%] py-2 px-6 bg-(--surface) border border-(--border) focus-visible:outline-none focus-visible:ring-2 
      focus-visible:ring-blue-500 focus-visible:border-blue-500 rounded-md divide-x divide-slate"
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value as SearchFilter)}
    >
      <option value="All">All</option>
      <option value="Applied">Applied</option>
      <option value="Interview">Interview</option>
      <option value="Offer">Offer</option>
      <option value="Rejected">Rejected</option>
    </select>
  );
};

export default SelectComponent;

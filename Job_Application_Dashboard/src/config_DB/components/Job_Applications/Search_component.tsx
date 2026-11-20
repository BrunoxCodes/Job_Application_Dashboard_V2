import { Search } from "lucide-react";
import type { SearchProps } from "../../../types/db_types";

const SearchComponent = ({ search, setSearch }: SearchProps) => {
  return (
    <div className="w-[70%] flex items-center border border-(--border) bg-(--surface) rounded-md relative">
      <Search size={16} color="gray" className="absolute top-2.5 left-2" />
      <input
        type="text"
        placeholder="Search a company or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-8 pr-2 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-blue-500 focus-visible:border-blue-500"
      />
    </div>
  );
};

export default SearchComponent;

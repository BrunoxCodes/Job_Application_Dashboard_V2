import { Search } from "lucide-react";
import type { SearchProps } from "../../../types/db_types";

const SearchComponent = ({ search, setSearch }: SearchProps) => {
  return (
    <div className="w-[2/3]">
      <Search size={16} color="gray" />
      <input
        type="text"
        placeholder="Search a company or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-24 text-sm"
      />
    </div>
  );
};

export default SearchComponent;

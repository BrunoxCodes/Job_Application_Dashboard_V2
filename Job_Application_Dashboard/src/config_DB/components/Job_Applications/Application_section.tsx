import { useState, useEffect } from "react";

import Search_component from "./Search_component";
import Results_component from "./Results_component";

import data from "../../records";
import type { dataRecords } from "../../../types/db_types";
import { searchApplications } from "../../mock-db";
import SelectComponent from "./Select_component";

const ApplicationsSection = () => {
  const [search, setSearch] = useState("");

  const [filteredApplications, setFilteredApplications] =
    useState<dataRecords[]>(data);

  useEffect(() => {
    const filtered = searchApplications(search);

    setFilteredApplications(filtered);
  }, [search]);

  return (
    <div className="w-[65%] h-fit px-4 py-3 flex flex-col justify-between gap-4">
      <h2 className="w-full text-xl text-center border-b-2 border-(--border) text-(--text) font-semibold py-3 mb-1">
        Job Applications
      </h2>
      <div className="w-full flex justify-center gap-6">
        <Search_component search={search} setSearch={setSearch} />
        <SelectComponent setSearchFilter={setSearch} />
      </div>
      <div>
        <Results_component applications={filteredApplications} />
      </div>
    </div>
  );
};

export default ApplicationsSection;

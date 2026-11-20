import { useState, useEffect } from "react";

import Search_component from "./Search_component";
import Results_component from "./Results_component";

import data from "../../records";
import type { dataRecords } from "../../../types/db_types";
import { searchApplications } from "../../mock-db";

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
      <Search_component search={search} setSearch={setSearch} />

      <Results_component applications={filteredApplications} />
    </div>
  );
};

export default ApplicationsSection;

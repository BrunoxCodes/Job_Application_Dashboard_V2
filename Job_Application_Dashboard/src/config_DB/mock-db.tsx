import { useState } from "react";
import admins from "./admin.ts";
import data from "./records.ts";
import type {
  dataRecords,
  LoginCredentials,
  SearchKey,
  Status,
} from "../types/db_types.js";

export const filterApplications = (filter: Status) => {
  const [filtered, setFiltered] = useState<dataRecords[]>([]);

  const filteredData = data.filter((item) => item.status === filter);

  setFiltered(filteredData);

  return filtered;
};
export const searchApplications = (search: SearchKey) => {
  const results = data.filter(
    (item) =>
      item.company_name.toLowerCase().includes(search.toLowerCase()) ||
      item.role.toLowerCase().includes(search.toLowerCase()),
  );

  return results;
};
export const checkCredentials = ({ email, password }: LoginCredentials) => {
  const user = admins.find(
    (item) => item.email === email && item.password === password,
  );

  if (!user) return;

  return user;
};

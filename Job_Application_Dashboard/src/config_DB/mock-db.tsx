import { useState } from "react";
import admins from "./admin.ts";
import data from "./records.ts";
import type {
  dataRecords,
  LoginCredentials,
  Status,
} from "../types/db_types.js";

export const fetchData = (filter: Status) => {
  const [filtered, setFiltered] = useState<dataRecords[]>([]);

  const filteredData = data.filter((item) => item.status === filter);

  setFiltered(filteredData);

  return filtered;
};
export const checkCredentials = ({ email, password }: LoginCredentials) => {
  const user = admins.find(
    (item) => item.email === email && item.password === password,
  );

  if (!user) return;

  return user;
};



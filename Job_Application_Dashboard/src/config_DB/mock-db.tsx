import admins from "./admin.ts";
import data from "./records.ts";
import type {
  SearchFilter,
  LoginCredentials,
  SearchKey,
} from "../types/db_types.js";

export const filterApplications = (filter: SearchFilter) => {
  if (filter === "All") return data;

  return data.filter(
    (item) => item.status.toLowerCase() === filter.toLowerCase(),
  );
};
export const searchApplications = (statusFilter: string, search: SearchKey) => {
  const results = data.filter((item) => {
    const searchValue = search.trim().toLowerCase();

    const matchesSearch =
      item.company_name.toLowerCase().includes(searchValue) ||
      item.role.toLowerCase().includes(searchValue);

    const matchesFilter =
      statusFilter === "All" ||
      item.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  return results;
};
export const checkCredentials = ({ email, password }: LoginCredentials) => {
  const user = admins.find(
    (item) => item.email === email && item.password === password,
  );

  if (!user) return;

  return user;
};

export const sortFavoriteRoles = () => {
  const favoritesRoles = data
    .filter((item) => item.favorite)
    .sort((a, b) => b.likes - a.likes);

  return favoritesRoles;
};

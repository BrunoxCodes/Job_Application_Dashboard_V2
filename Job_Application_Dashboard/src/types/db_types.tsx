import type { Dispatch, SetStateAction } from "react";

export type Theme = "light" | "dark";

export type User = {
  name: string;
  avatar: string;
  email: string;
  password: string;
  id: string;
};

export type LoginCredentials = Pick<User, "email" | "password">;
export type Status = "Applied" | "Interview" | "Offer" | "Rejected";
export type dataRecords = {
  company_name: string;
  role: string;
  status: Status;
  applied_Date: number;
  favorite: boolean;
  likes: number;
  id: string;
};

export type SearchKey = string;

// export type SearchProps = {
//   search: string;
//   setSearch: (value: string) => void;
// };

export type ResultsProps = {
  applications: dataRecords[];
};

export type SearchFilter = Status | "All";

export type SelectProps = {
  statusFilter: string;
  setStatusFilter: Dispatch<SetStateAction<string>>;
};

export type SearchProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

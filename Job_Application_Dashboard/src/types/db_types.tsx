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
  id: string;
};

export type SearchKey = string;

export type SearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

export type ResultsProps = {
  applications: dataRecords[];
};

import type { ResultsProps } from "../../../types/db_types";
import { Link } from "react-router-dom";

const ResultsComponent = ({ applications }: ResultsProps) => {
  return (
    <div className="w-full h-fit divide-y divide-(--text-muted)">
      {applications.length > 0 ? (
        applications
          .map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_1.5fr_1fr_auto_auto] items-center gap-4 py-2 px-3"
            >
              <h3 className=" text-base text-(--text) font-medium">
                {item.company_name}
              </h3>
              <p className=" text-md text-(--text-muted) font-medium">
                {item.role}
              </p>
              <p
                className={`${item.status === "Interview" ? "bg-blue-400 text-(--text)" : item.status === "Applied" ? "bg-orange-400 text-(--text)" : item.status === "Offer" ? "bg-(--success) text-(--text)" : "bg-(--danger) text-(--text)"} rounded-2xl p- 0.5 text-center`}
              >
                {item.status}
              </p>
              <div className="flex gap-2 items-center">
                <Link
                  to="#"
                  className="w-fit py-1 px-2 hover:font-semibold rounded-md text-md text-blue-600"
                >
                  Edit
                </Link>
                <Link
                  to="#"
                  className="w-fit py-1 px-2 hover:font-semibold rounded-md text-md text-(--danger)"
                >
                  End
                </Link>
              </div>
            </div>
          ))
          .slice(0, 10)
      ) : (
        <p className="w-full h-100 flex items-center justify-center text-xl text-gray-400 font-semibold">
          No open applications.
        </p>

const ResultsComponent = ({ applications }: ResultsProps) => {
  return (
    <div>
      {applications.length > 0 ? (
        applications.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center gap-4 py-2 px-3"
          >
            <h3>{item.company_name}</h3>
            <p>{item.role}</p>
            <p className={``}>{item.status}</p>
          </div>
        ))
      ) : (
        <p className="text-xl text-mute">No open applications.</p>
      )}
    </div>
  );
};

export default ResultsComponent;

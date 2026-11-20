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
              className="flex justify-between items-center gap-4 py-2 px-3"
            >
              <h3>{item.company_name}</h3>
              <p>{item.role}</p>
              <p className={``}>{item.status}</p>
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
        <p className="text-xl text-mute">No open applications.</p>
      )}
    </div>
  );
};

export default ResultsComponent;

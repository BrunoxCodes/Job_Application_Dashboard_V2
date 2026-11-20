import type { ResultsProps } from "../../../types/db_types";

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

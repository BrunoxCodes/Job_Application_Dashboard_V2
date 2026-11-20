import { useEffect, useState } from "react";
import type { dataRecords } from "../../../types/db_types";
import { sortFavoriteRoles } from "../../mock-db";
import { Star, StarCheck } from "lucide-react";

const FavoritesRoles = () => {
  const [favoriteRoles, setFavoriteRoles] = useState<dataRecords[]>([]);
  useEffect(() => {
    const sorted_favoritesRoles = sortFavoriteRoles();
    setFavoriteRoles(sorted_favoritesRoles);
  }, []);
  return (
    <div className="w-[35%] flex flex-col gap-4 p-3">
      <h2 className="w-full text-xl text-center border-b-2 border-(--border) text-(--text) font-semibold py-3 mb-1">
        Favorite Roles
      </h2>
      <div className="w-full h-fit divide-y divide-(--text-muted)">
        {favoriteRoles.length > 0 ? (
          favoriteRoles
            .map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center gap-2 py-2 "
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-base text-(--text) font-medium">
                    {item.role}
                  </h3>
                  <p className="text-sm text-(--text-muted) font-medium">
                    {item.company_name}
                  </p>
                </div>

                <p className="font-bold text-lg text-(--text-muted) flex items-center gap-1">
                  <StarCheck size={16} className="text-(--text-muted)" />
                  {item.likes}
                </p>
              </div>
            ))
            .slice(0, 10)
        ) : (
          <p className="text-xl text-mute">No Favorite Roles.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesRoles;

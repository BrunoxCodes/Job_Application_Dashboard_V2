import ApplicationsSection from "./Application_section";
import FavoritesRoles from "./Favorites_roles_section";

const FullApplicationsPart = () => {
  return (
    <div className="w-full h-fit px-2 flex gap-2">
      <ApplicationsSection />
      <FavoritesRoles />
    </div>
  );
};

export default FullApplicationsPart;

import NumbersCards from "./sub-components/numbersCards";
import useCompanies from "../hooks/useCompanies";

export default function ShowTotals() {
  const { company, isLoading, error } = useCompanies();
  const countCompanies = company.length
  const countApplied = company.filter(i=>i.status==="Applied").length
  const countOffers  = company.filter(i=>i.status==="Offer").length
  const countInterview = company.filter(i=>i.status==="Interview").length
  const countRejected = company.filter(i=>i.status==="Rejected").length
  return (
    <div className="w-full max-w-full min-w-0 grid grid-cols-5 place-items-center gap-5 p-4 lg:p-10 max-[1085px]:grid-cols-3! max-[800px]:grid-cols-2! max-[530px]:grid-cols-1!">
      <NumbersCards
        title="Total Companies"
        value={isLoading ? 0 : countCompanies}
        className="border-2 border-(--text-muted) w-full min-w-0 max-w-60 px-4 py-6 rounded-lg text-center shadow-lg shadow-black/20"
      />
      <NumbersCards
        title="Applied"
        value={isLoading ? 0 : countApplied}
        className="border-2 border-(--text-muted) w-full min-w-0 max-w-60 px-4 py-6 rounded-lg text-center shadow-lg shadow-black/20"
      />
      <NumbersCards
        title="Offers"
        value={isLoading ? 0 : countOffers}
        className="border-2 border-(--text-muted) w-full min-w-0 max-w-60 px-4 py-6 rounded-lg text-center shadow-lg shadow-black/20"
      />
      <NumbersCards
        title="Interview"
        value={isLoading ? 0 : countInterview}
        className="border-2 border-(--text-muted) w-full min-w-0 max-w-60 px-4 py-6 rounded-lg text-center shadow-lg shadow-black/20"
      />
      <NumbersCards
        title="Rejected"
        value={isLoading ? 0 : countRejected}
        className="border-2 border-(--text-muted) w-full min-w-0 max-w-60 px-4 py-6 rounded-lg text-center shadow-lg shadow-black/20"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

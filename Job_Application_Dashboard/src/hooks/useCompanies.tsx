import { useEffect, useState } from "react"

interface records{
    name: string,
    role: string,
    status: string,
    favorite: boolean
}

export default function () {
    const[company,setCompany] = useState<records[]>([])
    const[isLoading, setLoading] = useState(false)
    const[error, setError] = useState<string | null>(null)

    useEffect(()=>{
        const handleFetch = async() => {
            setLoading(true);
            setError(null);
            try{
            const res = await fetch('https://6afb3738730c1d152f334faf.mockapi.io/api/job_application_api/Records');
            const data = await res.json()

            console.log("Found");
            setCompany(data);
            }catch{
                setError("Something Went Wrong");
            }finally{
                setLoading(false)
            }
        }
        handleFetch()
    },[])
  return {company, isLoading, error}
};
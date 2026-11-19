import { useEffect, useState } from "react";

interface user {
    id: number,
    name: string,
    email: string
}


export default function useAdmins() {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState<user[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const handleFetch = async() => {
            setIsLoading(true);
            setError(null);

            try{
                const res = await fetch("https://6afb3738730c1d152f334faf.mockapi.io/api/job_application_api/Admins");
                
                const data = await res.json();
                
                console.log(data);
                setUsers(data);
            }catch{
                setError("Something Went Wrong")
            }finally{
                setIsLoading(false);
            }
            
        }
        
        handleFetch();
    },[])
    
    return {users, isLoading, error}
};
import { createContext , useContext , useEffect , useState } from "react";
import { getCurrentUser } from "../lib/appwrite";



const GlobalContext = createContext()



export const GlobalProvider = ({children}) => {

    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)


    useEffect(() => {

        const getCurrentUserFun = async () => {
            try {
                const res = await getCurrentUser()
                setisLoggedIn(true)
                setUser(res)
            } catch (error) {
                setisLoggedIn(false)
                setUser(null)
                console.log(error)
            }finally{
                setLoading(false)
            }
        }

        getCurrentUserFun()

    } , [])



    return(
        <GlobalContext.Provider value={{user , setUser , isLoggedIn , setisLoggedIn , loading}}>
            {children}
        </GlobalContext.Provider>
    ) 

}



export const useGlobalContext = () => {
    return useContext(GlobalContext)
}



export default GlobalProvider
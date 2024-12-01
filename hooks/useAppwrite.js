import { useEffect, useState } from "react"


// create a csutom hook wrap a specific logic within one place so we can use it mutli times
const useAppwrite = (fn) => {

    const [isLoading, setisLoading] = useState(false)
    const [data, setData] = useState(false)

    const fetchData = async () => {
        setisLoading(true)
        try {
            const res = await fn()
            setData(res)
        } catch (error) {
            console.log(error)
        }finally{
            setisLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    } , [])


    const refetch = () => {
        fetchData
    }

    return {data , refetch , isLoading}

}



export default useAppwrite
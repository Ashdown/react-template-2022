import {useQuery} from "react-query";

export const QUERY_KEY = ['things']

const useThingsQuery = () =>
    useQuery(QUERY_KEY, async () => {
        console.log('query')
        const data = await fetch(`http://localhost:3000/things`).then(response => response.json())
        console.log('useThingsQuery', data)
        return data
    })

export default useThingsQuery

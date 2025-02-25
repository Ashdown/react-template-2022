import {useQuery} from "react-query";

const useThingsQuery = () =>
    useQuery(['things'], async () => {
        const data = await fetch(`http://localhost:3000/things`).then(response => response.json())
        return data
    })

export default useThingsQuery

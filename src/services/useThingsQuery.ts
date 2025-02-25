import {useQuery} from "react-query";
import axios from "axios";

const useThingsQuery = () =>
  useQuery(['things'], async () => {
      const { data } = await axios.get('http://localhost:3000/things')
      return data
    })

export default useThingsQuery

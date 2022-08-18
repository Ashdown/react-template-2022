import {useQuery} from "react-query";
// import axios from "axios";
import mockThings from './mockThings.json'


const useThingsQuery = () =>
  useQuery(['thing'], async () => {
      // const { data } = await axios.get('http://somwhere.com/things')
      const data = mockThings
      return data
    })

export default useThingsQuery

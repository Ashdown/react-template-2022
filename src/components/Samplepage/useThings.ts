import useThingsQuery from "../../services/useThingsQuery";

type Thing = {
  id: number;
  title: string;
}

type Response = {
  data: Thing[],
  isLoading: boolean;
  isError: boolean;
}

const getCleanData = (uncleanThings:any[]):Thing[] =>
  uncleanThings.map( (uncleanThing, index) => ({
    id: uncleanThing?.id || index,
    title: uncleanThing?.title || ''
  }))

const useThings = ():Response => {

  const { data, isLoading, isError } = useThingsQuery()

  console.log(data)

  return ({
    data: getCleanData(data || []),
    isLoading: isLoading,
    isError: isError,
  })
}

export default useThings

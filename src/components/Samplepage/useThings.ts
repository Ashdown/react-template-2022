import useThingsQuery from "../../services/useThingsQuery";

type Thing = {
  id: number;
  name: string;
}

type Response = {
  data: Thing[],
  isLoading: boolean;
  isError: boolean;
}

const getCleanData = (uncleanThings:any[]):Thing[] =>
  uncleanThings.map( (uncleanThing, index) => ({
    id: uncleanThing?.id || index,
    name: uncleanThing?.content?.name || ''
  }))

const useThings = ():Response => {

  const { data, isLoading, isError } = useThingsQuery()

  return ({
    data: getCleanData(data?.things || []),
    isLoading: isLoading,
    isError: isError,
  })
}

export default useThings

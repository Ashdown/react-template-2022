import {useMutation, useQueryClient} from "react-query";
import {QUERY_KEY} from "./useThingsQuery";

const useAddThingMutation = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: any) =>
            fetch("http://localhost:3000/things", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then((response) => response.json()),
        onSuccess: () => {

            queryClient.invalidateQueries({queryKey: QUERY_KEY})
        }

    })
}

export default useAddThingMutation;
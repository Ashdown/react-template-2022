import React from "react";
import {QueryClientProvider} from "react-query";
import queryClient from "../queryClient/client";

type Props = {
    children: React.ReactNode;
}

const MockApp = ({children}: Props) =>
    <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>

export default MockApp
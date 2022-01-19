import { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = (props) => {
    const [loadingData, setLoadingData] = useState(true);

    return (
        <LoadingContext.Provider value={[loadingData, setLoadingData]}>
            {props.children}
        </LoadingContext.Provider>
    )
}
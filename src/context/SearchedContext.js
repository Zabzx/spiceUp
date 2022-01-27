import { createContext, useState } from "react";

export const SearchedContext = createContext()

export const SearchProvider = (props) => {
    const [searched, setSearched] = useState(false)

    return (
        <SearchedContext.Provider value={[searched, setSearched]}>
            {props.children}
        </SearchedContext.Provider>
    )
}
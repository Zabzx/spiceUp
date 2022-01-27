import { createContext, useState } from "react";

export const SearchValueContext = createContext()

export const SearchValueProvider = (props) => {
    const [searchValue, setSearchValue] = useState('')

    return  (
        <SearchValueContext.Provider value={[searchValue, setSearchValue]}>
            {props.children}
        </SearchValueContext.Provider>
    )
}
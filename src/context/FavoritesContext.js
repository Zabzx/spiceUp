import { createContext, useState } from "react";

export const FavoriteDishContext = createContext()

export const FavoriteDishProvider = (props) => {
    const [favoriteDishes, setFavoriteDishes] = useState([{}]);

    return (
        <FavoriteDishContext.Provider value={[favoriteDishes, setFavoriteDishes]}>
            {props.children}
        </FavoriteDishContext.Provider>
    )
}
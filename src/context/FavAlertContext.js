import { createContext, useState } from "react";

export const FavAlertContext = createContext()

export const FavAlertProvider = (props) => {
    const [favAlert, setFavAlert] = useState({
        scale: 'scale-100',
        status: false
    })

    return (
        <FavAlertContext.Provider value={[favAlert, setFavAlert]}>
            {props.children}
        </FavAlertContext.Provider>
    )
}
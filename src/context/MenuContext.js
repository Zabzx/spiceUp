import { createContext } from "react";
import { useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
    const [menu, setMenu] = useState({
        context: '-translate-x-full',
        toggle: true
    });

    return (
        <MenuContext.Provider value={[menu, setMenu]}>
            {props.children}
        </MenuContext.Provider>
    )
}
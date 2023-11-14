import { createContext } from "react";

type AppContextType = {
    open: boolean,
    setOpen: (open: boolean) => void
}

export const AppContext = createContext<AppContextType>({} as AppContextType)
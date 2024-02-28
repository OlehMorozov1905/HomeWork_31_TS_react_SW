import React from "react";

export interface StarWarsContextValue {
    page: string;
    setPage: (page: string) => void;
}

export const StarWarsContext = React.createContext<StarWarsContextValue>({
    page: 'home',
    setPage: () => {}
});
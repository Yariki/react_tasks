import React   from "react";

import { Navigation } from './Navigation';
import { Search } from "./Search";

export const  Header : React.FunctionComponent = () => {
    return (
        <header className="top-header">
            <Navigation></Navigation>
            <Search />
        </header>
    );
}
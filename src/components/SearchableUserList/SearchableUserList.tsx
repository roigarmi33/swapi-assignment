import { atom } from "jotai";
import { SearchBar } from "../SearchBar/SearchBar";
import { ResultsList } from "../ResultsList/ResultsList";

export const SearchableUserList = (): JSX.Element => {
    return (
        <>
            <SearchBar />
            <ResultsList />
        </>
    )
}
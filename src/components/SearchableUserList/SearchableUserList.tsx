import { ResultsList } from "../ResultsList/ResultsList";
import { SearchBar } from "../SearchBar/SearchBar";

export const SearchableUserList = (): JSX.Element => {
    return (
        <>
            <SearchBar />
            <ResultsList />
        </>
    )
}
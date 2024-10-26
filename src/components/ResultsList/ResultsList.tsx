import { Button } from "@mui/material";
import { useAtom } from "jotai";
import { Character } from "../../modules/Character";
import { searchResultsAtom } from "../../services/appState/SearchResultsAtom";
import { PageSearchResults } from "../../services/usersService";
import { CharacterListItem } from "../CharacterListItem/CharacterListItem";

export const ResultsList = (): JSX.Element => {
    const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
    if (!searchResults) {
        return <></>
    }
    const { results, nextPageCallback } = searchResults;
    const handleMoreResults = async () => {
        if (!nextPageCallback) {
            return;
        }
        const nextPageResults: PageSearchResults<Character> = await nextPageCallback();
        setSearchResults((prev) => {
            const previousResults = prev?.results ?? []
            return ({
                results: [...previousResults, ...nextPageResults.results],
                nextPageCallback: nextPageResults.nextPageCallback
            })
        })
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "85vh",
            width: "100%"
        }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                width: "80%",
                maxHeight: "100%",
                overflowY: "auto",
            }}>
                {results.map((character) => (
                    <CharacterListItem character={character} key={character.name} />
                ))}
            </div>
            {nextPageCallback &&
                <Button onClick={handleMoreResults}>
                    Load more results
                </Button>
            }
        </div>)
}
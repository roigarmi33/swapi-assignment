import { Avatar, Checkbox, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { favouriteCharactersAtom, searchResultsAtom } from "../../services/appState/SearchResultsAtom";
import { CharacterListItem } from "../CharacterListItem/CharacterListItem";
import { Character } from "../../modules/Character";
import { PageSearchResults } from "../../services/usersService";

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

    return (<List>
        {results.map((character) => (
            <CharacterListItem character={character} key={character.name} />
        ))}
        {nextPageCallback &&
            <ListItem >
                <ListItemButton onClick={handleMoreResults}>
                    <ListItemText>
                        Load more results
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        }
    </List>)
}
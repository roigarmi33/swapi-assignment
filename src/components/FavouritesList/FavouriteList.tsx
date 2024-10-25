import { useAtom } from "jotai"
import { favouriteCharactersAtom } from "../../services/appState/SearchResultsAtom"
import { IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { DeleteForeverOutlined } from "@mui/icons-material"

export const FavouriteList = (): JSX.Element => {
    const [favouriteCharacters, setFavouriteCharacters] = useAtom(favouriteCharactersAtom)

    return favouriteCharacters.size > 0 ? (
        <List>
            {Array.from(favouriteCharacters).map((character) => {
                return (
                    <ListItem key={character.name}>
                        <ListItemText>
                            {character.name}
                        </ListItemText>
                        <ListItemButton onClick={() => {
                            const updatedSet = new Set(favouriteCharacters.values())
                            updatedSet.delete(character)
                            setFavouriteCharacters(updatedSet)
                        }}>
                            <IconButton>
                                <DeleteForeverOutlined />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
        : <></>
}
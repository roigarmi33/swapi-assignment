import { DeleteForeverOutlined } from "@mui/icons-material"
import { Box, Button, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Modal, Typography } from "@mui/material"
import { useAtomValue } from "jotai"
import { Character } from "../../modules/Character"
import { favouriteCharactersAtom } from "../../services/appState/SearchResultsAtom"
import { useFavouritesCharactersActions } from "../hooks/favourites"
import { HexColorPicker } from "react-colorful"
import { useCallback, useState } from "react"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const FavouriteList = (): JSX.Element => {
    const favouriteCharacters = useAtomValue(favouriteCharactersAtom);
    const [color, setColor] = useState<string>("#fff");
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Typography variant="h2">
                Favourite Characters
            </Typography>
            {favouriteCharacters.size > 0 && (
                <div style={{ height: '80vh', overflowY: 'auto', backgroundColor: color }}>
                    <List>
                        {Array.from(favouriteCharacters).map(([name, character]) => (
                            <>
                                <FavouriteListItem character={character} key={name} />
                                <Divider />
                            </>
                        ))}
                    </List>
                </div>)
            }
            {favouriteCharacters.size > 0 && (
                <>
                    <div style={{ borderStyle: "double", borderColor: "#000", borderRadius: "50%", backgroundColor: color, height: "5vh", width: "5vh", padding: "1px", justifySelf: "center" }} onClick={() => { setOpen(true) }}>

                    </div>
                    <Modal open={open} onClose={() => { setOpen(false) }}>
                        <Box sx={style}>
                            <HexColorPicker color={color} onChange={(newColor) => { setColor(newColor) }} />
                        </Box>
                    </Modal>
                </>
            )}

        </>
    )
}

export const PopoverPicker = ({ color, onChange }: { color: string, onChange: (color: string) => void }) => {
    const [isOpen, toggle] = useState(false);
    const close = useCallback(() => toggle(false), []);

    return (
        <div className="picker">
            {isOpen && (
                <div className="popover">
                    <HexColorPicker color={color} onChange={onChange} />
                </div>
            )}
            <div
                className="swatch"
                style={{ backgroundColor: color }}
                onClick={() => toggle((prev) => !prev)}
            />

        </div>
    );
};

interface FavouriteListItemProps {
    character: Character
}

const FavouriteListItem = ({ character }: FavouriteListItemProps): JSX.Element => {
    const { toggleCharacterFromFavourites } = useFavouritesCharactersActions();
    return (
        <ListItem key={character.name}>
            <ListItemText sx={{ width: "100%" }}>
                <Typography variant="h6">
                    {character.name}
                </Typography>
            </ListItemText>
            <ListItemButton onClick={() => toggleCharacterFromFavourites(character)}>
                <IconButton>
                    <DeleteForeverOutlined />
                </IconButton>
            </ListItemButton>
        </ListItem>
    )
}
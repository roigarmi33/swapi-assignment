import { Avatar, Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText, Modal, Typography } from "@mui/material";
import { Character } from "../../modules/Character";
import { useAtom } from "jotai";
import { favouriteCharactersAtom } from "../../services/appState/SearchResultsAtom";
import { useState } from "react";
import { CharacterModal } from "../CharacterModal/CharacterModal";
import { useFavouritesCharactersActions } from "../hooks/favourites";

interface CharacterListItemProps {
    character: Character
}

export const CharacterListItem = ({ character }: CharacterListItemProps) => {
    const { toggleCharacterFromFavourites, isFavouriteCharacter } = useFavouritesCharactersActions()
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const handleClose = () =>
        setModalOpen(false);

    const handleOpen = () =>
        setModalOpen(true);

    const imageUrl = `https://picsum.photos/200/300?random=${character.name}`
    return (
        <ListItem key={character.name} secondaryAction={
            <Checkbox checked={isFavouriteCharacter(character)} onClick={
                () => { toggleCharacterFromFavourites(character) }
            }
            />
        }>
            <ListItemButton onClick={handleOpen}>
                <ListItemAvatar>
                    <Avatar src={imageUrl} />
                </ListItemAvatar>
                <ListItemText>
                    <Typography>
                        {character.name}
                    </Typography>
                </ListItemText>
            </ListItemButton>
            <Modal open={isModalOpen} onClose={handleClose}>
                <CharacterModal character={character} />
            </Modal>
        </ListItem>

    )
}
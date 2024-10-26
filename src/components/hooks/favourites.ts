import { useAtom } from "jotai"
import { favouriteCharactersAtom } from "../../services/appState/SearchResultsAtom"
import { Character } from "../../modules/Character";

export const useFavouritesCharactersActions = () => {
    const [favouriteCharacters, setFavouriteCharacters] = useAtom(favouriteCharactersAtom);
    const isFavouriteCharacter = (character: Character): boolean => favouriteCharacters.has(character);
    const toggleCharacterFromFavourites = (character: Character): void => {
        const isFavourite = isFavouriteCharacter(character);
        isFavourite ? deleteCharacterFromFavourites(character) : addCharacterToFavourites(character)
    }
    const deleteCharacterFromFavourites = (character: Character): void => {
        const updatedSet = new Set(favouriteCharacters.values());
        updatedSet.delete(character)
        setFavouriteCharacters(updatedSet)
    }
    const addCharacterToFavourites = (character: Character): void => {
        const updatedSet = new Set(favouriteCharacters.values());
        updatedSet.add(character)
        setFavouriteCharacters(updatedSet)
    }
    return {
        toggleCharacterFromFavourites,
        isFavouriteCharacter
    }
}
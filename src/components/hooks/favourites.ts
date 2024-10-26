import { useAtom } from "jotai"
import { favouriteCharactersAtom } from "../../services/appState/SearchResultsAtom"
import { Character } from "../../modules/Character";

export const useFavouritesCharactersActions = () => {
    const [favouriteCharacters, setFavouriteCharacters] = useAtom(favouriteCharactersAtom);
    const isFavouriteCharacter = (character: Character): boolean => {
        favouriteCharacters.forEach((value) => {
            if (character.name === value.name) {
                console.log(value)
            }
        })
        return favouriteCharacters.has(character.name)
    };
    const toggleCharacterFromFavourites = (character: Character): void => {
        const isFavourite = isFavouriteCharacter(character);
        isFavourite ? deleteCharacterFromFavourites(character) : addCharacterToFavourites(character)
    }
    const deleteCharacterFromFavourites = (character: Character): void => {
        setFavouriteCharacters((previousMap) => {
            const newMap = new Map(previousMap)
            newMap.delete(character.name);
            return newMap
        })
    }
    const addCharacterToFavourites = (character: Character): void => {
        setFavouriteCharacters((previousMap) => {
            const newMap = new Map(previousMap)
            newMap.set(character.name, character);
            return newMap
        })
    }
    return {
        toggleCharacterFromFavourites,
        isFavouriteCharacter
    }
}
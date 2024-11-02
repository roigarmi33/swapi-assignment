import { useAtom } from "jotai";
import { favouriteCharactersAtom } from "../../services/appState/SearchResultsAtom";
import { Character } from "../../modules/Character";

export const useFavouritesCharactersActions = () => {
  const [favouriteCharacters, setFavouriteCharacters] = useAtom(
    favouriteCharactersAtom
  );
  const isFavouriteCharacter = (character: Character): boolean =>
    favouriteCharacters.has(character.name);
  const toggleCharacterFromFavourites = (character: Character): void => {
    const isFavourite = isFavouriteCharacter(character);
    isFavourite
      ? deleteCharacterFromFavourites(character)
      : addCharacterToFavourites(character);
  };
  const deleteCharacterFromFavourites = (character: Character): void => {
    setFavouriteCharacters((previousMap) => {
      const newMap = new Map(previousMap);
      newMap.delete(character.name);
      localStorage.setItem(
        "favourites",
        JSON.stringify(Array.from(newMap.entries()))
      );
      return newMap;
    });
  };
  const addCharacterToFavourites = (character: Character): void => {
    setFavouriteCharacters((previousMap) => {
      const newMap = new Map(previousMap);
      newMap.set(character.name, character);
      localStorage.setItem(
        "favourites",
        JSON.stringify(Array.from(newMap.entries()))
      );
      return newMap;
    });
  };
  return {
    toggleCharacterFromFavourites: toggleCharacterFromFavourites,
    isFavouriteCharacter,
  };
};

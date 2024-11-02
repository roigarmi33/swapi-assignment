import { atom } from "jotai";
import { Character } from "../../modules/Character";
import { PageSearchResults } from "../usersService";

const getInitialFavourites = () => {
  const favouritesFromLocalStorage = localStorage.getItem("favourites");
  if (!favouritesFromLocalStorage) {
    return null;
  }
  const favouritesEntries: Array<[string, Character]> = JSON.parse(
    favouritesFromLocalStorage
  );
  const favouritesMap: Map<string, Character> = new Map<string, Character>(
    favouritesEntries
  );
  return favouritesMap;
};

export const searchResultsAtom = atom<PageSearchResults<Character>>();
export const favouriteCharactersAtom = atom(
  new Map<string, Character>(getInitialFavourites())
);

import { atom } from "jotai";
import { Character } from "../../modules/Character";
import { PageSearchResults } from "../usersService";

export const searchResultsAtom = atom<PageSearchResults<Character>>()
export const favouriteCharactersAtom = atom(new Map<string, Character>())

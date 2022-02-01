import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilValue, selector, useSetRecoilState } from "recoil";

// ATOM DE QUERY
export const queryState = atom({
    key: "queryState",
    default: null,
});

// ATOM DE ITEM
export const itemIdState = atom({
    key: "itemState",
    default: null,
});

// SELECTOR DE QUERY
const resultsState = selector({
    key: "searchResults",
    get: async ({ get }) => {
        
        const valorDeQuery = get(queryState);
        if (valorDeQuery) {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery);
            const data = await response.json();
            console.log("Estos son los data reslts: ", data.results);
            return data.results;

        } else {
            return [];
        }
    },
});

// SELECTOR DE ITEM
const IdState = selector({
    key: "itemIdState",
    get: async ({ get }) => {
        
        const valorDeId = get(itemIdState);
        console.log("ESte es el valor de id: ", valorDeId);
        if (valorDeId) {
            const response = await fetch("https://api.mercadolibre.com/items/" + valorDeId);
            const item = await response.json();
            console.log("Esta es la data de item: ", item);
            return item;

        } else {
            return [];
        }
    },
});

// MI CUSTOM HOOK
export function useSearchResults() {
    const params = useParams();
    const setRecoilQuery = useSetRecoilState(queryState);
    const results = useRecoilValue(resultsState);

    useEffect(() => {
        if (params.query) {
            setRecoilQuery(params.query);
        }
    }, [params.query]);

    return results;
}

// OTRO CUSTOM HOOK
export function useItemResult() {
    const params = useParams();
    const setRecoilItemId = useSetRecoilState(itemIdState);
    const item = useRecoilValue(IdState);

    useEffect(() => {
        if (params.id) {
            setRecoilItemId(params.id);
        }
    }, [params.id]);

    return item;
}
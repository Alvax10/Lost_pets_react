import React from "react";
import css from "./item.css";
import { useItemResult } from "../hooks";
import { SearchQuery } from "../components/SearchComp";

export function Item() {

    const item = useItemResult();
    console.log("Este es el item: ", item);
    return (
        <div className={css.prod}>
            <SearchQuery className={css.prodTitle} price={item["price"]} title={item["title"]} img={item["thumbnail"]} />
        </div>
    );
}
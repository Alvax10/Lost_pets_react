import React from "react";
import { Link } from "react-router-dom";
import { SearchQuery } from "../components/SearchComp";
import { useSearchResults } from "../hooks";
import css from "./searchResult.css";

export  function SearchResults() {
    const results = useSearchResults();

    let id = 1;
    return (
        <div className={css.prodsContainer}>
            <h3 className={css.results}> Results: {results.length} </h3>
            {results.map((r: any) => (
                <Link className={css.link} key={id += 1} to={"/item/" + r.id}>
                    <div className={css.divStyle}>
                        <SearchQuery title={r.title} price={r.price} img={r.thumbnail} />
                    </div>
                </Link>
            ))}
        </div>
    );
}


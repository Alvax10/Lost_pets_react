import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainButton } from '../UI/button';
import { TextField } from '../UI/textField';
import css from "./searchForm.css";

export function SearchForm() {

    const navigate = useNavigate();
    function submitEvent(e) {
        e.preventDefault();
        const query = e.target.query.value;
        navigate("/search/" + query, { replace: true });
    }

    console.log("render form");
    return (
        <form className={css.formStyle} onSubmit={submitEvent}>
            <TextField>
                <MainButton> Enviar </MainButton>
            </TextField>
        </form>
    );
}
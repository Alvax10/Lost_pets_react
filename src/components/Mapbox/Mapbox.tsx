import css from "./Mapbox.css";
import mapboxgl from 'mapbox-gl';
import { useLocation } from '../../hooks';
import React, { useRef, useEffect, useState } from 'react';
import { InputLabel } from "../../UI/InputLabel/InputLabel";
export const mapbox_token = 'pk.eyJ1IjoiYWx2YXJvYmFzdGlhIiwiYSI6ImNreTByc3pzMTA0MWcydmxkemM1bDY5aTMifQ.y9exP2YyY3nQ3-qbR2rw1A';
mapboxgl.accessToken = mapbox_token;

export function MapboxComp(props) {

    const [loc, setLoc] = useLocation();
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    }, [mapContainer]);

    async function handleSearch(e) {
        e.preventDefault();
        const { features } = await (await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=${mapbox_token}`)).json();
        // console.log(features[0]);
        if (!map.current) return; // wait for map to initialize
        await map.current.flyTo({center: [features[0].geometry.coordinates[0], features[0].geometry.coordinates[1]], zoom: 15, speed: 0.6, curve: 2});
        await setLng(features[0].geometry.coordinates[0]);
        await setLat(features[0].geometry.coordinates[1]);

        // ACA SETEO EL NAME Y LAS COORDENADAS
        props.geoloc(features[0]["place_name"], features[0].geometry.coordinates[1], features[0].geometry.coordinates[0]);
    }

    return (
    <div className={css.container}>
        <link href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" />
        <div ref={mapContainer} className={css["map-container"]} />
        <InputLabel name="location" onChange={event => setLoc(event.target.value)} type="text" label="Ubicación" />
        <div onClick={handleSearch} className={css["green-button"]}> Marcar Ubicación </div>
    </div>
    );
}
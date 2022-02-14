import React, { useRef, useEffect, useState } from 'react';
import css from "./Mapbox.css";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { useLocationName } from '../ReportMascots/ReportMascot';
export const mapbox_token = 'pk.eyJ1IjoiYWx2YXJvYmFzdGlhIiwiYSI6ImNreTByc3pzMTA0MWcydmxkemM1bDY5aTMifQ.y9exP2YyY3nQ3-qbR2rw1A';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = mapbox_token;
import { useGeoloc } from '../ReportMascots/ReportMascot';

export function MapboxComp(props) {

    const [loc, setLoc] = useLocationName();
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const [geoloc, setGeoloc] = useGeoloc();

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    async function handleSearch(e) {
        e.preventDefault();
        const { features } = await (await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=${mapbox_token}`)).json();
        // console.log(features[0]);
        if (!map.current) return; // wait for map to initialize
        await map.current.flyTo({center: [features[0].geometry.coordinates[0], features[0].geometry.coordinates[1]], zoom: 15, speed: 0.7, curve: 2});
        await ( await setGeoloc({
            name: features[0]["place_name"],
            lat: features[0].geometry.coordinates[1],
            lng: features[0].geometry.coordinates[0],
        }));
        await setLng(features[0].geometry.coordinates[0]);
        await setLat(features[0].geometry.coordinates[1]);
    }

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
    <div className={css.container}>
        <link href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" />
        <div className={css.sidebar}> Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} </div>
        <div ref={mapContainer} className={css["map-container"]} />
        <InputLabel name="location" onChange={event => setLoc(event.target.value)} type="text" label="Ubicación" />
        <div onClick={handleSearch} className={css["green-button"]}> Marcar Ubicación </div>
    </div>
    );
}
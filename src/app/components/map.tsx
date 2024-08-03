"use client"

import React, {useEffect} from 'react'
import {Loader} from '@googlemaps/js-api-loader';


export function Map(){
    const mapRef = React.useRef<HTMLDivElement>(null);
    useEffect(()=>{

    const initMap = async () => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
            version: 'weekly'
        });

        const {Map} = await loader.importLibrary('maps');


        const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

        const position = {
            lat: 43.642567,
            lng:-79.387054
        }

        const mapOptions: google.maps.MapOptions = {
            center: position,
            zoom: 17,
            mapId:'EcoFind_MAPID'

        }

        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

        const marker = new Marker({
            map: map,
            position: position
        })

    } 

        initMap();
}, []);

    return(
        <div style = {{height: '600px'}} ref={mapRef} />
    )
}
import React, { useEffect, useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

export default function MapComponent() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude as any);
            setLong(position.coords.longitude as any);
        });
    }, [lat, long]);

    const myCity = {
        lat: lat,
        lng: long,
    }

    const handleMapLoad = (map: any) => {
        map.setOptions({
            gestureHandling: 'greedy',
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
        });
    };



    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
    });

    if (loadError) return <div>Error loading Maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={myCity as any}
            onLoad={handleMapLoad}
        />
    );
}

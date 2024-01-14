import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import ModalComponent from "./Modal";
import LoadStationsCollection from "../services/collections/LoadStationsCollection";

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

export default function MapComponent() {
    const [lat, setLat] = useState(Number);
    const [long, setLong] = useState(Number);
    const [station, setStation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            // setLat(position.coords.latitude as any);
            // setLong(position.coords.longitude as any);

            setLat(55.22503702871599);
            setLong(11.750777235661934);
        });
        LoadStationsCollection.getAllStations().then((result: any) => {
            console.log(result)
            setStation(result.object)
        })
    }, [lat, long]);

    const city = {
        lat: lat,
        lng: long
    } as any

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
        googleMapsApiKey: `AIzaSyCywB8YAGzfsCy72UJ6JaOJYIzTr84P-XA`,
    });

    if (loadError) return <div>Error loading Maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;

    return (
        <>
            {city && (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={13}
                    center={city}
                    onLoad={handleMapLoad}
                >
                    <ModalComponent stations={station} />
                </GoogleMap>
            )}
        </>
    );
}


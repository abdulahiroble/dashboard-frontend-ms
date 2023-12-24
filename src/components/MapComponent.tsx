import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import ModalComponent from "./Modal";

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

const stations = [{
    MML: [55.22503702871599, 11.750777235661934],
    HOL: [55.24673402394817, 11.77157725310437],
    YDN: [55.20835346894054, 11.740549069590848],
    NSV: [55.24740224552815, 11.713430586100033],
}] as any

export default function MapComponent() {
    const [lat, setLat] = useState(Number);
    const [long, setLong] = useState(Number);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            // setLat(position.coords.latitude as any);
            // setLong(position.coords.longitude as any);

            // setLat(55.22503702871599 as any);
            // setLong(11.750777235661934 as any);

            setLat(55.22503702871599);
            setLong(11.750777235661934);
        });
    }, [lat, long]);

    const myCity = {
        lat: lat,
        lng: long
    } as any

    // const myCity = {
    //     lat: [55.22503702871599, 11.750777235661934],
    //     lng: [55.24673402394817, 11.77157725310437]
    // }

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
        // <GoogleMap
        //     mapContainerStyle={mapContainerStyle}
        //     zoom={13}
        //     center={myCity}
        //     onLoad={handleMapLoad}
        // >
        //     <ModalComponent stations={stations} />
        // </GoogleMap>
        <>
            {myCity && (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={13}
                    center={myCity}
                    onLoad={handleMapLoad}
                >
                    <Marker
                        key={myCity.lat}
                        position={{
                            lat: parseFloat(myCity.lat),
                            lng: parseFloat(myCity.lng)
                        }}
                    >
                    </Marker>
                    {/* <ModalComponent stations={stations} /> */}
                </GoogleMap>
            )}
        </>
    );
}


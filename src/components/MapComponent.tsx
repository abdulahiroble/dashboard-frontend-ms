import { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw', // 100% of viewport width
    height: '100vh', // 100% of viewport height
};


const MapComponent = () => {

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


    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as any}>
            <GoogleMap mapContainerStyle={containerStyle} center={myCity as any} zoom={14} onLoad={handleMapLoad}>
                <Marker
                    position={{
                        lat: parseFloat(myCity.lat as any),
                        lng: parseFloat(myCity.lng as any),
                    }}
                >
                </Marker>
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
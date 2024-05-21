import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface ERFGoogleMapProps {
  apiKey: string;
}

const defaultLocation = { lat: 37.7749, lng: -122.4194 }; // Default location (San Francisco, US)

const ERFGoogleMap: React.FC<ERFGoogleMapProps> = ({ apiKey }) => {
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const handleLocationChange = (location: { lat: number; lng: number }) => {
    setSelectedLocation(location);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={selectedLocation}
        onClick={(e) => {
          if (e.latLng) {
            handleLocationChange({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          }
        }}
      >
        <Marker position={selectedLocation} />
      </GoogleMap>
      <button onClick={() => handleLocationChange(defaultLocation)}>
        Change to Default Location
      </button>
    </LoadScript>
  );
};

export default ERFGoogleMap;

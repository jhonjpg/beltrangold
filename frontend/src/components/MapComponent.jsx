import React from 'react';
import ReactMapGL from 'react-map-gl';

const MapComponent = () => {
  const mapboxToken = 'TU_TOKEN_DE_MAPBOX'; // Reemplaza con tu token de Mapbox
  const mapStyle = 'mapbox://styles/mapbox/satellite-streets-v11';

  const viewport = {
    latitude: 19.395858441852923,
    longitude: -70.52501332461603,
    zoom: 13,
  };

  return (
    <div className="w-full h-full">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={mapStyle}
        mapboxApiAccessToken={mapboxToken}
      />
    </div>
  );
};

export default MapComponent;

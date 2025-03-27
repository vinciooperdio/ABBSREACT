import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './InteractiveMap.scss';

// Fix for Leaflet default icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Definisco i tipi per i servizi fisici
interface PhysicalService {
  id: string;
  name: string;
  type: 'gym' | 'pool' | 'theater';
  position: [number, number]; // Latitudine, Longitudine
  distance: string;
  rating: number;
  price: string;
}

interface InteractiveMapProps {
  services: PhysicalService[];
  onMarkerClick: (serviceId: string) => void;
  userPosition: [number, number];
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ services, onMarkerClick, userPosition }) => {
  // Fix for default icon issues in React
  useEffect(() => {
    // Fix the Leaflet default icon
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: icon,
      iconUrl: icon,
      shadowUrl: iconShadow,
    });
    
    // Force reflow for map containers on mobile
    const forceRefresh = () => {
      const mapElements = document.querySelectorAll('.leaflet-container');
      mapElements.forEach(el => {
        (el as HTMLElement).style.display = 'none';
        setTimeout(() => {
          (el as HTMLElement).style.display = 'block';
        }, 10);
      });
    };
    
    // Refresh map on window resize
    window.addEventListener('resize', forceRefresh);
    
    // Initial force refresh
    setTimeout(forceRefresh, 500);
    
    return () => {
      window.removeEventListener('resize', forceRefresh);
    };
  }, []);

  // Get custom icon based on service type
  const getCustomIcon = (type: string) => {
    let color = '#3498db'; // default blue
    
    if (type === 'gym') color = '#e74c3c';
    if (type === 'pool') color = '#3498db';
    if (type === 'theater') color = '#9b59b6';
    
    return new L.Icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      className: `custom-marker custom-marker--${type}`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
  };

  // Inline styles to ensure visibility
  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: 10,
    display: 'block',
    visibility: 'visible',
    minHeight: '350px'
  };
  
  const mapStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    minHeight: '350px',
    position: 'relative',
    zIndex: 5,
    display: 'block',
    visibility: 'visible'
  };

  return (
    <div className="interactive-map" style={containerStyle}>
      <MapContainer 
        center={userPosition} 
        zoom={14} 
        style={mapStyle}
        zoomControl={true}
        attributionControl={true}
        className="map-tiles"
        scrollWheelZoom={true}
        dragging={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        {/* User location marker */}
        <Marker 
          position={userPosition} 
          icon={new L.Icon({
            iconUrl: icon,
            shadowUrl: iconShadow,
            className: 'user-location-marker',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })}
        >
          <Popup className="service-popup">
            <h3>La tua posizione</h3>
            <p>Qui sei tu</p>
          </Popup>
        </Marker>
        
        {/* Service markers */}
        {services.map((service) => (
          <Marker 
            key={service.id}
            position={service.position}
            icon={getCustomIcon(service.type)}
            eventHandlers={{
              click: () => onMarkerClick(service.id),
            }}
          >
            <Popup className="service-popup">
              <h3>{service.name}</h3>
              <p><strong>Distanza:</strong> {service.distance}</p>
              <p><strong>Valutazione:</strong> {service.rating} ★</p>
              <p><strong>Prezzo:</strong> {service.price}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap; 
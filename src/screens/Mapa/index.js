import "leaflet/dist/leaflet.css";

import L from "leaflet";

import {MapContainer, TileLayer,  Marker,  Popup,  Polyline} from "react-leaflet";

import { useEffect, useState } from "react";

//imprtando o icone do site leaflet
const icon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function Mapa() {

// TROCAR AQUI PONTOS DE ORIGEM E DESTINO PROCURE O NOME DO LOCAL TURISTICO NO GOOGLE MAPS E PEGUE OS VALORES DE LATITIDE E LONGITUDE
  const origem = [-24.4945, -47.8456];

  const destino = [ -22.9035, -43.2096 ];

  const [rota, setRota] = useState([]);

  useEffect(() => {

    const url =
      "https://router.project-osrm.org/route/v1/driving/" +
      origem[1] + "," + origem[0] + ";" +
      destino[1] + "," + destino[0] +
      "?overview=full&geometries=geojson";

    fetch(url)
      .then(res => res.json())
      .then(data => {

        if (data.routes.length > 0) {

          const coords =
            data.routes[0].geometry.coordinates;

          const latlngs =
            coords.map(c => [c[1], c[0]]);

          setRota(latlngs);
        }
      });

  }, []);

  return (

    <MapContainer
      center={origem}
      zoom={10}
      style={{
        height: "100vh",
        width: "100%"
      }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* MARCADOR ORIGEM */}
      <Marker
        position={origem}
        icon={icon}
      >
        <Popup>Origem</Popup>
      </Marker>

      {/* MARCADOR DESTINO */}
      <Marker
        position={destino}
        icon={icon}
      >
        <Popup>Destino</Popup>
      </Marker>

      {/* ROTA */}
      {rota.length > 0 && (
        <Polyline
          positions={rota}
          color="blue"
        />
      )}

    </MapContainer>
  );
}
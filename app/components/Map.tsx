import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import React from "react";

type MapCoordinates = LatLngExpression;

export default function Map() {
  const center: MapCoordinates = [51.505, -0.09];
  const markerPosition: MapCoordinates = [54.3522, 18.6558];
  return (
    <section className="h-screen">
      <div className="flex justify-center items-center gap-3">
        <div>
          <form>
            <label htmlFor="email">Seu Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="exemplo@mail.com"
            />
            <label htmlFor="assunto">Assunto</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Sua dúvida..."
            />
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              placeholder="Mensagem..."
            ></textarea>
          </form>
        </div>
        <div>
          <MapContainer
            style={{
              height: "100vh",
            }}
            center={center}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={markerPosition}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

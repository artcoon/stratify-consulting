/**
 * GOOGLE MAPS FRONTEND INTEGRATION - ESSENTIAL GUIDE
 *
 * USAGE FROM PARENT COMPONENT:
 * ======
 *
 * const mapRef = useRef<google.maps.Map | null>(null);
 *
 * <MapView
 *   initialCenter={{ lat: 40.7128, lng: -74.0060 }}
 *   initialZoom={15}
 *   onMapReady={(map) => {
 *     mapRef.current = map; // Store to control map from parent anytime, google map itself is in charge of the re-rendering, not react state.
 * </MapView>
 *
 * ======
 * Available Libraries and Core Features:
 * -------------------------------
 * 📍 MARKER (from `marker` library)
 * - Attaches to map using { map, position }
 * new google.maps.marker.AdvancedMarkerElement({
 *   map,
 *   position: { lat: 37.7749, lng: -122.4194 },
 *   title: "San Francisco",
 * });
 *
 * -------------------------------
 * 🏢 PLACES (from `places` library)
 * - Does not attach directly to map; use data with your map manually.
 * const place = new google.maps.places.Place({ id: PLACE_ID });
 * await place.fetchFields({ fields: ["displayName", "location"] });
 * map.setCenter(place.location);
 * new google.maps.marker.AdvancedMarkerElement({ map, position: place.location });
 *
 * -------------------------------
 * 🧭 GEOCODER (from `geocoding` library)
 * - Standalone service; manually apply results to map.
 * const geocoder = new google.maps.Geocoder();
 * geocoder.geocode({ address: "New York" }, (results, status) => {
 *   if (status === "OK" && results[0]) {
 *     map.setCenter(results[0].geometry.location);
 *     new google.maps.marker.AdvancedMarkerElement({
 *       map,
 *       position: results[0].geometry.location,
 *     });
 *   }
 * });
 *
 * -------------------------------
 * 📐 GEOMETRY (from `geometry` library)
 * - Pure utility functions; not attached to map.
 * const dist = google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
 *
 * -------------------------------
 * 🛣️ ROUTES (from `routes` library)
 * - Combines DirectionsService (standalone) + DirectionsRenderer (map-attached)
 * const directionsService = new google.maps.DirectionsService();
 * const directionsRenderer = new google.maps.DirectionsRenderer({ map });
 * directionsService.route(
 *   { origin, destination, travelMode: "DRIVING" },
 *   (res, status) => status === "OK" && directionsRenderer.setDirections(res)
 * );
 *
 * -------------------------------
 * 🌦️ MAP LAYERS (attach directly to map)
 * - new google.maps.TrafficLayer().setMap(map);
 * - new google.maps.TransitLayer().setMap(map);
 * - new google.maps.BicyclingLayer().setMap(map);
 *
 * -------------------------------
 * ✅ SUMMARY
 * - “map-attached” → AdvancedMarkerElement, DirectionsRenderer, Layers.
 * - “standalone” → Geocoder, DirectionsService, DistanceMatrixService, ElevationService.
 * - “data-only” → Place, Geometry utilities.
 */

/// <reference types="@types/google.maps" />

import { useEffect, useRef } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";
import L from "leaflet";
import { CASE_STUDIES, MINI_PROJECTS } from "../const";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

declare global {
  interface Window {
    google?: typeof google;
  }
}

const API_KEY = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;
const FORGE_BASE_URL =
  import.meta.env.VITE_FRONTEND_FORGE_API_URL ||
  "https://forge.butterfly-effect.dev";
const MAPS_PROXY_URL = `${FORGE_BASE_URL}/v1/maps/proxy`;

const leafletDefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const leafletFeaturedIcon = L.divIcon({
  className: "",
  html: `<div style="display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:#1F7A3A;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.25);color:#fff;font-size:10px;font-weight:700;font-family:Georgia,serif">ES</div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

function loadMapScript() {
  return new Promise<boolean>(resolve => {
    if (!API_KEY) {
      resolve(false);
      return;
    }
    const script = document.createElement("script");
    script.src = `${MAPS_PROXY_URL}/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker,places,geocoding,geometry`;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => {
      resolve(true);
      script.remove(); // Clean up immediately
    };
    script.onerror = () => {
      console.error("Failed to load Google Maps script");
      resolve(false);
    };
    document.head.appendChild(script);
  });
}

interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onMapReady?: (map: google.maps.Map) => void;
}

export function MapView({
  className,
  initialCenter = { lat: 37.7749, lng: -122.4194 },
  initialZoom = 12,
  onMapReady,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const leafletMap = useRef<L.Map | null>(null);

  const init = usePersistFn(async () => {
    if (!mapContainer.current) {
      console.error("Map container not found");
      return;
    }

    const canUseGoogle = await loadMapScript();
    if (canUseGoogle && window.google?.maps) {
      map.current = new window.google.maps.Map(mapContainer.current, {
        zoom: initialZoom,
        center: initialCenter,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
        streetViewControl: true,
        mapId: "DEMO_MAP_ID",
      });
      if (onMapReady) {
        onMapReady(map.current);
      }
      return;
    }

    // Leaflet fallback (GitHub Pages-safe): show all 25 sites
    const m = L.map(mapContainer.current, { scrollWheelZoom: false });
    leafletMap.current = m;
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(m);

    const sites = [
      ...CASE_STUDIES.map((s) => ({
        id: s.id,
        title: s.title,
        client: s.client,
        year: s.year,
        budget: s.budget,
        description: s.description,
        lat: s.lat,
        lng: s.lng,
        featured: true,
      })),
      ...MINI_PROJECTS.map((p) => ({
        id: p.id,
        title: p.title,
        client: p.client,
        year: p.year,
        budget: p.budget,
        description: undefined as string | undefined,
        lat: p.lat,
        lng: p.lng,
        featured: false,
      })),
    ];

    const bounds = L.latLngBounds([]);
    sites.forEach((site) => {
      const latLng: L.LatLngExpression = [site.lat, site.lng];
      bounds.extend(latLng);

      const marker = L.marker(latLng, {
        icon: site.featured ? leafletFeaturedIcon : leafletDefaultIcon,
      }).addTo(m);

      const descriptionHtml = site.description
        ? `<p style="margin:0 0 8px;font-size:11px;color:#6B6B5F;line-height:1.4">${site.description}</p>`
        : "";

      marker.bindPopup(`
        <div style="padding:8px 4px;max-width:260px;text-align:left;font-family:sans-serif">
          <span style="font-size:9px;font-weight:bold;color:#1F7A3A;text-transform:uppercase;letter-spacing:1px">${site.client}</span>
          <h4 style="margin:4px 0 6px;font-size:13px;font-weight:bold;color:#173B57">${site.title}</h4>
          ${descriptionHtml}
          <div style="font-size:10px;font-weight:bold;color:#1F7A3A">실적 규모: ${site.budget}</div>
          ${site.year ? `<div style="margin-top:4px;font-size:10px;color:#6B6B5F">준공: ${site.year}</div>` : ""}
        </div>
      `);
    });

    if (bounds.isValid()) {
      m.fitBounds(bounds, { padding: [40, 40] });
    } else {
      m.setView([initialCenter.lat, initialCenter.lng], initialZoom);
    }
  });

  useEffect(() => {
    init();
    return () => {
      leafletMap.current?.remove();
      leafletMap.current = null;
    };
  }, [init]);

  return (
    <div ref={mapContainer} className={cn("w-full h-[500px]", className)} />
  );
}

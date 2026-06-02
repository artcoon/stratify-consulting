import { useEffect, useRef } from "react";
import L from "leaflet";
import type { ProjectSite } from "../const";

// Fix default marker icon paths for Vite bundling
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const featuredIcon = L.divIcon({
  className: "",
  html: `<div style="display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:#1F7A3A;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.25);color:#fff;font-size:10px;font-weight:700;font-family:Georgia,serif">ES</div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

interface ProjectMapProps {
  sites: ProjectSite[];
  className?: string;
}

export function ProjectMap({ sites, className = "h-[400px] w-full" }: ProjectMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    const bounds = L.latLngBounds([]);

    sites.forEach((site) => {
      const latLng: L.LatLngExpression = [site.lat, site.lng];
      bounds.extend(latLng);

      const icon = site.featured ? featuredIcon : defaultIcon;
      const marker = L.marker(latLng, { icon }).addTo(map);

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
      map.fitBounds(bounds, { padding: [40, 40] });
    } else {
      map.setView([37.41, 127.27], 11);
    }

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [sites]);

  return <div ref={containerRef} className={className} />;
}

const GEOLOCATON_SUPPORTED = "geolocation" in navigator;

export function deviceLocation(): Promise<Position> {
  if (!GEOLOCATON_SUPPORTED) {
    return Promise.reject("Geolocation not supported");
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export function getBackEndUrl(): string {
  const isLocal: boolean = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  return isLocal ? 'http://localhost:8080' : 'https://resume-docker.onrender.com';
}

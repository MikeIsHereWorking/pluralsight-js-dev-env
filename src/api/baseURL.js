export default function getBaseUrl() {
  const isDevelopment = window.location.host === 'localhost:3000';
  return isDevelopment ? 'http://localhost:3001/': '/';
}

let { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, SERVER_SESSION_SECRET, PORT } = process.env;
FORGE_CLIENT_ID = "ZvhttNGLOVlEpA3egh5AXbKw5vAzWcNj";
FORGE_CLIENT_SECRET = "EG98v6jaCcYZPKLb";
FORGE_CALLBACK_URL = "http://localhost:8080/api/auth/callback";
SERVER_SESSION_SECRET = "any";
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET || !FORGE_CALLBACK_URL || !SERVER_SESSION_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
const INTERNAL_TOKEN_SCOPES = ['data:read'];
const PUBLIC_TOKEN_SCOPES = ['viewables:read'];
PORT = 8080;

module.exports = {
    FORGE_CLIENT_ID,
    FORGE_CLIENT_SECRET,
    FORGE_CALLBACK_URL,
    SERVER_SESSION_SECRET,
    INTERNAL_TOKEN_SCOPES,
    PUBLIC_TOKEN_SCOPES,
    PORT
};
// Exporta pedidos de Firestore a JSON para la migración a Supabase.
// Uso: node scripts/exportar_pedidos.js > pedidos.json
require("dotenv").config();
const { FIREBASE_PROJECT_ID: proyecto, FIREBASE_API_KEY: llave } = process.env;

(async () => {
  const url = `https://firestore.googleapis.com/v1/projects/${proyecto}/databases/(default)/documents/pedidos?pageSize=300&key=${llave}`;
  const r = await fetch(url);
  console.log(JSON.stringify(await r.json(), null, 2));
})();

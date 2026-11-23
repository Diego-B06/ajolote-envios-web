# Ajolote Envíos — sitio de rastreo

Página pública para rastrear guías y panel interno para el equipo de operaciones.

## Correr local

1. Copia `.env` (pídelo en el canal de dev) a la raíz.
2. `npm i -g firebase-tools`
3. `firebase serve`

## Deploy

`firebase deploy --only hosting`

Pendiente: migrar los pedidos a Supabase (ver `scripts/exportar_pedidos.js`).

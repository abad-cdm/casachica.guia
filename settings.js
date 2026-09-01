// ============================================
// CASA CHICA - Configuración de Supabase
// ============================================
// ¡Reemplaza estos valores con los de tu proyecto!

const SUPABASE_URL = 'https://lfmzvaiyhljwrxbrmvjg.supabase.co'; // ← URL corregida
const SUPABASE_ANON_KEY = 'sb_publishable_kmBEyHq3n0K6S_8gYQZh_Q_bP_B3qOa'; // ← CÓPIALA DE SUPABASE

// Creamos el cliente y lo exponemos globalmente
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
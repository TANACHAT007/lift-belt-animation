// Lift Belt has no backend: data never leaves the browser (BLE is device -> this page only).
// Stub keeps js/app.js (theme, language, FX, nav) working without Firebase.
export const USING_EMULATOR = false;
export const auth = { currentUser: null };
export const db = null;
export const p = (x) => x;
export const onAuthStateChanged = (_a, cb) => { setTimeout(() => cb(null), 0); return () => {}; };
export const signOut = async () => {};
export const ref = () => null, get = async () => ({ exists: () => false, val: () => null }), set = async () => {}, push = () => ({ key: String(Date.now()) }), serverTimestamp = () => Date.now();

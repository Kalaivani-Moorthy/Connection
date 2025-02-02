

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DkoFmzW5.js","_app/immutable/chunks/disclose-version.B78L5vDZ.js","_app/immutable/chunks/runtime.CpCqj8bJ.js","_app/immutable/chunks/legacy.pbXosNl6.js","_app/immutable/chunks/render.B0mGP5hw.js","_app/immutable/chunks/events.4w5SNoww.js","_app/immutable/chunks/if.BLWaVz2p.js"];
export const stylesheets = ["_app/immutable/assets/3.OMw9pkuA.css"];
export const fonts = [];

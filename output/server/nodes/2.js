

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Cbry7LO3.js","_app/immutable/chunks/disclose-version.B78L5vDZ.js","_app/immutable/chunks/runtime.CpCqj8bJ.js","_app/immutable/chunks/legacy.pbXosNl6.js","_app/immutable/chunks/events.4w5SNoww.js","_app/immutable/chunks/entry.BWjZT8KS.js"];
export const stylesheets = ["_app/immutable/assets/2.uSe_K_Q2.css"];
export const fonts = [];

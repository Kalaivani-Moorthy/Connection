

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.LfAG9aZD.js","_app/immutable/chunks/disclose-version.B78L5vDZ.js","_app/immutable/chunks/runtime.CpCqj8bJ.js"];
export const stylesheets = [];
export const fonts = [];

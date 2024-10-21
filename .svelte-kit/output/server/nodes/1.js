

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D1avsWKT.js","_app/immutable/chunks/scheduler.DcvwqIos.js","_app/immutable/chunks/index.w2n1_xMr.js","_app/immutable/chunks/entry.Cyjzv2Oq.js"];
export const stylesheets = [];
export const fonts = [];

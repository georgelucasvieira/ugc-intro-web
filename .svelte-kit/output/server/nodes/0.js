import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Cpbr64Xc.js","_app/immutable/chunks/scheduler.DcvwqIos.js","_app/immutable/chunks/index.w2n1_xMr.js"];
export const stylesheets = ["_app/immutable/assets/0.B3NrL6D3.css"];
export const fonts = [];

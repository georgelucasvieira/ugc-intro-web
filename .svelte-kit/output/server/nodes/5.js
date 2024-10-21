

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search-query/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.a9taQP92.js","_app/immutable/chunks/scheduler.DcvwqIos.js","_app/immutable/chunks/index.w2n1_xMr.js","_app/immutable/chunks/UserMessage.BFSGC5UK.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/index.E-g4_rZF.js","_app/immutable/chunks/Navbar.CpF64Bv6.js"];
export const stylesheets = ["_app/immutable/assets/5.C2C1nP9l.css","_app/immutable/assets/UserMessage.JEeT2tpx.css","_app/immutable/assets/Navbar.CYNFUU6W.css"];
export const fonts = [];

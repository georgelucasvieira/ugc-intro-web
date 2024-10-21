

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BeZ7yklI.js","_app/immutable/chunks/scheduler.DcvwqIos.js","_app/immutable/chunks/index.w2n1_xMr.js","_app/immutable/chunks/Home.D5bgLpcI.js","_app/immutable/chunks/Navbar.CpF64Bv6.js"];
export const stylesheets = ["_app/immutable/assets/Home.B8E_a4dK.css","_app/immutable/assets/Navbar.CYNFUU6W.css"];
export const fonts = [];

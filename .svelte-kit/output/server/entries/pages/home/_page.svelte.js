import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Home } from "../../../chunks/Home.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_GBO9PnyS.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './dashboard_CLPNdEYc.mjs';
/* empty css                              */
import $$Signin from './signin__l77uQo7.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dasboard Parceritos Baby", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Signin", $$Signin, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/Jhoi/Music/Semestre 2024-1/Trabajo de campo/Pasitos Traviesos/chic-kelpie/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jhoi/Music/Semestre 2024-1/Trabajo de campo/Pasitos Traviesos/chic-kelpie/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

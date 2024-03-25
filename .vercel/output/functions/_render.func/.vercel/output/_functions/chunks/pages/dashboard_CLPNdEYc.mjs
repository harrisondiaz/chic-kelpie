/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, h as renderComponent } from '../astro_GBO9PnyS.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                              */
import { createClient } from '@supabase/supabase-js';
/* empty css                              */
/* empty css                              */

const supabase = createClient(
  "https://ggbralugqoodmaklkses.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnYnJhbHVncW9vZG1ha2xrc2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyNzU1NzMsImV4cCI6MjAyNTg1MTU3M30.azSvOdFCgrWGUYfjn8v_yCUtlqC_3G2hH58wLCjfm8w"
);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Jhoi/Music/Semestre 2024-1/Trabajo de campo/Pasitos Traviesos/chic-kelpie/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavBar;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav id="header" class="bg-white fixed w-full z-10 top-0 shadow" data-astro-cid-ymhdp2rl> <div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0" data-astro-cid-ymhdp2rl> <div class="w-1/2 pl-2 md:pl-0" data-astro-cid-ymhdp2rl> <a class="text-gray-900 text-xl xl:text-3xl no-underline text-nowrap hover:no-underline font-bold text-better" data-astro-cid-ymhdp2rl> <i class="fas fa-sun text-pink-600 pr-3" data-astro-cid-ymhdp2rl></i> Dashboard Parceritos Baby
</a> </div> <div class="w-1/2 pr-0" data-astro-cid-ymhdp2rl> <div class="flex relative inline-block float-right" data-astro-cid-ymhdp2rl> <div class="relative text-sm" data-astro-cid-ymhdp2rl> <button id="userButton" class="flex items-center focus:outline-none mr-3" data-astro-cid-ymhdp2rl> <img class="w-8 h-8 rounded-full mr-4" src="https://ggbralugqoodmaklkses.supabase.co/storage/v1/object/sign/public%20images/_3edd1255-0380-49c4-8654-19416669e32f.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwdWJsaWMgaW1hZ2VzL18zZWRkMTI1NS0wMzgwLTQ5YzQtODY1NC0xOTQxNjY2OWUzMmYuanBlZyIsImlhdCI6MTcxMTM5MzM3MCwiZXhwIjoyMzQyNTQ1MzcwfQ.GqyzvBWVdRgGKIAoQBaUGZ9mNVaVARGbrB6zp9nBXbE&t=2024-03-25T19%3A02%3A52.033Z" alt="Avatar of User" data-astro-cid-ymhdp2rl> <span class="hidden md:inline-block" data-astro-cid-ymhdp2rl>Hola, ${name} </span> <svg class="pl-2 h-2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129" data-astro-cid-ymhdp2rl> <g data-astro-cid-ymhdp2rl> <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" data-astro-cid-ymhdp2rl></path> </g> </svg> </button> <div id="userMenu" class="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible" data-astro-cid-ymhdp2rl> <ul class="list-reset" data-astro-cid-ymhdp2rl> <li data-astro-cid-ymhdp2rl> <a href="/api/auth/signout" class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline" data-astro-cid-ymhdp2rl>Salida segura</a> </li> </ul> </div> </div> <div class="block lg:hidden pr-4" data-astro-cid-ymhdp2rl> <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none" data-astro-cid-ymhdp2rl> <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ymhdp2rl> <title>Menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" data-astro-cid-ymhdp2rl></path> </svg> </button> </div> </div> </div> <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20" id="nav-content" data-astro-cid-ymhdp2rl> <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0" data-astro-cid-ymhdp2rl> <li class="mr-6 my-2 md:my-0" data-astro-cid-ymhdp2rl> <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-gray-900 border-b-2 border-white hover:border-orange-600" data-astro-cid-ymhdp2rl> <i class="fas fa-fw mr-3 " data-astro-cid-ymhdp2rl></i><span class="pb-1 md:pb-0 text-sm" data-astro-cid-ymhdp2rl>Inicio</span> </a> </li> <li class="mr-6 my-2 md:my-0" data-astro-cid-ymhdp2rl> <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500" data-astro-cid-ymhdp2rl> <i class="fas fa-fw mr-3" data-astro-cid-ymhdp2rl></i><span class="pb-1 md:pb-0 text-sm" data-astro-cid-ymhdp2rl>Productos</span> </a> </li> <li class="mr-6 my-2 md:my-0" data-astro-cid-ymhdp2rl> <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-purple-500" data-astro-cid-ymhdp2rl> <i class="fa  fa-fw mr-3" data-astro-cid-ymhdp2rl></i><span class="pb-1 md:pb-0 text-sm" data-astro-cid-ymhdp2rl>Proveedores</span> </a> </li> <li class="mr-6 my-2 md:my-0" data-astro-cid-ymhdp2rl> <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-green-500" data-astro-cid-ymhdp2rl> <i class="fas fa-fw mr-3" data-astro-cid-ymhdp2rl></i><span class="pb-1 md:pb-0 text-sm" data-astro-cid-ymhdp2rl>Reportes</span> </a> </li> <li class="mr-6 my-2 md:my-0" data-astro-cid-ymhdp2rl> <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-red-500" data-astro-cid-ymhdp2rl> <i class="fa fa-wallet fa-fw mr-3" data-astro-cid-ymhdp2rl></i><span class="pb-1 md:pb-0 text-sm" data-astro-cid-ymhdp2rl>Creo que si</span> </a> </li> </ul> </div> </div> </nav> `;
}, "C:/Users/Jhoi/Music/Semestre 2024-1/Trabajo de campo/Pasitos Traviesos/chic-kelpie/src/components/NavBar.astro", void 0);

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/signin");
  }
  let name = data?.user?.email;
  if (name == "harryjhoi01@gmail.com") {
    name = "Jhoi \u{1FAF0}\u{1F3FB}";
  } else {
    name = "Maryuri";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, { "name": name })}  ${maybeRenderHead()}<div class="container w-full mx-auto pt-20"> <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"></div> </div>   ` })}`;
}, "C:/Users/Jhoi/Music/Semestre 2024-1/Trabajo de campo/Pasitos Traviesos/chic-kelpie/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/Jhoi/Music/Semestre 2024-1/Trabajo de campo/Pasitos Traviesos/chic-kelpie/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$NavBar as a, dashboard as d, supabase as s };

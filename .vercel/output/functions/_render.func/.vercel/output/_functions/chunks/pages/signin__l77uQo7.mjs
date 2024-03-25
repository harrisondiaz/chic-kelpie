/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_GBO9PnyS.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './dashboard_CLPNdEYc.mjs';
/* empty css                              */
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  const isError = cookies.has("error");
  const phrase = "\xA1Ups! Algo sali\xF3 mal. Por favor, intenta de nuevo.";
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  console.log(isError);
  if (isError) {
    cookies.delete("error");
  }
  Astro2.props;
  return renderTemplate(_a || (_a = __template(["", ' <script>\n    \n  window.addEventListener("load", ()=>{\n    let element = document.getElementById("alert");\n    if (element !== null && error) {\n        element.classList.remove("hidden");\n    }\n  });\n<\/script> '])), renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar Sesi\xF3n", "data-astro-cid-cj4bt2fj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-screen w-full" data-astro-cid-cj4bt2fj> <div class="h-full w-full flex items-center justify-center" data-astro-cid-cj4bt2fj> <div class="h-full w-full" data-astro-cid-cj4bt2fj> <form action="/api/auth/signin" method="post" enctype="multipart/form-data" class="flex flex-col hover:blur-0 h-full bg-center bg-cover items-center justify-center w-full gap-5 bg-gradient-to-tr from-sky-700 to-sky-500" data-astro-cid-cj4bt2fj> <img src="https://ggbralugqoodmaklkses.supabase.co/storage/v1/object/sign/public%20images/logo2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwdWJsaWMgaW1hZ2VzL2xvZ28yLnBuZyIsImlhdCI6MTcxMTM4ODA5NSwiZXhwIjoyMzQyNTQwMDk1fQ.AvFkZiIil2DyiaHVZ7lV2Y70-vPqS3E7ArgxoNxkVXY&t=2024-03-25T17%3A34%3A56.892Z" alt="Parceritos Baby" class="w-72 h-44 -mb-12" data-astro-cid-cj4bt2fj> <h1 class="my-6 text-6xl text-white text-better" data-astro-cid-cj4bt2fj>Parceritos Baby</h1> <input type="email" name="email" id="email" class="bg-white/50 hover:bg-white md:bg-white placeholder:text-sky-500 placeholder:text-sm text-sky-500 py-3 px-5 focus:text-sky-500 focus:outline focus:outline-offset-1 focus:outline-sky-500 rounded-md" placeholder="¡Ingresa tu Correo!" data-astro-cid-cj4bt2fj> <input type="password" name="password" id="password" class="bg-white/50 hover:bg-white md:bg-white placeholder:text-sky-500 placeholder:text-sm text-sky-500 py-3 px-5 focus:text-sky-500 focus:outline focus:outline-offset-1 focus:outline-sky-500 rounded-md" placeholder="¡Ingresa tu Contraseña!" data-astro-cid-cj4bt2fj> <div id="alert" class="hidden flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert" data-astro-cid-cj4bt2fj> <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-cj4bt2fj> <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" data-astro-cid-cj4bt2fj></path> </svg> <span class="sr-only" data-astro-cid-cj4bt2fj>Info</span> <div data-astro-cid-cj4bt2fj> <span class="font-medium" data-astro-cid-cj4bt2fj></span> <span class="block sm:inline" data-astro-cid-cj4bt2fj>${phrase}</span> </div> </div> <button type="submit" class="px-6 py-2 bg-lime-500 rounded hover:bg-white hover:text-lime-700 font-semibold transition-all text-white hover:scale-110" data-astro-cid-cj4bt2fj>
Iniciar
</button> </form> </div> </div> </div> ` }));
}, "C:/Users/Jhoi/Music/Semestre 2024-1/Trabajo de campo/Pasitos Traviesos/chic-kelpie/src/pages/signin.astro", void 0);

const $$file = "C:/Users/Jhoi/Music/Semestre 2024-1/Trabajo de campo/Pasitos Traviesos/chic-kelpie/src/pages/signin.astro";
const $$url = "/signin";

export { $$Signin as default, $$file as file, $$url as url };

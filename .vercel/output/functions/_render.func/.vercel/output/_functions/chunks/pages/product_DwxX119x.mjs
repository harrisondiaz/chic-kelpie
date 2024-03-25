/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_GBO9PnyS.mjs';
import 'kleur/colors';
import 'html-escaper';
import { s as supabase, a as $$NavBar } from './dashboard_CLPNdEYc.mjs';

const $$Astro = createAstro();
const $$Product = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Product;
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
  return renderTemplate`${renderComponent($$result, "NavBar", $$NavBar, { "name": name })}`;
}, "C:/Users/Jhoi/Music/Semestre 2024-1/Trabajo de campo/Pasitos Traviesos/chic-kelpie/src/pages/product.astro", void 0);

const $$file = "C:/Users/Jhoi/Music/Semestre 2024-1/Trabajo de campo/Pasitos Traviesos/chic-kelpie/src/pages/product.astro";
const $$url = "/product";

export { $$Product as default, $$file as file, $$url as url };

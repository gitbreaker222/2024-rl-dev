import { i18n } from "astro:config/server";

export const stripTrailingSlash = string => {
  if (string.length > 1 && string.endsWith("/")) {
    string = string.slice(0, -1);
  }
  return string
}

export const normalizeRoute = (url = "") => {
  /*
  console.log(normalizeRoute("/en/lorem/")); // "/lorem"
  console.log(normalizeRoute("/en/lorem")); // "/lorem"
  console.log(normalizeRoute("/lorem/")); // "/lorem"
  console.log(normalizeRoute("/lorem")); // "/lorem"
  console.log(normalizeRoute("/de/lorem")); // "/lorem"
  console.log(normalizeRoute("/")); // "/"
  console.log(normalizeRoute("/en/")); // "/"
  */
  let normalizedRoute = url.trim();

  if (!normalizedRoute.startsWith("/")) {
    normalizedRoute = "/" + normalizedRoute;
  }

  normalizeRoute = stripTrailingSlash(normalizeRoute)

  i18n?.locales.some((locale) => {
    const localePrefix = "/" + locale;
    if (normalizedRoute.startsWith(localePrefix)) {
      normalizedRoute = normalizedRoute.slice(localePrefix.length);
      !normalizedRoute.length && (normalizedRoute = "/");
      return true;
    }
  });

  return normalizedRoute;
};

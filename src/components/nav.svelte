<script>
  import { getRelativeLocaleUrl } from "astro:i18n";
  export let locale = "en";
  export let path = "";
  const l = getRelativeLocaleUrl(locale);
  const basePath = path.substring(l.length - 1);
</script>

<header>
  <nav>
    <a href={l}>home</a>
    <a href="{l}hello-astro">Astro</a>
    <a href="{l}posts/test222">Test 222</a>
    <a href="{l}posts/2025-01-21-test">Test 1</a>
  </nav>

  <a href={getRelativeLocaleUrl("en", basePath)}>English</a>
  <a href={getRelativeLocaleUrl("de", basePath)}>Deutsch</a>
</header>

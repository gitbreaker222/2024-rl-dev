<script>
  let { children, date } = $props();
</script>

<nav>
  <a href="/">About Me</a>
  <a href="/admin">(Edit)</a>
</nav>

{new Date(date).toLocaleDateString()}

{@render children?.()}

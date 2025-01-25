<script>
  const { children } = $props();
  const routes = import.meta.glob('./**/*.md');

  const postLinks = Object.keys(routes)
    .filter((route) => route.includes('./posts'))
    .map((route = '') => route.substring(1).replace('.md', ''));
  console.log('1');
</script>

<nav>
  <a href="/">About Me</a>
  <a href="/admin">(Edit)</a>
  <br />
  # all posts:
  <ul>
    {#each postLinks as post}
      <li>
        <a href={post}>{post.replace('/posts/', '')}</a>
      </li>
    {/each}
  </ul>
</nav>

{@render children()}

<script>
  const { children } = $props();
  const routes = import.meta.glob('./**/*.md');

  const postLinks = Object.keys(routes)
    .filter((route) => route.includes('./posts'))
    .map((route = '') => route.substr(1).replace('/+page.md', ''));
  console.log('##', postLinks);
</script>

# home

<a href="/">Home</a>

# all posts:

<ul>
  {#each postLinks as post}
    <li>
      <a href={post}>{post.replace('/posts/', '')}</a>
    </li>
  {/each}
</ul>

{@render children()}

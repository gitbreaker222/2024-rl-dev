<script>
  let { data } = $props();
  const { Content } = data;
  const { slug } = data.meta;
  console.log('###2', data.meta.slug);
</script>

This is routes/posts/[slug]/+page
<br />
Rendering routes/posts/{slug}.md

<Content></Content>

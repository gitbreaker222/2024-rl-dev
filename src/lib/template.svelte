<script>
  let { data, children, date, isPublic = true } = $props();
  console.log('#3', isPublic);
</script>

{new Date(date).toLocaleDateString()}

<br />

{#if isPublic}
  {@render children?.()}
{:else if data.NODE_ENV === 'development' && !isPublic}
  <div><em>(Development preview / Unpublished content)</em></div>
  {@render children?.()}
{:else}
  (Not yet published)
{/if}

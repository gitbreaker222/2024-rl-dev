<script>
  import { Alert, Button } from "flowbite-svelte";
  let showAlert = $state(false);

  const toggleAlert = () => {
    showAlert = !showAlert;
  };
</script>

<Button
  color="green"
  onclick={toggleAlert}>Toggle Alert</Button
>

<div class="p-8">
  {#if showAlert}
    <Alert>
      <span class="font-medium">Info alert!</span>
      Change a few things up and try submitting again.
    </Alert>
  {/if}
</div>

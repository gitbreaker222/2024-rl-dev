<script>
  import { Alert, Button } from "flowbite-svelte";
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarButton,
    SidebarBrand,
    uiHelpers,
    CloseButton,
  } from "flowbite-svelte";
  import {
    ChartOutline,
    GridSolid,
    MailBoxSolid,
    UserSolid,
  } from "flowbite-svelte-icons";

  let { url = {} } = $props();

  //Sidebar
  let activeUrl = $state(url.pathname);
  const sidebarUi = uiHelpers();
  let isDemoOpen = $state(false);
  $effect(() => {
    isDemoOpen = sidebarUi.isOpen;
    activeUrl = url.pathname;
  });
  const closeDemoSidebar = sidebarUi.close;
  const site = {
    name: "RL-Dev Admin UI",
    href: "/admin",
    img: "/favicon.svg",
  };
  const imgClass = "h-6 w-6";
  const spanClass = "flex-1 ms-3 whitespace-nowrap";

  //Toggler
  let showAlert = $state(false);
  const toggleAlert = () => {
    showAlert = !showAlert;
  };
</script>

<header class="relative p-2">
  <SidebarButton
    onclick={sidebarUi.toggle}
    class="mb-2"
  />
  <Sidebar
    {activeUrl}
    backdrop={false}
    isOpen={isDemoOpen}
    closeSidebar={closeDemoSidebar}
    params={{ x: -50, duration: 50 }}
    class="z-50 h-full"
    position="absolute"
    activeClass="p-2"
    nonActiveClass="p-2"
  >
    <CloseButton
      onclick={closeDemoSidebar}
      color="gray"
      class="absolute top-3 right-1 p-2 md:hidden"
    />
    <SidebarGroup>
      <SidebarBrand
        {site}
        {imgClass}
      />
      <SidebarItem
        label="Home"
        href="/"
      >
        {#snippet icon()}
          <UserSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
      <SidebarItem
        label="Dashboard"
        href="/"
      >
        {#snippet icon()}
          <ChartOutline
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
      <SidebarItem
        label="Kanban"
        {spanClass}
        href="/"
      >
        {#snippet icon()}
          <GridSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        {#snippet subtext()}
          <span
            class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        {/snippet}
      </SidebarItem>
      <SidebarItem
        label="Inbox"
        {spanClass}
        href="/"
      >
        {#snippet icon()}
          <MailBoxSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        {#snippet subtext()}
          <span
            class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium"
            >3</span
          >
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </Sidebar>
</header>

<main class="overflow-auto p-4 md:ml-64">
  <h1>This is a test site for flowbite components</h1>

  <a href="https://flowbite-svelte.com/">
    <img
      src="https://flowbite-svelte.com/images/gallery-dark.png"
      alt=""
    />
  </a>

  <hr class="my-4" />

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
</main>

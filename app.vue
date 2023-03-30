<template>
  <NavSmall />
  <div class="min-h-screen bg-purple-100 bg-opacity-70">
    <Navbar/>
    <div>
      <NuxtLink to="/">Homepage</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/integration">Integration</NuxtLink>
    </div>
    <AppFooter/>

    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>

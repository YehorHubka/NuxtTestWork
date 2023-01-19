<template>
  <div class="navbar">
    <Logo />
    <Navigation />
  </div>
</template>

<script>
  import {Logo, Navigation} from "~/.nuxt/components";
  export default {
    components: {Logo, Navigation}
  }
</script>

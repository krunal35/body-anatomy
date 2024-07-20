<template>
  <div>
    <!-- Main navigation and footer are displayed only if the current route is not a special page -->
        <!-- The main content of the page is displayed here -->
        <router-view></router-view>
    <!-- For special pages, only the main content is displayed without the main navigation and footer -->
  </div>
</template>

<script>

export default {
  name: "App",


};
</script>

<style></style>

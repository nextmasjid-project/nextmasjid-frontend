<template>
  <div class="nextMasjid">
    <!--  SVG Icons  -->
    <svg-container />

    <!--  Main Header  -->
    <main-header />

    <!-- Navigation   -->
    <navigation />

    <!-- Main Content -->
    <main :dir="$t('direction')"><Nuxt /></main>

    <!-- Main Footer -->
    <main-footer />
  </div>
</template>

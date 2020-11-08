<template>
  <div class="nextMasjid">
    <!--  SVG Icons  -->
    <app-svg-container />

    <!--  Main Header  -->
    <app-header />

    <!-- Main Content -->
    <main :dir="$t('direction')"><Nuxt /></main>

    <!-- Main Footer -->
<!--    <app-footer />-->
  </div>
</template>

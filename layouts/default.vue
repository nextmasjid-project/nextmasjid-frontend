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

<!--    &lt;!&ndash; Main Footer &ndash;&gt;-->
<!--    <main-footer />-->
  </div>
</template>

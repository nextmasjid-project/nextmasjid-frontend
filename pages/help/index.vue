<template>
  <div class="help">
    <!-- Sub Hero -->
    <div class="help-sub-hero">
      <sub-hero
          background-image="http://placehold.it/1920x768"
          :title="$t('pages.help.subHero.title')"
          :text="$t('pages.help.subHero.description')"/>
    </div>

    <!-- Top Cards -->
    <div class="help-top">
      <div class="help-top__list">
        <div class="help-top__item" v-for="card in $t('pages.help.topTiles')">
          <card :title="card.title" :body="card.body" />
        </div>
      </div>
    </div>

    <!-- Accordion -->
    <div class="help-accordion">
      <h2 class="help-accordion__heading">{{ $t('pages.help.accordion.title') }}</h2>
      <accordion v-for="(item, index) in  $t('pages.help.accordion.list')" :key="`item-${index}`">
        <template slot="head" slot-scope="props">
          <h4 class="help-accordion__title">{{ item.title }}</h4>
          <icon class="help-accordion__icon" size="small" :symbol="props.isOpen ? 'icon-minus' : 'icon-plus'" />
        </template>
        <template slot="body">
          <div class="help-accordion__body">
            <p>{{ item.text }}</p>
          </div>
        </template>
      </accordion>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    head() {
      return {
        title: this.$t('meta.help.title'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('meta.help.desc')
          }
        ]
      }
    }
  }
</script>

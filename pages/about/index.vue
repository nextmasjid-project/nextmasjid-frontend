<template>
  <div class="about">
    <!-- Sub Hero -->
    <div class="about-sub-hero">
      <sub-hero
        :background-image="require('@/assets/images/about-header.png')"
          title="تعرف على [المسجد القادم] "
          text="خارطة ذكية متاحة للجميع، للبحث عن أفضل مكان لبناء مسجد - في المملكة العربية السعودية"/>
    </div>

    <!-- About Top Cards -->
    <div class="about-top">
      <div class="about-top__list">
        <div class="about-top__item" v-for="(card, index) in $t('pages.about.topTiles')" :key="`card-${index}`">
          <card :icon="card.icon" :title="card.title" :body="card.body" />
        </div>
      </div>
    </div>

    <!-- About Tiles -->
    <div class="about-tiles">
      <tile
        v-for="(tile, index) in $t('pages.about.tiles')"
        :img="require(`@/assets/images/${tile.img}`)"
        :title="tile.title"
        :body="tile.body"
        :key="`tile-${index}`" />
    </div>

    <!--  About How To Help  -->
    <div class="about-how">
      <text-content :is-image="true" :is-bg-white="true" title="مؤشر المسجد القادم" :background-image="require('@/assets/images/nextmasjid-score.png')" body="مؤشر تقديري لتقييم المكان ومناسبته لبناء مسجد، يقدم تقييما من ٠ إلى ١٠٠ (حيث صفر عدم مناسبة المكان، و ١٠٠ مناسبة تامة). " />
    </div>

    <!-- About Benefits -->
     <div class="about-benefits">
      <h2 class="about-benefits__title">كيف يتم احتساب درجة الموقع المختار؟</h2>
      <div class="about-benefits__text">يعمل المسجد القادم بخوارزميات ذكية لتقييم كل موقع على الخريطة، بالاعتماد على البيانات المتاحة من الجهات الرسمية مثل وزارة الشؤون الإسلامية والدعوة والإرشاد والهيئة العامة للإحصاء. </div>
      <div class="about-benefits__wrapper">
        <card-benefits  title="٨٥٪" text="على البعد من أماكن المساجد الحالية حسب خريطة وزارة الشؤون الإسلامية والدعوة والإرشاد" :img="require('@/assets/images/distance.png')"></card-benefits>
        <card-benefits title="٥٪" text="الكثافة السكانية للمدينة أو المحافظة بناء على البيانات المتاحة، وقريبا على مستوى الحي" :img="require('@/assets/images/density.png')"></card-benefits>
        <card-benefits title="٥٪" text="القرب من مركز المدينة، حيث تزيد الحركة والتنقل" :img="require('@/assets/images/centre.png')"></card-benefits>
        <card-benefits title="٥٪" text="حجم المدينة، حيث أن المدن الأكبر سكانًا لها احتمالية أعلى في الحاجة لمساجد جديدة مع النمو " :img="require('@/assets/images/population.png')"></card-benefits>
      </div>
    </div>

    <!--  About Text  -->
    <div class="about-text">
      <text-content :is-color="true" title="" :body="$t('pages.about.bottom.description')" />
    </div>


  </div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: this.$t('meta.about.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.about.desc')
        }
      ]
    }
  }
}
</script>

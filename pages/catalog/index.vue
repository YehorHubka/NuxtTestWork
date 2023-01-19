<template>
  <div>
    <h1>Catalog page</h1>
    <div class="products-grid">
      <productItem
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :image="product.image"
        :description="product.description"
        :category="product.category"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script>
  import productItem from "~/components/productItem"
  export default {
    async fetch({store}) {
      if (store.getters['products/products'].length === 0) {
        await store.dispatch('products/fetch')
      }
    },
    computed: {
      products() {
        return this.$store.getters['products/products']
      }
    },
    components: {productItem}
  }
</script>

<template>
  <div>
    <h1>Catalog page</h1>
    <div class="product-sort">
      <div class="product-sort__title">Choose category:</div>
      <select class="product-sort__select" v-model="selected">
        <option value="All">All</option>
        <option
          v-for="(cat, idx) in sortedArrayOfCategories"
          :key="idx"
          :value="cat"
        >
          {{ cat }}
        </option>
      </select>
    </div>
    <div class="products-grid">
      <productItem
        v-for="product in sortedProducts"
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
    data() {
      return {
        selected: 'All',
        categories: null
      }
    },
    computed: {
      products() {
        return this.$store.getters['products/products']
      },
      sortedProducts() {
        return this.products.filter(item => {
          if (this.selected === 'All') {
            return item
          }
          return item.category === this.selected
        })
      },
      allCategories() {
        return this.products.map(item => item.category)
      },
      sortedArrayOfCategories() {
        return this.allCategories.filter((it, index) => index === this.allCategories.indexOf(it = it.trim()))
      },
    },
    components: {productItem}
  }
</script>

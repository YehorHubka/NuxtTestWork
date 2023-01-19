<template>
  <div>
    <nuxt-link to="/catalog" class="back-link">< Back to catalog</nuxt-link>
    <h1>{{ product.title }}</h1>
    <div class="product-cart">
      <div class="product-cart__image">
        <img :src="product.image" :alt="product.title">
      </div>
      <div class="product-cart__info">
        <div class="product-cart__category">
          Category: <b>{{ product.category }}</b>
        </div>
        <div class="product-cart__price">
          Price: <b>{{ product.price }}$</b>
        </div>
        <div class="product-cart__description">
          Description: {{ product.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      productId() {
        return parseInt(this.$route.params.id)
      },
      product() {
        return this.$store.getters['products/productsById'](this.productId)
      }
    },
  }
</script>

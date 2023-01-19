<template>
  <div class="product-item">
    <div class="product-item__image" @click="toProductCart(id)">
      <img :src="image" :alt="title">
    </div>
    <div class="product-item__title" @click="toProductCart(id)">
      {{ title }}
    </div>
    <div class="product-item__price">
      {{ price }}$
    </div>
    <div class="product-item__text">
      <button
        class="product-item__text-opener"
        @click="isOpen = !isOpen"
        :class="isOpen ? 'active' : ''"
      >
        {{ isOpen ? 'Close' : 'Show' }} description
      </button>
      <div class="product-item__text-wrap" v-if="isOpen">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: Number,
      title: String,
      price: Number,
      category: String,
      image: String,
      description: String
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toProductCart(id) {
        this.$router.push('/catalog/' + id)
      }
    },
  }
</script>

<style scoped>

</style>

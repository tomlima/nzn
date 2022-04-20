<template>
  <div class="c-card l-flex">
    <div class="c-card__thumb">
      <img :src="$getImage(post.attributes.thumbnail)" alt="" />
    </div>
    <div class="c-card__content">
      <a href="javascript:void(0)" class="c-card__category">
        {{ post.attributes.categoria.data.attributes.nome }}
      </a>
      <h2>{{ post.attributes.titulo }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCardMinimal',
  props: {
    /**
     * The post object.
     */
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.c-card {
  column-gap: 20px;
  border-radius: $border-r;
  &:hover .c-card__thumb img {
    transform: scale(1.1);
  }
  h2 {
    font-size: 1rem;
    margin: 1.5rem 0;
  }

  &__content {
    flex-shrink: 2;
  }

  &__thumb {
    height: 150px;
    width: 250px;
    display: block;
    position: relative;
    border-radius: $border-r;
    overflow: hidden;
    img {
      transition: all 1s ease;
      vertical-align: middle;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__category {
    background-color: $primary-color;
    padding: 0.5rem 1rem;
    font-size: 0.6rem;
    font-weight: 700;
    color: #fff;
    border-radius: $border-r;
  }
  &__infos {
    margin-top: 1.5rem;
    column-gap: 50px;
    span,
    i {
      color: $text-color;
    }
  }
  &__readmore {
    color: $primary-color;
    font-weight: 700;
    column-gap: 10px;
    margin-top: 1.5rem;
    i {
      margin-top: 1.5px;
    }
  }
}
</style>

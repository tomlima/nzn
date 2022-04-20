<template>
  <div class="c-card">
    <div class="c-card__thumb">
      <img :src="$getImage(post.attributes.thumbnail)" alt="" />
      <a href="#" class="c-card__category">
        {{ post.attributes.categoria.data.attributes.nome }}
      </a>
    </div>
    <div class="c-card__infos l-flex">
      <div>
        <i class="bx bx-calendar"></i>
        <span>{{ post.attributes.data_publicacao }}</span>
      </div>

      <div>
        <i class="bx bx-time"></i>
        <span>4 minutos de leitura</span>
      </div>
    </div>
    <h2>{{ post.attributes.titulo }}</h2>
    <p>
      {{ post.attributes.gravata }}
    </p>
    <a class="c-card__readmore l-flex u-align-items-center" href="#"
      >Leia mais <i class="bx bx-chevron-right"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: 'PostCardFull',
  props: {
    post: {
      /**
       * The post object.
       */
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.c-card {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 2rem;
  border-radius: $border-r;
  &:hover .c-card__thumb img {
    transform: scale(1.1);
  }
  h2 {
    margin: 1.5rem 0;
  }
  @media screen and (min-width: $lg-breakpoint) {
    padding: 3rem;
  }

  &__thumb {
    height: 250px;
    display: block;
    position: relative;
    border-radius: $border-r;
    overflow: hidden;
    @media screen and (min-width: $lg-breakpoint) {
      height: 300px;
    }
    img {
      transition: all 1s ease;
      vertical-align: middle;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__category {
    z-index: 5000;
    top: 5%;
    right: 5%;
    position: absolute;
    background-color: $primary-color;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
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

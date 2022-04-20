<template>
  <section class="u-section" v-if="ambassadors.length > 0" :id="id">
    <div class="l-container">
      <div class="c-wrapper">
        <h2 class="u-section__title">Embaixadores do Agro</h2>
        <div>
          <div class="c-carousel">
            <div class="c-carousel__container">
              <div
                class="c-carousel__slide"
                :data-slideIndex="index"
                v-for="(ambassador, index) in ambassadors"
                :key="index"
              >
                <div class="c-card">
                  <div
                    class="c-card__inner  l-flex u-align-items-center u-justify-items-center"
                  >
                    <div class="c-card__thumb">
                      <img
                        :src="$getImage(ambassador.attributes.thumbnail)"
                        alt=""
                      />
                    </div>
                    <h4>
                      {{ ambassador.attributes.nome }}
                    </h4>
                    <p>
                      {{ ambassador.attributes.gravata }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              @click="navigate('backward')"
              id="back-button"
              class="o-arrow o-arrow--left"
            >
              <i class="bx bx-chevron-left"></i>
            </div>
            <div @click="navigate('forward')" class="o-arrow o-arrow--right">
              <i class="bx bx-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <img class="o-shape" src="/shape2.png" alt="Shape" data-not-lazy />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CarouselTestimonial',
  props: {
    /**
     * Unique identifier to this component
     */
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      ambassadors: []
    }
  },
  computed: {
    ...mapGetters({
      cacheTiming: 'cache/getCacheTiming'
    })
  },
  methods: {
    /**
     * Carousel slides to the left when clicking on the arrows.
     */
    navigate(position) {
      try {
        const carouselEl = document.getElementById(this.id)
        const slideContainerEl = carouselEl.querySelector(
          '.c-carousel__container'
        )
        const slideEl = carouselEl.querySelector('.c-carousel__slide')
        let slideWidth = slideEl.offsetWidth

        slideContainerEl.scrollLeft = this.getNewScrollPosition(
          position,
          slideContainerEl,
          slideWidth
        )
      } catch (error) {
        this.$saveError({
          website: window.location.href,
          component: this._name,
          err: error.message
        })
      }
    },
    /**
     * Get a new scrool position to navigate function
     */
    getNewScrollPosition(arg, slideContainerEl, slideWidth) {
      try {
        const maxScrollLeft = slideContainerEl.scrollWidth - slideWidth * 2
        if (arg === 'forward') {
          const x = slideContainerEl.scrollLeft + slideWidth
          return x <= maxScrollLeft ? x : 0
        } else {
          const x = slideContainerEl.scrollLeft - slideWidth
          return x >= 0 ? x : maxScrollLeft
        }
      } catch (error) {
        this.$saveError({
          website: window.location.href,
          component: this._name,
          err: error.message
        })
      }
    }
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - this.cacheTiming) {
      this.$fetch()
    }
  },
  /**
   * Get all posts
   */
  async fetch() {
    await this.$axios(`${this.$config.strapiAPI}embaixadores?populate=*`)
      .then(res => (this.ambassadors = res.data.data))
      .catch(error => {
        this.$saveError({
          website: window.location.href,
          component: this._name,
          err: error.message
        })
      })
  }
}
</script>

<style lang="scss" scoped>
.c-wrapper {
  border-radius: $border-r;
  background-image: url('/soy.webp'),
    linear-gradient(15deg, #f6f4ec, #f6f4ec, #f6f4ec);
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat, no-repeat;
  z-index: 1;
  padding: 50px;
}

.c-carousel {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  &__container {
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__slide {
    min-width: 100%;
    @media screen and (min-width: $lg-breakpoint) {
      min-width: 50%;
      scroll-snap-align: center;
      position: relative;
    }
  }
}

.c-card {
  width: 100%;
  &__inner {
    margin: 0 15px 0 0;
    flex-direction: column;
    row-gap: 0.5rem;
    height: 300px;
    border-radius: $border-r;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #fff;
    padding: 2rem 4rem;
    h4 {
      display: block;
      margin: 0.5rem 0;
    }
    p {
      font-size: 0.9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    @media screen and (min-width: $lg-breakpoint) {
      margin: 15px;
    }
  }
  &__thumb {
    display: block;
    overflow: hidden;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px,
      rgb(0 0 0 / 8%) 0px 0px 0px 1px;
    img {
      object-fit: cover;
    }
  }
}

.o-arrow {
  display: none;
  @media screen and (min-width: $lg-breakpoint) {
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    top: -25%;
    border: 2px solid $primary-color;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i {
      color: $primary-color;
      font-size: 1.5rem;
    }
    &.o-arrow--right {
      right: 1%;
    }
    &.o-arrow--left {
      right: 5%;
    }
  }
}

.o-shape {
  position: absolute;
  top: 0;
  left: -50px;
  transform: rotate(90deg);
  z-index: -10;
}
</style>

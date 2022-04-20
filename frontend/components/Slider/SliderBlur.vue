<template>
  <section class="c-slider u-section" :id="id">
    <div class="l-container">
      <div class="u-relative">
        <div class="c-slider__arrows l-flex">
          <div
            class="o-arrow__left l-flex u-align-items-center u-justify-content-center"
            @click="moveSlider('left')"
          >
            <i class="bx bx-chevron-left"></i>
          </div>
          <div
            class="o-arrow__right l-flex u-align-items-center u-justify-content-center"
            @click="moveSlider('right')"
          >
            <i class="bx bx-chevron-right is-right"></i>
          </div>
        </div>
        <a
          href="https://google.com.br"
          target="_blank"
          class="c-slider__item"
          :class="index == 0 ? 'is-active' : ''"
          v-for="(slider, index) in sliders"
          :data-slide="index"
          :key="index"
        >
          <div class="c-slider__card">
            <span class="o-category">
              Notícias do campo
            </span>
            <h2>{{ slider.title }}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              dolor sit amet consectetur....
            </p>
            <span class="o-time">Tempo de leitura: 3 min</span>
          </div>
          <div
            class="c-slider__thumbnail"
            :style="`background-image:url(${slider.image})`"
          ></div>
        </a>
        <img class="o-shape" src="/shape2.png" alt="Shape" data-not-lazy />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    /**
     * Unique identifier to this component
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Autoplay carousel
     * @values true,false
     */
    autoplay: {
      type: Boolean,
      default: false
    },
    /**
     * Speed of causel in miliseconds
     */
    speed: {
      type: Number,
      default: 3500
    }
  },
  data() {
    return {
      sliders: [
        {
          title: 'Efeitos do conflito Rússia-Ucrânia na cotação do milho',
          image:
            'https://ninetheme.com/themes/agro/wp-content/uploads/2019/02/4-6-820x759.jpg'
        },
        {
          title: 'Trator movido a biometano chega ao Brasil',
          image:
            'https://ninetheme.com/themes/agro/wp-content/uploads/2019/02/2.jpg'
        },
        {
          title: 'Notícia 3',
          image:
            'https://ninetheme.com/themes/agro/wp-content/uploads/2019/02/3.jpg'
        }
      ]
    }
  },
  mounted() {
    this.autoplay ? this.playSlider() : false
  },
  methods: {
    /**
     * Slider loop
     */
    playSlider() {
      try {
        const nextButton = document
          .getElementById(this.id)
          .querySelector('.o-arrow__right')

        const play = () => {
          nextButton.click()
          setTimeout(play, this.speed)
        }
        play()
      } catch (error) {
        this.$saveError(this.getErrorObject(error))
      }
    },
    /**
     * Move slider to a certain direction
     */
    moveSlider(direction) {
      try {
        const slider = document.getElementById(this.id)
        const activeSlider = slider
          .querySelector('.c-slider__item.is-active')
          .getAttribute('data-slide')
        this.hideAllSlides(slider)
        if (direction == 'right') {
          this.showSlide(parseInt(activeSlider) + 1, slider)
          return
        }
        this.showSlide(parseInt(activeSlider) - 1, slider)
      } catch (error) {
        this.$saveError(this.getErrorObject(error))
      }
    },
    /**
     * Show the active slider
     */
    showSlide(slideData, slider) {
      try {
        if (this.sliders.length - 1 >= slideData && Math.sign(slideData) == 1) {
          var slide = slider.querySelector(`[data-slide="${slideData}"]`)
        } else {
          var slide = slider.querySelector(`[data-slide="0"]`)
        }
        slide.classList.add('is-active')
      } catch (err) {
        this.$saveError(this.getErrorObject(error))
      }
    },
    /**
     * Hide all sliders cards
     */
    hideAllSlides(slider) {
      try {
        const sliders = slider.querySelectorAll('.c-slider__item')
        Array.from(sliders).forEach((slide, index) => {
          slide.classList.remove('is-active')
        })
      } catch (error) {
        this.$saveError(this.getErrorObject(error))
      }
    },
    /**
     * Error object
     */
    getErrorObject(error) {
      return {
        website: window.location.href,
        component: this._name,
        err: error.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-slider {
  &__item {
    display: none;
    &.is-active {
      opacity: 1;
      animation: fadeIn 1000ms linear forwards;
      display: flex;
    }
  }
  &__thumbnail {
    display: none;
  }
  &__card {
    height: auto;
    background-color: #fff;
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    border-radius: $border-r;
    h2 {
      margin-bottom: 0.5rem;
    }
    span.o-time {
      margin-top: 2rem;
      color: $primary-color;
      font-weight: 700;
      display: block;
    }
    span.o-category {
      color: #fff;
      background-color: $secondary-color;
      padding: 0.5rem;
      margin-bottom: 2rem;
      display: block;
      width: 50%;
      text-align: center;
      border-radius: $border-r;
      font-weight: 700;
      font-size: 0.8rem;
    }
  }
  &__arrows {
    bottom: -25px;
    left: 70%;
    position: absolute;
    column-gap: 20px;
    & > div {
      background-color: #fff;
      width: 40px;
      height: 40px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      border-radius: 100%;
      cursor: pointer;
      z-index: 100;
      i {
        font-size: 1.5rem;
        color: $primary-color;
        font-weight: 700;
      }
    }
  }
  .o-shape {
    position: absolute;
    width: 150px;
    top: 0;
    right: -100px;
    transform: rotate(90deg);
    z-index: -10;
  }
  @media screen and (min-width: $lg-breakpoint) {
    margin-top: 5rem;
    &__item {
      justify-content: flex-end;
      display: none;
    }
    &__thumbnail {
      display: block;
      height: 450px;
      width: 60.666667%;
      border-radius: 10px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    &__card {
      position: absolute;
      width: 50%;
      height: 420px;
      top: calc(50% - 210px);
      left: 0;
      background-color: rgb(255 255 255 / 0.5);
      padding: 4rem 8rem 4rem 4rem;
      backdrop-filter: blur(6px);
      span.o-category {
        width: 40%;
      }
    }
    &__arrows {
      top: 0;
      left: 0;
      position: absolute;
    }
  }
}
</style>

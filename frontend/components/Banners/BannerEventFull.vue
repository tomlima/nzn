<template>
  <section class="c-banner l-flex">
    <div class="l-container">
      <div
        class="c-banner__wrapper l-flex u-align-items-center justify-items-center"
      >
        <div class="c-banner__content">
          <img src="/leaf.webp" alt="Folha" data-not-lazy />
          <h2>O maior e mais importante evento de agro do Brasil.</h2>
          <a href="#">INSCREVA-SE GRATUITAMENTE</a>
        </div>
        <div class="c-banner__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ratione
            porro assumenda consectetur obcaecati fuga, maxime quod repudiandae
            itaque quis veritatis, vel vitae aspernatur sint magnam accusamus.
            Fuga, nisi enim!
          </p>
          <ul>
            <li>
              <a href="#">
                <i class="bx bx-leaf"></i> Lorem ipsum dolor sit amet
              </a>
            </li>
            <li>
              <a href="#"
                ><i class="bx bxs-tree"></i> Lorem ipsum dolor sit amet</a
              >
            </li>
            <li>
              <a href="#">
                <i class="bx bx-lemon"></i>Lorem ipsum dolor sit amet</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerEventFull'
}
</script>

<style lang="scss" scoped>
.c-banner {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: linear-gradient(rgba(19, 61, 21, 0.904), rgba(7, 26, 5, 0.637)),
    url('/banner.webp');
  min-height: 300px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  &__wrapper {
    column-gap: 100px;
    flex-wrap: wrap;
  }
  &__content {
    h2 {
      font-size: 2rem;
      color: #fff;
    }
    a {
      text-align: center;
      background-color: $secondary-color;
      padding: 15px;
      color: #fff;
      border-radius: 8px;
      margin-top: 1.5rem;
      display: block;
      font-weight: 700;
      width: auto;
    }
  }
  &__description {
    max-width: 100%;
    p {
      color: #fff;
      margin: 1.5rem 0;
    }
    ul {
      margin-top: 1.5rem;
      li {
        margin-bottom: 1rem;
        a {
          display: flex;
          align-items: center;
          column-gap: 0.5rem;
          color: #fff;
          i {
            color: $secondary-color;
          }
        }
      }
    }
  }
  @media screen and (min-width: $lg-breakpoint) {
    min-height: 500px;
    &__wrapper {
      flex-wrap: nowrap;
    }
    &__content {
      h2 {
        font-size: 3rem;
      }
    }
    &__description {
      max-width: 50%;
      p {
        margin: 0;
      }
    }
  }
}
</style>

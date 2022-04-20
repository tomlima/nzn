<template>
  <footer class="c-footer">
    <div class="c-footer__content l-flex u-align-items-center">
      <div
        class="l-container c-footer__wrapper l-flex u-align-items-center u-justify-content-center"
      >
        <img
          data-not-lazy
          src="https://summitagro.estadao.com.br/wp-content/uploads/2020/08/logo-novo_branco.png"
          alt="Logo summitagro"
        />
        <div
          class="c-footer__social  l-flex u-align-items-center u-justify-content-center"
        >
          <a href="#">
            <i class="bx bxl-facebook-square"></i>
          </a>
          <a href="#">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
        <span>summit@estadao.com</span>
      </div>
      <div class="c-footer__bg"></div>
    </div>
    <div class="c-footer__copy">
      <div class="l-container">
        <span>
          Estadão Blue Studio | Summit Agronegócio – Todos os direitos
          reservados</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
.c-footer {
  margin: 6rem 0 0 0;
  &__bg {
    background-image: url('/footer-bg.webp');
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.02;
    background-position: center 110%;
    background-repeat: no-repeat;
  }
  &__content {
    position: relative;
    height: 400px;
    background-color: #334b35;
    span {
      color: #fff;
    }
  }
  &__wrapper {
    width: 100%;
    flex-direction: column;
  }
  &__social {
    margin: 1.5rem 0;
    column-gap: 30px;
    i {
      font-size: 2rem;
      color: #fff;
    }
  }
  &__copy {
    background-color: $primary-color;
    padding: 2rem 0;
    text-align: center;
    color: #fff;
  }
}
</style>

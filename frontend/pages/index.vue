<template>
  <div>
    <TheHeader />
    <main class="l-main" id="main">
      <SliderBlur id="slider-news" :autoplay="true" :speed="3500" />
      <BannerEventFull class="u-section" />
      <PostGrid />
      <CarouselTestimonial id="carousel-testimonial" />
    </main>
    <TheFooter />
  </div>
</template>

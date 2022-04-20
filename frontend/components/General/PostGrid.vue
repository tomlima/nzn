<template>
  <section class="u-section" v-if="posts.length > 0">
    <div class="l-container">
      <div class="c-grid l-grid">
        <div class="c-posts l-flex">
          <PostCardFull
            v-for="(post, index) in posts"
            :key="index"
            :post="post"
          />
        </div>
        <div class="c-posts l-flex">
          <PostCardMinimal
            v-for="(post, index) in posts"
            :key="index"
            :post="post"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PostGrid',
  data() {
    return {
      posts: []
    }
  },
  computed: {
    ...mapGetters({
      cacheTiming: 'cache/getCacheTiming'
    })
  },
  /**
   * Cache fetch request for 30seconds.
   */
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - this.cacheTiming) {
      this.$fetch()
    }
  },
  /**
   * Get all posts
   */
  async fetch() {
    await this.$axios(`${this.$config.strapiAPI}posts?populate=*`)
      .then(res => (this.posts = res.data.data))
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
.c-grid {
  grid-template-columns: 1fr;
  row-gap: 3rem;
  grid-auto-flow: dense;
  @media screen and (min-width: $lg-breakpoint) {
    grid-template-columns: 1.5fr 1fr;
    column-gap: 100px;
  }
}
.c-posts {
  flex-wrap: wrap;
  row-gap: 3rem;
  flex-direction: column;
}
</style>

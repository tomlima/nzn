export default ({ app }, inject) => {
  const saveError = error => {
    app.$axios.$post(app.$config.localAPI, error)
  }
  inject('saveError', saveError)
}


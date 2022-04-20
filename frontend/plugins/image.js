export default ({app}, inject) => {
  const getImage = thumbnail => {
    let baseUrl;
    process.env.NODE_ENV == 'production' ? baseUrl = 'http://localhost:1337' : baseUrl = app.$config.ImagePathUlr
    return baseUrl + thumbnail.data.attributes.url
  }
  inject('getImage', getImage)
}


class Config {
  getWithDefault(key, defaultValue) {
    if (!localStorage[`config:${key}`]) {
      localStorage[`config:${key}`] = defaultValue
    }
    return localStorage[`config:${key}`]
  }

  get apiBase() {
    return this.getWithDefault('apiBase', 'https://z6ic8f3hn0.execute-api.ap-southeast-2.amazonaws.com/prod')
  }

  get loginEndpoint() {
    const endpoint = this.getWithDefault('loginEndpoint', 'https://login-tom-a2fad0-infrastructure.auth.ap-southeast-2.amazoncognito.com/login?client_id=9sakc7oq54st06evu30rphjut&response_type=token&scope=doqutore/application')
    return endpoint + `&redirect_uri=${location.protocol}//${location.host}/login`
  }
}

export default new Config()
class Config {
  getWithDefault(key, defaultValue) {
    if (!localStorage[`config:${key}`]) {
      localStorage[`config:${key}`] = defaultValue
    }
    return localStorage[`config:${key}`]
  }

  get loginEndpoint() {
    const endpoint = this.getWithDefault('loginEndpoint', 'https://login-tom-a2fad0-infrastructure.auth.ap-southeast-2.amazoncognito.com/login?client_id=9sakc7oq54st06evu30rphjut&response_type=token&scope=doqutore/application')
    return endpoint + `&redirect_uri=${location.protocol}//${location.host}/login`
  }

  get token() {
    if (!localStorage['config:token'] || (localStorage['config:tokenExpires'] && 
      localStorage['config:tokenExpires'] < Math.floor(Date.now() / 1000))) {
      return null
    }
    return localStorage['config:token']
  }

  setToken(val, expires) {
    localStorage['config:token'] = val
    localStorage['config:tokenExpires'] = Math.floor(Date.now() / 1000) + expires
  }
}

export default new Config()

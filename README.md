# [Doqutor Frontend](https://doqutor.github.io/doqutor-frontend/)

> Doqutore is built with Vue as the javascript framework, Vuetify as the component library and Nuxt as the server-side rendering framework. It uses the exposed HTTPS endpoints from AWS Lambdas functions for the API calls and also uses Github Actions for CI/CD deployments to AWS S3 buckets.

[Demo UI](https://doqutor.github.io/)

## Manual deployment

``` bash
# install dependencies
$ yarn

# LOCALHOST: serve with hot reload at localhost:3000
$ yarn dev

# GENERATE: generate static project in /dist directory
$ yarn generate
```

## Automatic deployment with CI/CD Github Actions
- To deploy to the 'dev' account on AWS, just push to the branch 'dev'

- To deploy to the 'preprod' account on AWS, just push to the branch 'preprod'

- To deploy to the 'prod' account on AWS, just push to the branch 'prod'

> Note: the code for the Githib Actions can be found in the .github/workflows directory

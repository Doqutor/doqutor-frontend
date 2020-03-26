module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'vuetify'
  ],
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'vuetify/no-deprecated-classes': 'warn',
    'vuetify/grid-unknown-attributes': 'warn',
    'vuetify/no-legacy-grid': 'warn',

    'vue/html-quotes': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/attributes-order': ['warn', {
      'order': [
        'CONDITIONALS',
        'LIST_RENDERING',
        'DEFINITION',
        'EVENTS',
        'TWO_WAY_BINDING',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'CONTENT'
      ]
    }],

    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': ['warn', {
      'anonymous': 'ignore',
      'named': 'ignore',
      'asyncArrow': 'ignore'
    }],
    'comma-dangle': 'off',
    'no-console': 'off',
    'no-trailing-spaces': 'off',
    'spaced-comment': 'off',
    'handle-callback-err': 'off',
    'indent': ['warn', 2, { 'ignoreComments': true }],
    'eol-last': 'warn',
    'no-multiple-empty-lines': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

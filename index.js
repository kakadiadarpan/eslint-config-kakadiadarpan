module.exports = {
  "extends": ["airbnb", "plugin:jsx-control-statements/recommended"],
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "jsx-control-statements"
  ],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "config/webpack.config.js"
      }
    }
  },
  "rules":{
    // indentation
    "indent": [ 2, 2 ],
    // spacing
    "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
    // strings
    "quotes": [ 2, "double", "avoid-escape" ],
    // code arrangement matters
    "no-use-before-define": [ 2, { "functions": false } ],
    // make it meaningful
    "prefer-const": 1,
    // keep it simple
    "complexity": [ 1, 10 ],
    "comma-dangle": [2, "only-multiline"],
    "no-unused-vars": [2, { "args": "none" }],
    "no-console": [1, { "allow": ["warn", "error"] }],
    "no-restricted-syntax": [2, "WithStatement"],

    //import
    "import/prefer-default-export":[1],
    "import/no-extraneous-dependencies": [2, {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],

    // react
    "react/jsx-curly-spacing": [ 2, "always" ],
    "react/jsx-indent": [ 2, 2 ],
    "react/jsx-no-undef": [2, { "allowGlobals": true }],
    "react/jsx-boolean-value": [1, "always"],
    "react/forbid-prop-types":[1]
  },
  "globals": {
    "document": true,
    "window": true,
    "navigator": true
  }
}
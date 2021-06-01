module.exports = {
    extends: [
        'stylelint-config-recommended', 
        'stylelint-config-sass-guidelines', 
        'stylelint-order'
    ],
    rules: {
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": null,
        "block-no-empty": null,
        "unit-allowed-list": ["em", "rem", "s"]
    },
    ignoreFiles: ['**/*.js', '**/*.ts', '**/*.tsx']
}
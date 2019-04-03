module.exports = {
    plugins: [
        require('autoprefixer')
    ],
    "plugins": {
        "postcss-pxtorem": {
            "rootValue": 32,
            "propList": ["*"]
        }
    }
}
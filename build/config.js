
var path = require('path')

exports.prod = process.env.NODE_ENV == 'production'

exports.from = path.join(__dirname, '../app')

exports.dest = path.join(process.cwd() + '/dist')


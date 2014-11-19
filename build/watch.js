
var path = require('path')
var gaze = require('gaze')
var config = require('./config')

var srcs = {
  js: [
    config.from + '/**/*.js',
    config.from + '/**/*.ract',
    '!' + config.from + '/node_modules/**/*.js',
    '!' + config.from + '/node_modules/**/*.ract'
  ],
  scss: [
    config.from + '/**/*.scss',
    '!' + config.from + '/node_modules/**/*.scss'
  ],
  html: [
    config.from + '/index.html',
    '!' + config.from + '/node_modules/**/*.html'
  ]
}

module.exports = function(){
  gaze(srcs.js, function(){
    this.on('all', require('./scripts'))
  })
  gaze(srcs.scss, function(){
    this.on('all', require('./styles'))
  })
  gaze(srcs.html, function(){
    this.on('all', require('./html'))
  })
}


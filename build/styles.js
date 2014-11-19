
var fs = require('fs')
var sass = require('node-sass')

var config = require('./config')

module.exports = function(){
  var stats = {}
  sass.render({
    file: config.from + '/index.scss',
    sourceComments: config.prod ? 'none' : 'map',
    success: write,
    error: next
  })
}

function write(css, map){
  if (map) css = inlinemap(css, map)
  fs.writeFile(config.dest + '/index.css', css, next)
}

function inlinemap(css, map){
  map = JSON.parse(map)
  map.sourcesContent = map.sources.map(read)
  map = new Buffer(JSON.stringify(map)).toString('base64')
  return css.replace(
    /\/\*# sourceMappingURL=.*\*\//,
    "/*# sourceMappingURL=data:application/json;base64," +
    map + "*/"
  )
}

function read(source){ return fs.readFileSync(source, { encoding: 'utf8' }) }
function next(err){
  if (!err) return
  if ('error' != err.__proto__.constructor.name.toLowerCase())
    err = Error(err)
  console.error(err.message)
}


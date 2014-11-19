
var Ractive = require('ractive/ractive.runtime')
var event = require('lib/event-hub')

module.exports = Ractive.extend({
  isolated: true,
  template: require('./index.ract').template,
  onrender: onrender
})

function onrender(){
  this.on('keydown', onenter)
}

function onenter(e){
  if (13 != e.original.keyCode) return
  event.emit('todo:add', this.get('value'))
  this.set('value', '')
}
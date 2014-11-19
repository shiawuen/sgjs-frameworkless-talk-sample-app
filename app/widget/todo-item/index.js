
var Ractive = require('ractive/ractive.runtime')
var event = require('lib/event-hub')

module.exports = Ractive.extend({
  isolated: true,
  template: require('./index.ract').template,
  computed: {
    completedCls: completedCls,
    editingCls: editingCls
  },
  onrender: onrender,
})

function onrender(){
  this.on('stopedit', stopedit)
  this.on('doedit', doedit)
  this.on('remove', remove)
  this.on('change', function(changes){
    if ('undefined' == typeof changes.completed) return
    event.emit('todo:save')
  })
}

function remove(){
  event.emit('todo:remove', this.get('index'))
}

function doedit(){
  this.set('editing', true)
}

function stopedit(e){
  if ('keydown' == e.original.type && 
      13 != e.original.keyCode) return

  this.set('editing', false)
}

function completedCls(){
  return this.get('completed') ? 'completed' : ''
}

function editingCls(){
  return this.get('editing') ? 'editing' : ''
}


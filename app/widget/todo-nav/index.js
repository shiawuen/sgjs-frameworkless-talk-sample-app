
var Ractive = require('ractive/ractive.runtime')

module.exports = Ractive.extend({
  isolated: true,
  template: require('./index.ract').template,
  computed: {
    count: count
  }
})

function count(){
  return this.get('items')
    .filter(function(d){ return !d.completed })
    .length
}
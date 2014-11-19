
var Ractive = require('ractive/ractive.runtime')

module.exports = Ractive.extend({
  el: 'main',
  isolated: true,
  template: require('./index.ract').template,
  components: {
    todoform: require('widget/todo-form'),
    todolist: require('widget/todo-list'),
    todonav: require('widget/todo-nav')
  }
})


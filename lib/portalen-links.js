'use strict'

var buildMyLinks = require('./build-my-links')
var envs = process.env

module.exports = function (options) {
  var seneca = this

  seneca.add('cmd:collect-links, type:user', collectMyLinks)

  return {
    name: envs.PORTALEN_LINKS_TAG || 'portalen-links'
  }
}

function collectMyLinks (args, callback) {
  var roles = args.roles
  var result = buildMyLinks(roles)

  callback(null, result)
}

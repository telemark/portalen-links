'use strict'

var makeUnique = require('tfk-unique-array')

function buildMyLinks (roles) {
  var myLinks = []

  roles.forEach(function (item) {
    myLinks = myLinks.concat(require('../data/' + item + '.json'))
  })

  return makeUnique(myLinks)
}

module.exports = buildMyLinks

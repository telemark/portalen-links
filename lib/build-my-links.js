'use strict'

var makeUnique = require('tfk-unique-array')
var isFile = require('is-file')

function buildMyLinks (roles) {
  var myLinks = []

  roles.forEach(function (item) {
    var jsonPath = '../data/' + item + '.json'
    var filePath = 'data/' + item + '.json'

    if (isFile(filePath)) {
      myLinks = myLinks.concat(require(jsonPath))
    }
  })

  return makeUnique(myLinks)
}

module.exports = buildMyLinks

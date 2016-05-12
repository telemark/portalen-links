'use strict'

var tap = require('tap')
var buildMyLinks = require('../lib/build-my-links')
var administrasjonen = require('../data/administrasjonen.json')
var skole = require('../data/skole.json')
var tannhelse = require('../data/tannhelse.json')
var tullebuff = []

tap.equal(JSON.stringify(administrasjonen), JSON.stringify(buildMyLinks(['administrasjonen'])), 'It returns administrasjonen correct')

tap.equal(JSON.stringify(skole), JSON.stringify(buildMyLinks(['skole'])), 'It returns skole correct')

tap.equal(JSON.stringify(tannhelse), JSON.stringify(buildMyLinks(['tannhelse'])), 'It returns tannhelse correct')

tap.equal(JSON.stringify(tullebuff), JSON.stringify(buildMyLinks(['tullebuff'])), 'It returns tullebuff correct')

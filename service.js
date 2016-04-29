'use strict'

var Seneca = require('seneca')
var Mesh = require('seneca-mesh')
var PortalenLinks = require('./lib/portalen-links')
var envs = process.env

var options = {
  seneca: {
    tag: envs.PORTALEN_LINKS_TAG || 'portalen-links'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'cmd:collect-links, type:user', model: 'consume'}
    ]
  },
  portalenLinks: {
    url: envs.PORTALEN_LINKS_URL || 'http://portalen.links.no'
  },
  isolated: {
    host: envs.PORTALEN_LINKS_HOST || 'localhost',
    port: envs.PORTALEN_LINKS_PORT || 8000
  }
}

var Service = Seneca(options.seneca)

if (envs.PORTALEN_LINKS_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(PortalenLinks, options.portalenLinks)

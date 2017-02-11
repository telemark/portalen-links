[![Build Status](https://travis-ci.org/telemark/portalen-links.svg?branch=master)](https://travis-ci.org/telemark/portalen-links)
[![Coverage Status](https://coveralls.io/repos/telemark/portalen-links/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/portalen-links?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# portalen-links

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/portalen-links.svg)](https://greenkeeper.io/)
Collects links

## Configuration

### PORTALEN_LINKS_TAG
Tag for this service. Defaults to ```portalen-links```

### PORTALEN_LINKS_URL
Not in use... yet. Defaults to ```http://portalen.links.no```

### PORTALEN_LINKS_ISOLATED
Use this to run the service in isolated mode.

### PORTALEN_LINKS_HOST
HOST for the service in isolated mode. Defaults to ```localhost```

### PORTALEN_LINKS_PORT
PORT for the service in isolated mode. Defaults to ```8000```

## Messages handled

### ```cmd: 'collect-links', type: 'user'```

Returns a list if a users links based on roles, groups.

```seneca.act({cmd: 'collect-links', type:'user', user:user, roles:[roles]}, (error, data) => {})```

```curl -d '{"cmd": "collect-links", "type":"user", "user":"gasg", "roles": ["alle", "administrasjonen"]}' -v http://localhost:8000/act```

Returns

```
[
  {
    title: "Arbeidsrom",
    description: "Område for samarbeid og dokumentdeling",
    system: "Sharepoint",
    url: "https://rom.t-fk.no/Arbeidsrom/Sider/default.aspx",
    icon: "work"
  },
  {
    title: "Prosjektveiviseren",
    description: "Rom for prosjektstyring",
    system: "Sharepoint",
    url: "https://rom.t-fk.no/sites/Prosjektveiviseren/SitePages/Portefolje.aspx",
    icon: "folder"
  },
  {
    title: "Kontaktinformasjon",
    description: "Kontaktinformasjon til Telemark fylkeskommune",
    system: "Sharepoint",
    url: "https://rom.t-fk.no/informasjon/kontaktinformasjon/Sider/default.aspx",
    icon: "contact_phone"
  },
  {
    title: "Kontaktinformasjon skoler",
    description: "Kontaktinformasjon til skolene i Telemark fylkeskommune",
    system: "Sharepoint",
    url: "https://rom.t-fk.no/informasjon/kontaktinformasjon/Sider/Skoler.aspx",
    icon: "school"
  },
...
...
```

## Messages emitted
This microservice does not emit any messages

## Docker
Build the image

```
$ docker build -t portalen-links .
```

Start

```
$ docker run -d --net host --name portalen-links portalen-links
```

From hub.docker.com

```
$ docker run -d --net host --name portalen-links telemark/portalen-links
```

Call the service

```
$ curl -d '{"cmd":"collect-links", "type": "user", "roles": ["administrasjonen", "skole", "tannhelse"]}' -v http://192.168.99.100:8000/act
```
[![Build Status](https://travis-ci.org/telemark/portalen-links.svg?branch=master)](https://travis-ci.org/telemark/portalen-links)
[![Coverage Status](https://coveralls.io/repos/telemark/portalen-links/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/portalen-links?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# portalen-links
Collects links

## Inbound messages
This microservice consumes the following messages

- ```{cmd: 'collect-links', type: 'user'}```

## Outbound messages
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
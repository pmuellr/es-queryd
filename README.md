es-queryd - http server API wrappers over elasticsearch queries
================================================================================

This server exposes HTTP endpoints that are specified as JavaScript functions
which produce JSON to be used with the elasticsearch search functions.  In
addition, a set of elasticsearch URLs and credentials are maintained, with
external access to the list of user-specified short names of those URLs.

Together these provide a single HTTP server to access data from elasticsearch
without having to deal with Query DSL in your HTTP requests, and allow you to
pre- and post-process data in the search.


usage
================================================================================

    es-queryd [options] <config-file>

`<config-file>` is the name of a file with the configuration to use.  See
below for the format.  If a config file is not provided, it will look for
a file named `es-queryd.yaml` in the current directory, and then in the
configuration directory `~/.esqueryd` for the same-named file.

options:

| option | description |
| ------ | ----------- |
| `-h --help`    | display help
| `-d --debug`   | generate verbose output when running
| `-v --version` | print version


config files
================================================================================

The config file is a YAML file describing the operation of es-queryd.  See the
sample [`es-queryd.yaml`](es-queryd.yaml) file for more information on it's
structure.


install
================================================================================

    npm install github:pmuellr/es-queryd

or use without installing:

    npx pmuellr/es-queryd


changelog
================================================================================

| version | description |
| ------- | ----------- |
| 0.0.1   | initial


license
================================================================================

This package is licensed under the MIT license.  See the [LICENSE.md][] file
for more information.


contributing
================================================================================

Awesome!  We're happy that you want to contribute.

Please read the [CONTRIBUTING.md][] file for more information.


[LICENSE.md]: LICENSE.md
[CONTRIBUTING.md]: CONTRIBUTING.md

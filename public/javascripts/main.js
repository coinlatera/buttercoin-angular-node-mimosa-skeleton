var c, controllers, d, dependencies, directives, f, filters, s, services, _i, _j, _k, _l, _len, _len1, _len2, _len3;

requirejs.config({
  baseUrl: './javascripts',
  paths: {
    angular: 'vendor/angular',
    jQuery: 'vendor/jquery',
    bootstrap: 'vendor/bootstrap',
    bootstrapSwitch: 'vendor/bootstrap-switch',
    bootstrapNotify: 'vendor/bootstrap-notify',
    chosen: 'vendor/chosen.jquery',
    moment: 'vendor/moment',
    'socket.io': 'vendor/io',
    EventEmitter: 'vendor/EventEmitter',
    underscore: 'vendor/underscore'
  },
  shim: {
    'app': ['bootstrap', 'socket.io', 'EventEmitter', 'bootstrapSwitch', 'bootstrapNotify', 'chosen', 'moment', 'jQuery', 'underscore'],
    bootstrap: ['jQuery'],
    bootstrapSwitch: ['jQuery', 'bootstrap'],
    bootstrapNotify: ['jQuery', 'bootstrap'],
    chosen: ['jQuery']
  }
});

controllers = ['main'];

directives = [];

filters = [];

services = [];

dependencies = [];

for (_i = 0, _len = controllers.length; _i < _len; _i++) {
  c = controllers[_i];
  dependencies.push("controllers/" + c);
}

for (_j = 0, _len1 = directives.length; _j < _len1; _j++) {
  d = directives[_j];
  dependencies.push("directives/" + d);
}

for (_k = 0, _len2 = filters.length; _k < _len2; _k++) {
  f = filters[_k];
  dependencies.push("filters/" + f);
}

for (_l = 0, _len3 = services.length; _l < _len3; _l++) {
  s = services[_l];
  dependencies.push("services/" + s);
}

require(dependencies, function() {
  return angular.bootstrap(document, ['buttercoinApp']);
});

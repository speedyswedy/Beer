'use strict';

describe('Service: Beers', function () {

  // load the service's module
  beforeEach(module('BeerApp'));

  // instantiate service
  var Beers;
  beforeEach(inject(function (_Beers_) {
    Beers = _Beers_;
  }));

  it('should do something', function () {
    expect(!!Beers).toBe(true);
  });

});

'use strict';

describe('Service: Beer', function () {

  // load the service's module
  beforeEach(module('BeerApp'));

  // instantiate service
  var Beer;
  beforeEach(inject(function (_Beer_) {
    Beer = _Beer_;
  }));

  it('should do something', function () {
    expect(!!Beer).toBe(true);
  });

});

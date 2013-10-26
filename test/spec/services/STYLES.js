'use strict';

describe('Service: Styles', function () {

  // load the service's module
  beforeEach(module('BeerApp'));

  // instantiate service
  var Styles;
  beforeEach(inject(function (_Styles_) {
    Styles = _Styles_;
  }));

  it('should do something', function () {
    expect(!!Styles).toBe(true);
  });

});

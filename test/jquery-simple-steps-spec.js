var chai = require("chai"),
    jsdom = require("jsdom"),
    jQuery = require("jQuery");

var expect = chai.expect;

var window = jsdom.jsdom("<html><body><div id='simple-step'><div class='step'><button class='next-step-button'></button></div><div class='step'></div></div></body></html>").createWindow(),
    document = window.document;

var $ = global.jQuery = jQuery.create(window);

require("../src/jquery-simple-steps");

describe('simple steps on init', function(){
  before(function(){
    $('#simple-step').simpleSteps();
  });

  it('should show first step', function(){
    expect($('.step').first().attr('style')).to.not.include('display: none');
  });

  it('should hide other steps', function() {
    expect($('.step').first().next().attr('style')).to.include('display: none');
  });

});

describe('simple steps on next-step-button click', function(){
  before(function(){
    $('.next-step-button').trigger('click');
  });

  it('should hide the current step', function(){
    expect($($('.step')[0]).attr('style')).to.include('display: none');
  });

  it('should show the  next step', function(){
    expect($($('.step')[1]).attr('style')).to.not.include('display: none');
  });

});

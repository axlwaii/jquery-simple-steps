/* Version 0.1.0 */
(function($){
  $.fn.simpleSteps = function (options){
    options = $.extend({
      stepClass           : '.step',
      animationSpeed      : 500
    }, options);

    var stepsContainer = this;

    var currentStep, nextButtons, steps, validations;

    currentStep = 0;

    validations = {
      "presence": validatePresence
    };

    nextButtons = $('.next-step-button');

    function init(){
      steps = $(stepsContainer).find(options.stepClass);
      hideSteps();
      $(steps).first().show();
    }

    function nextStep(dir){
      $(steps[currentStep]).hide();
      currentStep += dir;
      $(steps[currentStep]).fadeIn(options.animationSpeed);
    }

    function hideSteps() {
      var i;
      for(i=0; i < steps.length; i++){
        if( i !== currentStep){
          $(steps[i]).hide();
        }
      }
    }

    function validatePresence(element){
      var i;
      var elements = $(element).find('.validate.presence');
      var isValid = true;
      for(i=0; i < elements.length; i++){
        $(elements[i]).removeClass('error');
        if(elements[i].value === ""){
          isValid = false;
          $(elements[i]).addClass('error');
        }
      }
      return isValid;
    }

    $('.next-step-button').on('click', function(e){
      var key;
      for(key in validations){
        if(validations[key](steps[currentStep])){
          nextStep(1);
        }
      }
      return false;
    });

    $('.prev-step-button').on('click',function(){
      nextStep(-1);
      return false;
    });

    init();

    return stepsContainer;
  };
}(jQuery));

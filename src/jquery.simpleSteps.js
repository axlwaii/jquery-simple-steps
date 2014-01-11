/* Version 0.5.0 */
(function($){
    'use strict';

    $.fn.simpleSteps = function (options){

        var config,
            currentStep,
            nextStep,
            init,
            $nextButtons,
            $prevButtons,
            hideSteps,
            addClickHandlers,
            steps,
            stepsContainer = this,
            validations,
            validateEmail,
            validatePresence;

        config = $.extend({
                animationSpeed      : 500,
                nextButtons         : '.next-step-button',
                prevButtons         : '.prev-step-button',
                stepClass           : '.step',
                stepToStart         : 0
            }, options);

        validateEmail = function(element) {

            var i,
                re,
                isValid = true,
                elements = $(element).find('.validate.email');

            if(elements.length > 0){

                // from http://stackoverflow.com/a/46181/11236
                re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                for(i=0; i < elements.length; i++){
                    $(elements[i]).removeClass('error');
                    if(!re.test(elements[i].value)){
                        isValid = false;
                        $(elements[i]).addClass('error');
                    }
                }

            }

            return isValid;
        };

        validatePresence = function(element){

            var i,
                elements = $(element).find('.validate.presence'),
                isValid  = true;

            if(elements.length > 0) {

                for(i=0; i < elements.length; i++) {
                    $(elements[i]).removeClass('error');
                    if(elements[i].value === ''){
                        isValid = false;
                        $(elements[i]).addClass('error');
                    }
                }

            }

            return isValid;

        };

        validations = {
            'presence': validatePresence,
            'email'   : validateEmail
        };

        init = function(){

            steps = $(stepsContainer).find(config.stepClass);

            currentStep = config.stepToStart;

            $nextButtons = $(config.nextButtons);
            $prevButtons = $(config.prevButtons);

            addClickHandlers();

            hideSteps();

            $(steps).first().show();

        };

        addClickHandlers = function() {

            $nextButtons.on('click', function(e){

                e.preventDefault();

                var key, allValid;
                allValid = true;
                for(key in validations){
                    if(!(validations[key])(steps[currentStep])){
                        allValid = false;
                    }
                }

                if(allValid){
                    nextStep(1);
                }

            });

            $prevButtons.on('click',function(e) {

                e.preventDefault();
                nextStep(-1);


            });

        };


        hideSteps = function() {

            var i;

            for(i=0; i < steps.length; i++){
                if( i !== currentStep){
                    $(steps[i]).hide();
                }
            }

        };

        nextStep = function(dir) {

            if(currentStep !== steps.length - 1) {

                $(steps[currentStep]).hide();
                currentStep += dir;

            }

            $(steps[currentStep]).fadeIn(config.animationSpeed);

        };

        init();

        return stepsContainer;
    };
}(jQuery));

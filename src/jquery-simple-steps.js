/* Version 0.1.1 */
(function($){
    $.fn.simpleSteps = function (options){
        options = $.extend({
            stepClass           : '.step',
            animationSpeed      : 500
        }, options);

        var stepsContainer = this,
            currentStep = 0,
            $nextButtons = $('.next-step-button'),
            steps, validations;

         function validateEmail(element) {

            var i,re;
            var isValid = true;
            var elements = $(element).find('.validate.email');
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
        }

        function validatePresence(element){
            var i;
            var elements = $(element).find('.validate.presence');
            var isValid = true;
            if(elements.length > 0){
                for(i=0; i < elements.length; i++){
                    $(elements[i]).removeClass('error');
                    if(elements[i].value === ""){
                        isValid = false;
                        $(elements[i]).addClass('error');
                    }
                }
            }
            return isValid;
        }

        validations = {
            "presence": validatePresence,
            "email"   : validateEmail
        };

        function hideSteps() {
            var i;
            for(i=0; i < steps.length; i++){
                if( i !== currentStep){
                    $(steps[i]).hide();
                }
            }
        }

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

        $nextButtons.on('click', function(){
            var key, allValid;
            allValid = true;
            for(key in validations){
                if(!validations[key](steps[currentStep])){
                    allValid = false;
                }
            }

            if(allValid){
                nextStep(1);
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

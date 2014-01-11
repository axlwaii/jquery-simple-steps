describe('jquery simple steps plugin', function() {

    var fixture,
        loadFixtures,
        $container,
        $steps,
        $currentStep,
        setupSteps,
        $nextButtons,
        $prevButtons;

    loadFixtures = function() {

        fixture          = setFixtures(("<div id='simple-step'>" +
                                           "<div class='step'>" +
                                               "<button class='next-step-button'>" +
                                               "</button>" +
                                           "</div>" +
                                           "<div class='step'>" +
                                               "<button class='next-step-button'>" +
                                               "</button>" +
                                           "</div>" +
                                        "</div>")
                                       );
    };

    setupSteps          = function() {

        $container       = fixture.find('#simple-step');

        $steps           = $container.find('.step');
        $currentStep     = $steps.first();

        $nextButtons     = $currentStep.find('.next-step-button');
        $prevButtons     = $currentStep.find('.prev-step-button');

        $container.simpleSteps();

    };

    describe('simple steps on init', function(){

        beforeEach(function() {

            loadFixtures();
            setupSteps();

        });

        it('should show first step', function(){
            expect($currentStep).toBeVisible();
        });

        it('should hide other steps', function() {
            expect($currentStep.next()).toBeHidden();
        });

    });

    describe('simple steps on next-step-button click', function(){

        beforeEach(function() {

            loadFixtures();
            setupSteps();

            $nextButtons.trigger('click');

        });

        it('should hide the current step', function(){
            expect($currentStep).toBeHidden();
        });

        it('should show the  next step', function(){
            expect($currentStep.next()).toBeVisible();
        });

    });

});



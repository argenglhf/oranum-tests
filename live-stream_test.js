Feature('REQ-4 Sign-up overlay appears When pressing buttons');

Before(({ I, livePage}) => {
    I.say('Given I go to the search page and accept cookies')
    livePage.gotoLive()
});

Scenario('"Get credits" button', ({ I, livePage }) => {

    I.say('When I press on a live user')
    livePage.pressLiveUser()

    I.say('And I press "Get credits" button')
    livePage.getCreditsButton()

    I.say('Then I see sign-up overlay appear')
    livePage.signUpOverlay()

});

Scenario('"Add to favorites" button', ({ I, livePage }) => {

    I.say('When I press on a live user')
    livePage.pressLiveUser()

    I.say('And I press "Add to favorites" button')
    livePage.addToFavoritesButton()

    I.say('Then I see sign-up overlay appear')
    livePage.signUpOverlay()

});

Scenario('"Start session" button', ({ I, livePage }) => {

    I.say('When I press on a live user')
    livePage.pressLiveUser()

    I.say('And I press "Start session" button')
    livePage.startSessionButton()

    I.say('Then I see sign-up overlay appear')
    livePage.signUpOverlay()

});

Scenario('"Get coins" button', ({ I, livePage }) => {

    I.say('When I press on a live user')
    livePage.pressLiveUser()

    I.say('And I press "Get coins" button')
    livePage.getCoinsButton()

    I.say('Then I see sign-up overlay appear')
    livePage.signUpOverlay()

});

Scenario('"Surprise" button', ({ I, livePage }) => {

    I.say('When I press on a live user')
    livePage.pressLiveUser()

    I.say('And I press "Surprise" button')
    livePage.surpriseButton()

    I.say('Then I see sign-up overlay appear')
    livePage.signUpOverlay()

});
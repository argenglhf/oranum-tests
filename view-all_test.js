Feature('REQ-1 View all live psychics');

Scenario('Press "View all" button redirects to the search page', ({ I, mainPage }) => {

    I.say('Given I am on the main page')
    mainPage.goto()

    I.say('And I search for "View all live psychic values" button')
    I.seeElement('.cd5tv4m')

    I.say('When I click on this button')
    I.click('.cd5tv4m');

    I.say('Then I am redirected to the search page')
    I.seeInCurrentUrl('/en/search/Live')

});
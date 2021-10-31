Feature('REQ-2 Search partial text');

Before(({ I, mainPage}) => {
    mainPage.goto()
});

Scenario('Search for "Matt"', ({ I, searchPage }) => {

    I.say('Given I go to the search page')
    searchPage.startSearch()

    I.say('When I search for "Matt"')
    searchPage.enterSearch('Matt')

    I.say('Then I see result containing the value "Matt"')
    searchPage.assertPartSearch('matt')

});

Scenario('Search for "Myst"', ({ I, searchPage }) => {

    I.say('Given I go to the search page')
    searchPage.startSearch()

    I.say('When I search for "Myst"')
    searchPage.enterSearch('Myst')

    I.say('Then I see result containing the value "Myst"')
    searchPage.assertPartSearch('myst')

});

Scenario('Search for "Ann"', ({ I, searchPage }) => {

    I.say('Given I go to the search page')
    searchPage.startSearch()

    I.say('When I search for "Ann"')
    searchPage.enterSearch('Ann')

    I.say('Then I see result containing the value "Ann"')
    searchPage.assertPartSearch('ann')

});

Scenario('Search for "psy"', ({ I, searchPage }) => {

    I.say('Given I go to the search page')
    searchPage.startSearch()

    I.say('When I search for "psy"')
    searchPage.enterSearch('psy')

    I.say('Then I see result containing the value "Ann"')
    searchPage.assertPartSearch('psy')

});
Feature('REQ-3 Search full text');

Before(({ I, mainPage}) => {
    mainPage.goto()
});

Scenario('Search for "MattWarren"', ({ I, searchPage }) => {

    I.say('Given I go to the search page')
    searchPage.startSearch()

    I.say('When I search for "MattWarren"')
    searchPage.enterSearch('MattWarren')

    I.say('Then I see result with the value "MattWarren"')
    searchPage.assertFullSearch('MattWarren')

});

Scenario('Search for "MysticMilena"', ({ I, searchPage}) => {

    I.say('Given I go to the search page')
    searchPage.startSearch()

    I.say('When I search for "MysticMilena"')
    searchPage.enterSearch('MysticMilena')

    I.say('Then I see result with the value "MysticMilena"')
    searchPage.assertFullSearch('MysticMilena')

});

Scenario('Search for "EternalFlame"', ({ I, searchPage}) => {

    I.say('Given I go to the search page')
    searchPage.startSearch()

    I.say('When I search for "EternalFlame"')
    searchPage.enterSearch('EternalFlame')

    I.say('Then I see result with the value "EternalFlame"')
    searchPage.assertFullSearch('EternalFlame')

});



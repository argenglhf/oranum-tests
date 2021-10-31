const I = actor();

module.exports = {

    gotoLive() {
        I.amOnPage('/en/search/Live');
        // accept cookies
        I.click('.cish7l4')
    },

    pressLiveUser() {
        // click on any live user
        I.click('Live', '.bTjGMu')
    },

    getCreditsButton() {
        I.click('//*[@id="is-search"]/div[2]/div[1]/div[5]/div[2]/div[2]/div[2]/div/div/div[5]/div/div[2]/div[2]/div/div[3]/button')
    },

    addToFavoritesButton() {
        I.click('//*[@id="is-search"]/div[2]/div[1]/div[5]/div[2]/div[2]/div[2]/div/div/div[5]/div/div[2]/div[2]/div/div[2]/button')
    },

    startSessionButton() {
        I.click('.gEIOKd')
    },

    getCoinsButton() {
        I.click('.ermrsf')
    },

    surpriseButton() {
        // press any surprise button inside the horizontal div
        I.click('.sc-bdfBQB', '.tOXCe')
    },

    signUpOverlay() {
        I.seeElement('#signup-submit')
    },

}
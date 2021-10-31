const I = actor();
const chai = require("chai");
const expect = chai.expect;

module.exports = {

    startSearch() {
      // press search icon
      I.click('.jXSxtl')
    },

    enterSearch(searchValue) {
      I.fillField('.cVVZcB', searchValue)
      // wait until the results block appears
      I.waitForVisible('.jNSEV')
    },

    assertFullSearch(fullSearchResult) {
      // result in the result block is equal to what is expected
      I.see(fullSearchResult, '.cjej5g4')
    },

    async assertPartSearch(partEnteredValue) {
      // grab results
      const partSearchResult = await I.grabTextFromAll('.cjej5g4')
      // make array a string with lowercase
      expect(JSON.stringify(partSearchResult).toLowerCase()).to.include(partEnteredValue)

    }
}

import SearchPage from '../pages/search.page'

describe('Westwingnow Home Page', () => {
    it('should open the home page and verify title', () => {
        SearchPage.open();
        browser.pause(3000)
    })
    
});
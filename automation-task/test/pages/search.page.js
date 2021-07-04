import Page from "./page";

class SearchPage extends Page{


    get searchInput(){
        return $("input[data-testid='search-input']")
    }

    get searchIcon(){
        return $("header-search-icon")
    }

    get mobelListingPage(){
        return $("ListingPageElements__MainContent-sc-1fa9r1e-6 bNGtRI")
    }

    get firstItemWishList(){
        return $$("wishlist-icon")[0];
    }

    get wishListCount(){
        return $("IconsButtonTraystyles__ItemWrapper-sc-90hou0-4 krUQbo WishlistCount qa-header-wishlist-link")
    }

    open() {
        super.open('https://www.westwingnow.de/')
    }

}

export default new SearchPage(); 
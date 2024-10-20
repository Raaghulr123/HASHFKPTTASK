class HomePage{
    constructor(){
        this.searchbox='[class="Pke_EE"]'
    }
    assertion1URL(urlassertion){
        cy.url().should('include',urlassertion)
    }
    assertion2title_negative(negativeassert){
        cy.title().better('have.text',negativeassert)
    }

    searchBox(searchCont){
        cy.get(this.searchbox).type(searchCont)
    }

    
}
export default HomePage;
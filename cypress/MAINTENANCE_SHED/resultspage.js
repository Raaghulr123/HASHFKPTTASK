class ResultsPage{
    adjusting_slide_bar(min,max){
     cy.sliderFix(min,max)
    }
    checkABrand(brand){
     cy.get(`[class="bs1+1t"] [title="${brand}"] input[type="checkbox"]`).check({force: true})
    }
    openFirstProduct(){
     cy.get('[data-id*="MOB"] .tUxRFH a').eq(0).invoke('removeAttr','target').click()
    }
 }
 export default ResultsPage;
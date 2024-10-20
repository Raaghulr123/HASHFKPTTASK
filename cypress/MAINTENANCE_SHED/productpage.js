class ProductPage{
    assertingProductTitle(brand){
        cy.get('[class="DOjaWF gdgoEp col-8-12"] [class="cPHDOP col-12-12"] h1 .VU-ZEz',{timeout:6000}).then((productname)=>{
            const productName=productname.text()
            expect(productName).to.include(brand)
          })
    }
    assertFirstProductisabovemininmumprice(minp){
        cy.get('[class="Nx9bqj CxhGGd"]').then((pricetxt)=>{
            const priceText=pricetxt.text()
            const price = parseInt(priceText.replace(/[₹,]/g, ''));
            expect(price).to.be.greaterThan(minp)
          })
    }
}
export default ProductPage;
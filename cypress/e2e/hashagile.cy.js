import commonHandlers from "../MAINTENANCE_SHED/common";
import HomePage from "../MAINTENANCE_SHED/homepage";
import ResultsPage from "../MAINTENANCE_SHED/resultspage";
import ProductPage from "../MAINTENANCE_SHED/productpage";
describe('Flipkart task given by Payani - Hashagile', () => {
  let continuation;
  let datas;
  let lowestPricedProduct;
  let highestPricedProduct;
  // Maintenance Shed - POM using JS
  const common=new commonHandlers()
  const homePage=new HomePage()
  const resultsPage=new ResultsPage()
  const productpage=new ProductPage()
  //
  before(()=>{
      cy.visit('https://www.flipkart.com');
      cy.fixture('fkpt').then((testdata)=>{
      datas=testdata;
      })
  })
  
  it('Validate landed on actual page', () => {
    homePage.assertion1URL(datas.urlassertion)
    // voluntarily failed assertion added in form of soft assertion here, test will not stop
    homePage.assertion2title_negative(datas.negativeassertion)
    cy.url().then((url)=>{
      continuation=url
    })
  })
  it('Validate slider & filter functionality(checkbox of brands),adjust slider with the expected min and max range and make assertions',()=>{
      common.visitorCont(continuation)
      homePage.searchBox(`${datas.searchcontext}{enter}`)
      resultsPage.adjusting_slide_bar(datas.assertMin,datas.assertMax)
      resultsPage.checkABrand(datas.brand)
      common.hardWait()
      let products = [];
      cy.get('[class="DOjaWF gdgoEp"] [class="_75nlfW"]').each(($el) => {
          const productName = $el.find('[class="KzDlHZ"]').text();
          const priceText = $el.find('[class="Nx9bqj _4b5DiR"]').text();
          if (productName && priceText) {
            const price = parseInt(priceText.replace(/[₹,]/g, ''));
            products.push({ name: productName, price: price });
          }
      }).then(() => {
          products.sort((a, b) => a.price - b.price);
          lowestPricedProduct = products[0];
          highestPricedProduct = products[products.length - 1];
          expect(lowestPricedProduct.name).to.include(`${datas.brand}`)
          expect(lowestPricedProduct.price).to.be.greaterThan(datas.minimumprice)
          cy.log(`Lowest Priced Product: ${lowestPricedProduct.name} - ₹${lowestPricedProduct.price}`);
          expect(highestPricedProduct.name).to.include(`${datas.brand}`)
          expect(highestPricedProduct.price).to.be.lessThan(datas.maximumprice)
          cy.log(`Highest Priced Product: ${highestPricedProduct.name} - ₹${highestPricedProduct.price}`);
          cy.log(`price range between lowest and highest is ₹ ${highestPricedProduct.price-lowestPricedProduct.price}`)
      });
      cy.url().then((url)=>{
        continuation=url
      })
  })
  it(`validate basic things on product page`,()=>{
    common.visitorCont(continuation)
    resultsPage.openFirstProduct()
    productpage.assertingProductTitle(datas.brand)
    productpage.assertFirstProductisabovemininmumprice(datas.minimumprice)
  })
})
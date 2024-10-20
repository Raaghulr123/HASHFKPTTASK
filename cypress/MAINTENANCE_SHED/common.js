class commonHandlers{
    visitorCont(data){
        cy.visit(data)
    }
    hardWait(){
        cy.wait(3000)
    }
}
export default commonHandlers;
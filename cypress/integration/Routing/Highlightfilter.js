import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})

And("I enter all Todos",()=>{
cy.get(".new-todo").type("Hello{enter}")
cy.get(".new-todo").type("school pickup{enter}")
cy.get(".new-todo").type("payrent{enter}")
cy.get(".new-todo").type("prayer{enter}")


})
And("I mark some Todos as completed",()=>{
    cy.contains('payrent')
    .parent()
    .find('input')
    .check().parents('li')
    .should('have.class', 'completed')
    
    
})
When("I filter using the filter",()=>{
    
   cy.get('.footer').find('li[data-reactid]').filter(':contains("All")').click()
    })

Then("I see only selected filter is highlighted",()=>{
   // cy.get('.filters').within(function () {
        cy.contains('All').should('have.class', 'selected')
        //cy.contains('Active').click().should('have.class', 'selected')
       
})
And("I filter using the filter Active",()=>{
    cy.get('.footer').find('li[data-reactid]').filter(':contains("Active")').click()
    cy.contains('Active').should('have.class', 'selected')
     
    })
    And("I filter using completed",()=>{
    
         cy.get('.footer').find('li[data-reactid]').filter(':contains("Completed")').click()
          //cy.contains('Completed').click().should('have.class', 'selected')
   
        })
    
 
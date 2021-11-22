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
When("I filter the completed items",()=>{
    
   cy.get('.footer').find('li[data-reactid]').filter(':contains("Completed")').click()

})

Then("I see only completed items in the list",()=>{
    cy.get('.todo-list li')
    .should('have.length', 1)
    cy.contains("payrent").should("be.exist")
})




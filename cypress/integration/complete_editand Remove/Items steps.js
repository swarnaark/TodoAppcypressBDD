
import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
When("I enter all Todos and check on the checkbox to complete",()=>{
cy.get(".new-todo").type("Attend meeting{enter}")
cy.get(".new-todo").type("payrent{enter}")
cy.get(".new-todo").type("school pickup{enter}")

})
Then("I see the state of that item as completed",()=>{
    cy.contains('payrent')
    .parent()
    .find('input')
    .check().parents('li')
    .should('have.class', 'completed')
})

 And("I see that todo counter is decremented accordingly",()=>{
    
    cy.get(".todo-count").should("contain","2 items left")

})

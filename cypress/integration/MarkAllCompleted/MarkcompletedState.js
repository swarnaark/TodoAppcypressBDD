import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
When("I enter all Todos and ckeck on the checkbox to complete",()=>{
cy.get(".new-todo").type("Attend meeting{enter}")
cy.get(".new-todo").type("payrent{enter}")
cy.get(".new-todo").type("school pickup{enter}")
cy.get('[for="toggle-all"]').click()

})
Then("I see the state of that item as completed",()=>{
    cy.get('input[class="toggle"]').should('be.checked')
    .parent()
    .find('input')
    .check().parents('li')
    .should('have.class', 'completed')
})

 And("I see that todo counter is decremented accordingly",()=>{
    
    cy.get(".todo-count").should("contain","0 items left")

})

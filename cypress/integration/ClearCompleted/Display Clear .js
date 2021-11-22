import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
And("I enter all Todos",()=>{
cy.get(".new-todo").type("Attend meeting{enter}")
cy.get(".new-todo").type("payrent{enter}")
cy.get(".new-todo").type("school pickup{enter}")

})
When("I mark Todos as completed",()=>{
    cy.get('[for="toggle-all"]').click()
    cy.get('input[class="toggle"]').should('be.checked')
    
})

Then ("Clear completed is available in footer for user to view",()=>{     
    cy.get('.clear-completed').should("be.visible") 
})


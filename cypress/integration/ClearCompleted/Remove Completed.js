import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
And("I enter all Todos",()=>{
cy.get(".new-todo").type("Attend meeting{enter}")
cy.get(".new-todo").type("payrent{enter}")
cy.get(".new-todo").type("school pickup{enter}")

})
And("I mark Payrent as completed",()=>{
    cy.contains('payrent')
    .parent()
    .find('input')
    .check().parents('li')
    .should('have.class', 'completed')
    
})
When("I click on clear completed",()=>{
    cy.get('.clear-completed').click()
})

Then ("The items in the lists are cleared",()=>{     
    cy.get('.todo-list').contains("payrent").should("not.exist") 
})

And("The counter is decremented",()=>{
    cy.get(".todo-count").should("contain","2 items left")
})


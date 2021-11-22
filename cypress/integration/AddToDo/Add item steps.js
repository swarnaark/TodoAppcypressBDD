import {Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
When("I enter my first Todo",()=>{
cy.get(".new-todo").type("Hello{enter}")

})
Then("I should see the entered todo in a list",()=>{
    cy.get(".todo-list").should("contain","Hello")
    
})
Then("I see that I have 1 item left",()=>{
    
    cy.get(".todo-count").should("contain","1 item left")

})

Then("the list’s filter is set to ‘All’ with ‘Completed’ & ‘Active’ unset",()=>{

    cy.get('.footer').find('li[data-reactid]').filter(':contains("All")')    
    cy.contains('All').should('have.class', 'selected')
   
})

Then("‘Clear completed’ is unavailable",()=>{
    
cy.get('.clear-completed').should("not.exist")
})
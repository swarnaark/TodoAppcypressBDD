import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})

And("an empty Todo list",()=>{
cy.get(".todo-list").should("not.exist")
})
When("I add multiple Todos",()=>{
cy.get(".new-todo").type("Hello{enter}")
cy.get(".new-todo").type("school pickup{enter}")

})
Then("only those items are listed",()=>{
    cy.get(".todo-list").should("contain","Hello")
    cy.get(".todo-list").should("contain","school pickup")
    
    
})
And("the list summary is 2 items left",()=>{
    
    cy.get(".todo-count").should("contain","2 items left")

})

Then("the list’s filter is set to ‘All’ with ‘Completed’ & ‘Active’ unset",()=>{

    cy.get('.footer').find('li[data-reactid]').filter(':contains("All")')
    cy.contains('All').should('have.class', 'selected')

})

Then("‘Clear completed’ is unavailable",()=>{
    
cy.get('.clear-completed').should("not.exist")
})
import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we Add multiple Todos",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
cy.get(".new-todo").type("Hello{enter}")
cy.get(".new-todo").type("school pickup{enter}")
})

When("items are not completed",()=>{
 
    cy.get('.footer').find('li[data-reactid]').filter(':contains("Completed")').click()
    cy.get(".todo-list").should("not.be.visible")

})

Then("Clear completed is hidden",()=>{
    
cy.get('.clear-completed').should("not.exist")
})
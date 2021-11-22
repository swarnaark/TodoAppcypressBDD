import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("a Todo list with single item Learning time",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
cy.get(".new-todo").type("Learning time{enter}")
})
When("the item is selected for edit", () => {
    cy.get(".todo-list li .view label").contains('Learning time').dblclick()
  
  })
Then("the item cannot be completed", () => {
    cy.get(".toggle").should("not.be.visible")
  
  })
And("the item cannot be removed",()=>{
    
    cy.get(".todo-list li .view label")
    .contains('Learning time')
    .parent()
    .find(".destroy")
    .should("not.be.visible")

})

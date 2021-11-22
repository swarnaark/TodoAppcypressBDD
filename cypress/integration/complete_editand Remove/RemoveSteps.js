
import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
And("Adding Todos to the list",()=>{
cy.get(".new-todo").type("Attend meeting{enter}")
cy.get(".new-todo").type("payrent{enter}")
cy.get(".new-todo").type("school pickup{enter}")

})
When("I remove payrent for an item from list", () => {
    cy.get(".todo-list li .view label")
      .contains('payrent')
      .parent()
      .find(".destroy")
      .click({ force: true })
  })
  And("the todo counter is decremented accordingly",()=>{
    
    cy.get(".todo-count").should("contain","2 items left")

})

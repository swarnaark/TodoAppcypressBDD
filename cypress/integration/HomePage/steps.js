import {Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{

  cy.visit("https://todomvc.com/examples/react/#/")
})
When ("The homepage is loaded",()=>{

 cy.get(".todoapp").should("be.visible")
})
Then("I see the home page",() => {
cy.get(".header").should("be.visible")
  cy.get(".info").should("be.visible")
})


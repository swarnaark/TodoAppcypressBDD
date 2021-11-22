import {Given,When,Then } from "cypress-cucumber-preprocessor/steps";


Given("we visit Todo page",()=>{

    cy.visit("https://todomvc.com/examples/react/#/")
  })
  When("there is No Todo's",()=> {
    cy.get(".todoapp").should("be.visible")
  })
  Then("#main and #footer not visible",() => {
    cy.get(".main").should("not.exist")
    cy.get(".footer").should("not.exist")
  })
  
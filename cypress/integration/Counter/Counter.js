import {Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
When("I enter my Todos to a list",()=>{
cy.get(".new-todo").type("learn time{enter}")
cy.get(".new-todo").type("play time{enter}")
cy.get(".new-todo").type("Go shopping{enter}")

})
Then("I should see that counter displays current number of Todos",()=>{
    
    cy.get(".todo-count").should("contain","3 items left")

})


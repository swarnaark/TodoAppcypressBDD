
import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("An empty todolist",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
And("I add list of items",()=>{
    cy.get(".new-todo").type("Attend meeting{enter}")
    cy.get(".new-todo").type("payrent{enter}")
   cy.get(".new-todo").type("school pickup{enter}")

})
When("I select an item for edit and press enter",()=>{
    cy.get(".todo-list li .view label").contains('school pickup').dblclick()
    cy.get(".editing > .edit").type('{selectall}{backspace}').type("prayer time{enter}")

 })
Then("The item is saved and added to the list",()=>{
cy.get(".todo-list").should("contain","prayer time")
    
})

   

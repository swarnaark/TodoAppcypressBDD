
import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("An empty todolist",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
And("I add list of items",()=>{
    cy.get(".new-todo").type("Attend meeting{enter}")
    cy.get(".new-todo").type("payrent{enter}")
   cy.get(".new-todo").type("school pickup{enter}")

})
When("I enter empty string",()=>{
    cy.get(".todo-list li .view label").contains('school pickup').dblclick()
    cy.get(".editing > .edit").type('{selectall}{backspace}').type("{enter}")

 })
Then("The item is removed since empty string is entered",()=>{
cy.get(".todo-list").contains("prayer time").should("not.exist")
    
})
And("The counter is decremented accordingly",()=>{
    
    cy.get(".todo-count").should("contain","2 items left")

})

   


import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("An empty todolist",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
And("I add list of items",()=>{
    cy.get(".new-todo").type("Attend meeting{enter}")
    cy.get(".new-todo").type("payrent{enter}")
   cy.get(".new-todo").type("school pickup{enter}")
})
And("I clear the text and press ESC key",()=>{
    cy.get(".todo-list li .view label").contains('school pickup').dblclick()
    cy.get(".editing > .edit").type('{selectall}{backspace}').type('{esc}')
 })
Then("Edit is cancelled on pressing ESC",()=>{
cy.get(".todo-list").contains("prayer time").should("not.exist")
    
})
And("The counter Remains same",()=>{
    
    cy.get(".todo-count").should("contain","3 items left")

})


import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
And("Adding Todos to the list",()=>{
cy.get(".new-todo").type("Attend meeting{enter}")
cy.get(".new-todo").type("payrent{enter}")
cy.get(".new-todo").type("school pickup{enter}")

})

When("I double click an item in list",()=>{
    cy.get(".todo-list li .view label").contains('payrent').dblclick()
   
})
Then("I see editing mode is activated enabling user to edit TOdos",()=>{
    cy.get(".editing > .edit").type('{selectall}{backspace}').type("prayer time{enter}")
})


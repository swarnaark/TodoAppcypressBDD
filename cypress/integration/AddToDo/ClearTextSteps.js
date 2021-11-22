import {Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})

When("todos are entered to todolist",()=>{
cy.get(".new-todo").type("payrent{enter}")
cy.get(".new-todo").type("school pickup{enter}")

})
Then("Text input field should be cleared after pressing enter",()=>{
    cy.get(".new-todo").should('be.empty')
    
})
And("The placeholder text 'what needs to be done?' should be displayed as before",()=>{
    cy.get(".new-todo").invoke('attr', 'placeholder').should('contain',"What needs to be done?")

})

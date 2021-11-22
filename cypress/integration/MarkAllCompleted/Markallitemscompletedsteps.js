import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
And("I enter all Todos",()=>{
cy.get(".new-todo").type("Attend meeting{enter}")
cy.get(".new-todo").type("payrent{enter}")
cy.get(".new-todo").type("school pickup{enter}")

})
When("I mark all Todos as completed",()=>{
    cy.get('[for="toggle-all"]').click()
    
})

Then ("I should see all todos are checked completed",()=>{
cy.get('input[class="toggle"]').should('be.checked')
        
})
And("I see that I have 0 items left",()=>{
    
    cy.get(".todo-count").should("contain","0 items left")

})

Then("the list’s filter is set to ‘All’ with ‘Completed’ & ‘Active’ unset",()=>{

    cy.get('.footer').find('li[data-reactid]').filter(':contains("All")')

})

Then("Clear completed is available",()=>{
    
cy.get('.clear-completed').should("be.visible")
})
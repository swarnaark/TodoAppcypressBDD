import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

When("I try to uncheck the toggle mark all",()=>{
    cy.get('[for="toggle-all"]').click()

})

Then ("I should see all todos are Unchecked and are in not completed state",()=>{
    cy.get('input[class="toggle"]').should('not.be.checked')
            
    })
Then("the list’s filter is set to ‘All’ with ‘Completed’ & ‘Active’ unset",()=>{

    cy.get('.footer').find('li[data-reactid]').filter(':contains("All")')

})

And("I see that todo counter is incremented to desired state",()=>{
    
     cy.get(".todo-count").should("contain","3 items left")
    
    })
    
Then("Clear completed is unavailable",()=>{
    
cy.get('.clear-completed').should("not.exist")
})

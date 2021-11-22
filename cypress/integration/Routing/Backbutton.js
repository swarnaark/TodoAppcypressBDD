import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("we visit Todo website",()=>{
cy.visit("https://todomvc.com/examples/react/#/")
})
And("I enter all Todos",()=>{
cy.get(".new-todo").type("Hello{enter}")
cy.get(".new-todo").type("school pickup{enter}")
cy.get(".new-todo").type("payrent{enter}")
cy.get(".new-todo").type("prayer{enter}")
})
And("I mark a Todo as completed",()=>{
    cy.contains('payrent')
    .parent()
    .find('input')
    .check().parents('li')
    .should('have.class', 'completed')
    })
When("I filter using the filters all,active,completed",()=>{
     cy.log("showing all items")
    cy.get('.footer').find('li[data-reactid]').filter(':contains("All")').click()
    cy.get('.todo-list li')  .should('have.length', 4) 
    cy.log('Showing active items')
    cy.get('.footer').find('li[data-reactid]').filter(':contains("Active")').click()
    cy.get('.todo-list li') .should('have.length', 3)
    cy.log('Showing completed items')
    cy.get('.footer').find('li[data-reactid]').filter(':contains("Completed")').click()
    cy.get('.todo-list li') .should('have.length', 1)
})
       
And ("I click on browser back button and go back to Active items",()=>{
    cy.log('Back to active items')
    cy.go('back')
    cy.get('.todo-list li') .should('have.length', 3)  
})  
And("I go back to  All items filterd accordingly",()=>{
    cy.log('Back to all items')
    cy.go('back')
    cy.get('.todo-list li').should('have.length', 4)

})


      
    
 
    
     

      
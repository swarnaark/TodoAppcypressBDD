Feature: Clear Completed
 Scenario: Should display Clear completed in footer
   Given we visit Todo website
   And I enter all Todos
   When I mark Todos as completed
   Then Clear completed is available in footer for user to view
   
 Scenario: Remove completed items when clicked 
   Given we visit Todo website
   And I enter all Todos
   And I mark Payrent as completed
   When I click on clear completed
   Then The items in the lists are cleared


  Scenario: Should be hidden when there are no completed items
   Given we Add multiple Todos 
   When items are not completed
   Then Clear completed is hidden
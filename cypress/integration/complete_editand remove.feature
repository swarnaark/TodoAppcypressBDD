Feature: complete,edit and Remove Todos
 Scenario: should allow me to mark items as complete 
   Given we visit Todo website
   When I enter all Todos and check on the checkbox to complete
   Then I see the state of that item as completed
   And I see that todo counter is decremented accordingly
  
Scenario:Edit Todo's by double-clicking the <label> which  activates editing mode
   Given we visit Todo website
   And Adding Todos to the list
   When I double click an item in list
   Then I see editing mode is activated enabling user to edit TOdos

Scenario: Remove the Items from list
    Given we visit Todo website
    And Adding Todos to the list
    When I remove payrent for an item from list
    And the todo counter is decremented accordingly

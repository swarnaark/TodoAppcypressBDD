Feature: Routing
 Scenario: Should allow me to display active items
   Given we visit Todo website
   And I enter all Todos
   And I mark some Todos as completed
   When I filter the Active items
   Then I see only Active items are available in the list

 Scenario: Should allow me to display All items
   Given we visit Todo website
   And I enter all Todos
   And I mark some Todos as completed
   When I filter the All items
   Then I see All available items in the list

 Scenario: Should allow me to display completed items
   Given we visit Todo website
   And I enter all Todos
   And I mark some Todos as completed
   When I filter the completed items
   Then I see only completed items in the list

 Scenario: Should highlight the curently applied filter
   Given we visit Todo website
   And I enter all Todos
   And I mark some Todos as completed
   When I filter using the filter
   Then I see only selected filter is highlighted
   And I filter using the filter Active
   And I filter using completed

 Scenario: Verify browser back button
  Given we visit Todo website
  And I enter all Todos
  And I mark a Todo as completed
  When I filter using the filters all,active,completed
  And I click on browser back button and go back to Active items
  And I go back to  All items filterd accordingly
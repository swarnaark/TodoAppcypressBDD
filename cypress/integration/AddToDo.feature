Feature: Add items to Todo
 Scenario: Add My first Todo
   Given we visit Todo website
   When I enter my first Todo
   Then I should see the entered todo in a list
   And I see that I have 1 item left
   And the list’s filter is set to ‘All’ with ‘Completed’ & ‘Active’ unset
   And ‘Clear completed’ is unavailable

  Scenario: Add multiple items to empty list
   Given we visit Todo website
   And an empty Todo list
   When I add multiple Todos 
   Then only those items are listed
   And the list summary is 2 items left
   And the list’s filter is set to ‘All’ with ‘Completed’ & ‘Active’ unset
   And ‘Clear completed’ is unavailable

  Scenario: should clear text input field when an item is added 
   Given we visit Todo website
   When todos are entered to todolist
   Then Text input field should be cleared after pressing enter
   And The placeholder text 'what needs to be done?' should be displayed as before









  
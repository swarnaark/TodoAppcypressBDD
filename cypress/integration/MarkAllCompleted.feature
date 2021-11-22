Feature: Mark all items completed
 Scenario: Should allow me to mark all entered Todos as completed
   Given we visit Todo website
   And I enter all Todos
   When I mark all Todos as completed
   Then I should see all todos are checked completed
   And I see that I have 0 items left
   And the list’s filter is set to ‘All’ with ‘Completed’ & ‘Active’ unset
   And Clear completed is available

Scenario:should allow me to clear the completion state of all item
   When I try to uncheck the toggle mark all
   Then I should see all todos are Unchecked and are in not completed state
   And I see that todo counter is incremented to desired state
   And the list’s filter is set to ‘All’ with ‘Completed’ & ‘Active’ unset
   And Clear completed is unavailable

Scenario: complete checkbox should update state when items are completed 
Given we visit Todo website
When I enter all Todos and ckeck on the checkbox to complete
Then  I see the state of that item as completed
And I see that todo counter is decremented accordingly
Feature: Editing TOdos
 Scenario: should hide other controls when editing
   Given a Todo list with single item Learning time
   When the item is selected for edit
   Then the item cannot be completed
   And the item cannot be removed


 Scenario:Save edits when pressing enter
   Given An empty todolist
   And I add list of items
   When I select an item for edit and press enter
   Then The item is saved and added to the list

 Scenario:Save edits on blur
   Given An empty todolist
   And I add list of items
   When I select an item for edit and blur
   Then The item is saved and added to the list

 Scenario:should trim entered text 
   Given An empty todolist
   And I add list of items
   When I select an item for edit with gaps and enter
   Then The item is trimmed and saved to the list

 
 Scenario:Remove item if empty string is entered
   Given An empty todolist
   And I add list of items
   When I enter empty string
   Then The item is removed since empty string is entered
   And The counter is decremented accordingly

Scenario:Cancel edits on escape
   Given An empty todolist
   And I add list of items
   And I clear the text and press ESC key
   Then Edit is cancelled on pressing ESC
   And The counter Remains same

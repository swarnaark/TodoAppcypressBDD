Feature: Check main and footer when No Todo
 Scenario: No main and footer visible
   Given we visit Todo page
   When there is No Todo's 
   Then #main and #footer not visible
Feature:Counter
Scenario: Counter must display the crrent number of Todo items
   Given we visit Todo website
   When I enter my Todos to a list
   Then I should see that counter displays current number of Todos
  
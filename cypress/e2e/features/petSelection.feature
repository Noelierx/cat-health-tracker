Feature: Pet Selection Process

  Scenario: Display PetInfo and CatHealthTracker when a pet is selected
    Given I am on the home page
    When I open the pet selection dropdown
    And I select a pet
    Then I should see the PetInfo
    And I should see the CatHealthTracker
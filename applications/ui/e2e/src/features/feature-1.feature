Feature: Leader board throw percentage precision
  As a player, I want to  Quickly see and understand the throw percentage statistics so that Determine my strategy quickly

  Scenario: Players see fractional percentages clearly
    Given A player has a throw percentage that is fractional
    When It is displayed on the leader board page
    Then The precision is only displayed to a tenth of a percent

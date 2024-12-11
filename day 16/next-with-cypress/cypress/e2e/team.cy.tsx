/** @format */

describe("team page", () => {
  it("render team page", () => {
    cy.visit("http://localhost:3000/team");
    const teams = ["team1", "team2", "team3"];
    for (let i = 0; i < teams.length; i++) {
      cy.get("p").contains(teams[i]);
    }
  });
});

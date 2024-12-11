/** @format */

import { mount } from "cypress/react";
import AboutPage from "./page";

describe("About Page", () => {
  it("Renders About Page", () => {
    mount(<AboutPage />); // mount the component
    cy.get("h1").contains("About Page"); // get the h1
    cy.get('a[href="/"]').should("be.visible"); // get the link

    for (let i = 0; i < 100; i++) {
      cy.get("button").click();
    }

    cy.get("div").contains("100");
  });
});

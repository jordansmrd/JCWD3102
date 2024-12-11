/** @format */

import { mount } from "cypress/react";
import Home from "./page";

describe("Home Page", () => {
  it("Renders Home PageH", () => {
    mount(<Home />); // mount the component
    cy.get("h1").contains("Home Page"); // get the h1
    cy.get('a[href="/about"]').should("be.visible"); // get the link
  });
});

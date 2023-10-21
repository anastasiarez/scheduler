describe("should book an interview", () => {
  it("should visit root and it contains Monday", () => {
    cy.visit('/');
    cy.contains("Monday");
  });
  it("can click on button",()=> {
    cy.get("[alt=Add]")
      .first()
  });
});
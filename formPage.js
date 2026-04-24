class FormPage {
 visit(){cy.visit('/automation-practice-form')}
 fillForm(u){cy.get('#firstName').type(u.firstName);cy.get('#lastName').type(u.lastName);cy.get('#userEmail').type(u.email);cy.contains('Male').click();cy.get('#userNumber').type(u.mobile)}
 submit(){cy.get('#submit').scrollIntoView().click({force:true})}
}
export default new FormPage()
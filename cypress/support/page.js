export class AutomationPracticeFormPage {
  visit() {
    cy.visit('https://demoqa.com/automation-practice-form');
  }

  fillTextField(field, value) {
    cy.get(`#${field}`).type(value);
  }

  selectGender(gender) {
  cy.contains('label', gender).click();
}

  fillMobileNumber(number) {
  cy.get('#userNumber').type(number);
}

  setDateOfBirth(date) {
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1930'); // year
	cy.get('.react-datepicker__month-select').select('February'); // month
    //cy.contains('.react-datepicker__day', '28').click(); // day
	cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();
  }

  selectSubjects(subject) {
    cy.get('#subjectsInput').type(subject);
    cy.contains('.subjects-auto-complete__option', subject).click();
  }

  selectHobbies(hobby) {
  cy.contains('label', hobby).click();
}

  uploadImage(imagePath) {
  cy.get('#uploadPicture').attachFile(imagePath);
}

  selectState(state) {
    cy.get('#state').click();
    cy.contains('div', state).click();
  }

  selectCity(city) {
    cy.get('#city').click();
    cy.contains('div', city).click();
  }

  clickSubmit() {
    cy.get('#submit').click();
  }

  // Assertions to verify the submitted values
  verifyFormValues({ firstName, lastName, email, gender, dob, subject, hobby, image, state, city }) {
    cy.get('td').contains(firstName).should('be.visible');
    cy.get('td').contains(lastName).should('be.visible');
    cy.get('td').contains(email).should('be.visible');
    cy.get('td').contains(gender).should('be.visible');
    cy.get('td').contains(dob).should('be.visible');
    cy.get('td').contains(subject).should('be.visible');
    cy.get('td').contains(hobby).should('be.visible');
    cy.get('td').contains(image).should('be.visible');
    cy.get('td').contains(state).should('be.visible');
    cy.get('td').contains(city).should('be.visible');
  }
}
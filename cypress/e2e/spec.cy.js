import { AutomationPracticeFormPage } from '../support/page';

const form = new AutomationPracticeFormPage();

describe('Automation Practice Form', () => {
  it('should fill out the form and validate the submission', () => {

    form.visit(); // Open the link

    // Input all the necessary information
    form.fillTextField('firstName', 'John');
    form.fillTextField('lastName', 'Doe');
    form.fillTextField('userEmail', 'johndoe@example.com');
    form.selectGender('Male');
    form.fillMobileNumber('1234567890');
    form.setDateOfBirth('28/02/1930');
    form.selectSubjects('Economics');
    form.selectHobbies('Music');
    form.uploadImage('cat.jpg');
    form.selectState('NCR');
    form.selectCity('Delhi');

    form.clickSubmit(); // Click Submit

    form.verifyFormValues({ // Validate the form submission summary
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      gender: 'Male',
      dob: '28 February,1930',
      subject: 'Economics',
      hobby: 'Music',
      image: 'cat.jpg',
      state: 'NCR',
      city: 'Delhi'
    });
  });
});
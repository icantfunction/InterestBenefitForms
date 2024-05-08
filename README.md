# Enhanced Health Form

This project consists of a multi-step form built with HTML and styled with Tailwind CSS and Font Awesome. The form is divided into four pages, each collecting different sets of information.

## FirstFormPage.html

This is the first page of the form. It is not provided in the context, but it is expected to collect basic information such as the user's name.

## SecondFormPage.html

This page collects information about the user's household income. It includes a progress bar indicating that the user is halfway through the form. The form includes a text input field for the user to enter their household income. Navigation buttons are provided to go back to the first page or continue to the third page.

## ThirdFormPage.html

This page collects the user's contact information. The progress bar indicates that the user is 75% through the form. The form includes input fields for the user's email, phone number, home address, and zip code. Navigation buttons are provided to go back to the second page or continue to the fourth page.

## FourthFormPage.html

This is the final page of the form. It collects the user's and their dependents' or spouse's Social Security Numbers. The progress bar indicates that the user is at the final step of the form. The form includes input fields for the user's and their dependents' or spouse's Social Security Numbers. Navigation buttons are provided to go back to the third page or submit the form. Upon loading, the page retrieves the user's first and last names from local storage and displays them in the form header.

## Usage

To use this form, simply open the `FirstFormPage.html` file in a web browser and fill out the form fields. Click the "Continue" button to proceed to the next page of the form, or the "Back" button to return to the previous page. On the final page, click the "Submit" button to submit the form.

## Dependencies

This project uses the following external libraries:

- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)

These are included in the project via CDN links in the HTML files. No additional installation is required.
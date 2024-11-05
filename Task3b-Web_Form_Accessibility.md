Ways to ensure Semantic Correctness and Accessibility

To make the form both semantically correct and accessible, the following considerations were applied:

1. Semantic HTML Tags:
The form uses standard HTML elements like form, label, input, and <button>, which are semantically appropriate for a user input form. Each <input> field is associated with a label element, using the for attribute in <label> to match the id attribute in <input>. This association helps screen readers correctly interpret which label belongs to each field, enhancing accessibility.

2. Accessible Field Attributes:
- Required Fields: The required attribute is added to each field to inform users that these fields must be filled out before submission.
- Aria Attributes: aria-required="true" is added to each input field, which is an additional cue for screen readers, enhancing accessibility for users relying on assistive technology.
- Input Types: Using type="email" for the email field and type="password" for the password field allows browsers to enforce format checks automatically (e.g., requiring "@" in email) and enhances security (e.g., masking passwords).
- Button Element: The <button type="submit"> element is used for submission instead of <input type="submit">, making it more customizable for styling and maintaining semantic consistency.

3. Responsiveness:
Implemented in Task-4, CSS could be added to make the form responsive across different screen sizes, ensuring accessibility on various devices. Responsive design is a crucial aspect of accessibility.

4. Error Prevention:
- Basic validation is enforced at the HTML level to prevent submission errors:
    - minlength="8" on the password field ensures a minimum password length.
    - type="email" enforces email formatting, reducing user errors and making the form more user-friendly.

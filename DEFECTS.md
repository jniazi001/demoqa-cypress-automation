# Defect Report

## Defect 1: Submit button blocked by advertisement overlay on Practice Form page

### Summary
On the Practice Form page, the Submit button is intermittently blocked by a floating advertisement element, preventing normal user interaction.

---

### Environment
- Application: https://demoqa.com/automation-practice-form
- Browser: Chrome (latest)
- OS: Windows 10/11
- Automation Tool: Cypress

---

### Severity: Medium
### Priority: High

Reason:
- Blocks a core user action (form submission)
- Affects both manual and automated testing reliability

---

### Preconditions
- User is on Practice Form page
- Page is fully loaded
- Ads are visible on the right side or bottom overlay

---

### Steps to Reproduce

1. Open browser
2. Navigate to:
   https://demoqa.com/automation-practice-form
3. Fill mandatory fields:
   - First Name: Jahanzeb
   - Last Name: Niazi
   - Email: j.niazi19@gmail.com
   - Gender: Male
   - Mobile: 1234567890
4. Scroll down to bottom of the form
5. Observe the Submit button area
6. Try clicking the Submit button

---

### Expected Result
- Submit button should be clickable at all times
- Form should be submitted successfully
- Confirmation modal should appear

---

### Actual Result
- Submit button is partially covered by advertisement overlay
- Click action is blocked or intercepted
- Form submission fails unless forced click is used in automation

---

### Evidence (Automation Observation)
- Cypress required:
  cy.get('#submit').click({ force: true })

---

### Workaround
Scrolling into view or forcing click bypasses issue, but this is not ideal for real users or stable automation.

---

### Impact
- Affects user experience
- Causes flaky automation tests
- Reduces reliability of test execution in CI pipelines

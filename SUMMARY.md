 1-Page Summary Report

 Project Overview
This project is a Cypress-based UI automation framework built for the DemoQA website https://demoqa.com. The goal was to demonstrate a scalable, maintainable, and realistic autmation structure covering key user interactions.



 Scope Covered
The framework focuses on three main areas:

1. Forms
- Filling and submitting Practice Form
- Validation of required fields
- Confirmation modal verification

2. Select Menu
- Dropdown selection handling
- Value validation

 3. Dialogs / Modals
- Opening and closing modal windows
- UI visibility checks



 Framework Design
- Cypress with JavaScript
- Page Object Model (POM) implemented
- Fixtures used for test data separation
- Custom commands for reusable actions
- Clean folder structure separating:
  - e2e tests
  - page objects
  - fixtures
  - support utilities



 Key Design Decisions
- Used Page Object Model to reduce duplication and improve maintainability
- Used fixtures for test data to avoid hardcoding
- Used resilient selectors where possible to reduce flakiness
- Avoided unnecessary waits; relied on Cypress auto-retry mechanism



 Flakiness Handling
DemoQA contains dynamic UI elements and advertisements which can interfere with automation. This was handled by:
- Using scrollIntoView before actions
- Using visibility assertions
- Using force click only where necessary (documented as workaround)


Defect Identified
A medium-severity defect was found where an advertisement overlay blocks the Submit button on the Practice Form page, impacting both manual and automated execution reliability.



Execution Summary
- Total Tests: 11 
- Passed: 11
- Failed: 0



Conclusion
The framework demonstrates a solid foundation for UI automation using Cypress, with good separation of concerns, reusable components, and real-world handling of unstable UI behavior. It is ready to be extended into a CI/CD pipeline and scaled for regression testing.

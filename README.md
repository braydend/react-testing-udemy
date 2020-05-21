react-testing-udemy

Using Create-React-App to generate a new React project that I can develop and test.

Create React App's `npm test` script runs Jest in watch mode. Watch mode only tests files changed since the last commit!

Enzyme is a tool that can create a virtual DOM. You can search the DOM with jQuery-style selectors, you can also fire synthetic events and access Component's props and state.

Types of test:
- Unit tests
  - Tests one piece of code (usually one function)
- Integration
  - How multiple units work together
- Acceptance / E2E Tests
  - How a user would interact with the app

Testing tips:
- Test behaviours, not implementation
  - Test what the app does, not how the app does it
  - Saves you rewriting tests when you refactor code
- Easy test failure diagnosis
  - Test internal state/function call after every user action
    - This conflicts `Test behaviours, not implementation`, so there is a balance to be found

Snapshot testing:
- A way to "freeze" a component to test against
- These will not be covered in this course, they cannot be used with TDD
- They are quite brittle. They break with every change to the component so it is easy to ignore the failures and update the snapshots incorrectly
- No test intent. If someone breaks a snapshot, should they worry? Hard to tell
- Can be used alongside traditional tests


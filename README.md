# Playwright Automation Framework

A scalable end-to-end test automation framework built using **Playwright, TypeScript, and Node.js**, with Page Object Model (POM), reusable utility methods, and Allure reporting integration.

---

## 🚀 Project Overview

This framework is designed to automate web application testing using Playwright. It follows industry-standard automation practices with reusable components, maintainable test scripts, and CI/CD integration through GitHub Actions.

## 📊 Latest Test Execution Reports

Click the badges below to view the latest published test execution reports.

| Report | Description | Link |
|---|---|---|
| 🟠 Allure Report | Detailed execution report, test history for the published run, steps, and failures | [View Allure Report](https://vedangdeshmukh.github.io/playwrightfremworkapproch1/allure-report/index.html) |
| 🟢 Playwright HTML Report | Test execution summary, errors, screenshots, and attachments | [View Playwright Report](https://vedangdeshmukh.github.io/playwrightfremworkapproch1/playwright-report/index.html) |
| ⚙️ GitHub Actions | Workflow execution logs and historical runs | [View Workflows](https://github.com/VedangDeshmukh/playwrightfremworkapproch1/actions) |

[![Allure Report](https://img.shields.io/badge/Allure-Latest%20Report-orange?logo=allure)](https://vedangdeshmukh.github.io/playwrightfremworkapproch1/allure-report/index.html)
[![Playwright Report](https://img.shields.io/badge/Playwright-Latest%20Report-green?logo=playwright)](https://vedangdeshmukh.github.io/playwrightfremworkapproch1/playwright-report/index.html)
[![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-blue?logo=githubactions)](https://github.com/VedangDeshmukh/playwrightfremworkapproch1/actions)

> Reports are updated when the GitHub Actions workflow successfully publishes a new deployment. These links display the latest published reports, not a historical report archive.

## 🛠️ Technology Stack

- **Programming Language:** TypeScript
- **Automation Framework:** Playwright
- **Runtime Environment:** Node.js
- **Test Runner:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Reporting:** Allure Report and Playwright HTML Report
- **Test Data:** JSON and CSV
- **CI/CD:** GitHub Actions
- **Version Control:** Git and GitHub

## 📁 Project Structure

```text
playwrightfremworkapproch1/
│
├── src/
│   └── pages/
│       └── LoginPage.ts
│
├── tests/
│   └── loginPageTest.spec.ts
│
├── utils/
│   └── ElementUtil.ts
│
├── testdata/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
│
├── allure-results/
├── allure-report/
├── playwright-report/
└── .github/
    └── workflows/
        └── playwright.yml
```

*Note: The structure above is illustrative. Update it as your framework evolves.*

## ⚙️ Framework Features

- Playwright automation using TypeScript.
- Page Object Model implementation.
- Reusable Element Utility methods.
- Centralized locator handling.
- Cross-browser testing configuration.
- Browser window and multiple-tab handling.
- JavaScript popup and iframe handling.
- Dropdown, checkbox, and radio button handling.
- File upload and download validation.
- CSV and JSON test data handling.
- PDF verification.
- Explicit waits and auto-waiting mechanisms.
- Allure and Playwright HTML reporting.
- GitHub Actions CI/CD integration.

## 💻 Prerequisites

Install the following before running the framework:

1. Node.js (20 or later)
2. Java JDK 21 (required for Allure CLI)
3. Visual Studio Code (recommended)
4. Git

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/VedangDeshmukh/playwrightfremworkapproch1.git
```

Navigate to the project:

```bash
cd playwrightfremworkapproch1
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## ▶️ Running Tests

Run all tests:

```bash
npm test
```

Run a specific test file:

```bash
npm run test:file
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

## 📈 Allure Reporting

Generate Allure report:

```bash
npm run allure:generate
```

Open Allure report:

```bash
npm run allure:open
```

## 🌐 Playwright HTML Reporting

Playwright HTML reports are generated automatically after test execution when the HTML reporter is configured.

To open the report locally:

```bash
npx playwright show-report
```

## 🔄 CI/CD – GitHub Actions

This framework is integrated with GitHub Actions.

The workflow supports:

- Manual execution using `workflow_dispatch`.
- Automatic execution on pushes to the `main` branch.
- Pull request execution.
- Automated Playwright test execution.
- Allure report generation.
- Playwright HTML report generation.
- Uploading reports as GitHub Actions artifacts.
- Publishing the latest reports through GitHub Pages.

**Workflow:** `.github/workflows/playwright.yml`

## 📌 Future Enhancements

- API automation using Playwright.
- Advanced test data management.
- Environment-based execution (QA, UAT, Production).
- Authentication and storage state management.
- Parallel execution optimization.
- Enhanced CI/CD reporting.
- Integration with test management tools.

## 👨‍💻 Author

**Vedang Deshmukh**

[GitHub Profile](https://github.com/VedangDeshmukh)

---

⭐ If you find this framework useful, feel free to explore the repository and its latest execution reports.
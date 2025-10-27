# REST Countries API - Back-End Automation Framework

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A comprehensive back-end API automation testing framework built with **Playwright** and **TypeScript** for testing the [REST Countries API](https://restcountries.com/v3.1/all/).

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Reports](#reports)
- [CI/CD Integration](#cicd-integration)
- [Architecture](#architecture)
- [Code Quality](#code-quality)
- [Contributing](#contributing)

---

## 🎯 Overview

This automation framework tests the REST Countries API against three critical scenarios:

1. **Schema Validation** - Ensures API responses conform to the published JSON schema
2. **Country Count Verification** - Confirms there are 195 countries for accurate map building
3. **SASL Recognition** - Validates that South African Sign Language is recognized as an official language

---

## ✨ Features

### Core Capabilities
- ✅ **Type-Safe Testing** - Full TypeScript support with comprehensive type definitions
- ✅ **JSON Schema Validation** - Uses AJV for robust schema validation
- ✅ **Service Layer Pattern** - Reusable API client with clean separation of concerns
- ✅ **Comprehensive Reporting** - Detailed HTML, JSON, and JUnit reports
- ✅ **Error Handling** - Graceful error handling with detailed error messages
- ✅ **Parallel Execution** - Tests run in parallel for faster execution
- ✅ **CI/CD Ready** - GitHub Actions workflow included

### Quality Features
- 🔍 **ESLint Integration** - Code quality enforcement
- 💅 **Prettier Formatting** - Consistent code style
- 📊 **Multiple Report Formats** - HTML, JSON, JUnit XML
- 📸 **Screenshot on Failure** - Automatic screenshot capture
- 🔄 **Auto-Retry** - Configurable retry mechanism for flaky tests
- 📝 **Detailed Logging** - Comprehensive test execution logs

---

## 📁 Project Structure

```
restcountries-api-automation/
├── tests/
│   ├── scenario1-schema-validation.spec.ts      # Schema validation tests
│   ├── scenario2-country-count.spec.ts          # Country count verification
│   └── scenario3-sasl-validation.spec.ts        # SASL recognition tests
├── services/
│   └── ApiClient.service.ts                     # API service layer
├── models/
│   └── Country.model.ts                         # TypeScript type definitions
├── schemas/
│   └── country.schema.ts                        # JSON schema definition
├── utils/
│   ├── ValidationUtils.ts                       # Schema validation utilities
│   └── TestHelpers.ts                           # Test helper functions
├── .github/
│   └── workflows/
│       └── ci.yml                               # GitHub Actions workflow
├── playwright.config.ts                         # Playwright configuration
├── tsconfig.json                                # TypeScript configuration
├── package.json                                 # Dependencies
├── .eslintrc.json                              # ESLint configuration
├── .prettierrc.json                            # Prettier configuration
└── README.md                                    # This file
```

---

## 🔧 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/restcountries-api-automation.git
cd restcountries-api-automation
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- Playwright Test framework
- TypeScript compiler
- AJV JSON schema validator
- ESLint and Prettier
- All other required dependencies

### 3. Install Playwright Browsers (Optional)

While not required for API testing, you can install browsers:

```bash
npx playwright install
```

---

## 🚀 Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Headed Mode

```bash
npm run test:headed
```

### Run Tests in UI Mode (Interactive)

```bash
npm run test:ui
```

### Run Tests in Debug Mode

```bash
npm run test:debug
```

### Run Specific Test File

```bash
npx playwright test scenario1-schema-validation.spec.ts
```

### Run Tests with Specific Tag

```bash
npx playwright test --grep @smoke
```

---

## 📊 Test Scenarios

### Scenario 1: Schema Validation

**Objective**: Ensure API responses conform to the published JSON schema

**User Story**:
```
As a consumer of the API
I want to ensure that the data returned from the API conforms to published schema
So that my application can reliably consume and process the data returned
```

**Test Coverage**:
- ✅ Validates entire response against JSON schema
- ✅ Checks all required fields are present
- ✅ Validates data types and formats
- ✅ Verifies response headers

**Key Assertions**:
- Response status is 200 OK
- Response conforms to country schema
- All required fields present (name, cca2, cca3, independent)
- Content-Type is application/json

---

### Scenario 2: Country Count Validation

**Objective**: Confirm there are exactly 195 countries for accurate map building

**User Story**:
```
As a map builder
I want to confirm that there are 195 countries in the world
So that my maps are accurate and reflect current geopolitical boundaries
```

**Test Coverage**:
- ✅ Counts total countries in response
- ✅ Validates against expected count of 195
- ✅ Provides regional breakdown
- ✅ Lists all country names
- ✅ Analyzes UN membership data

**Key Assertions**:
- Total country count equals 195
- All countries have valid names
- Regional data is present
- Coordinate data available for mapping

---

### Scenario 3: SASL Recognition Validation

**Objective**: Verify South African Sign Language is recognized as an official language

**User Story**:
```
As the Minister of Education
I want to ensure that South African Sign Language (SASL) is included in the list
of South Africa's official languages
So that it is recognized and properly integrated into educational curricula
```

**Test Coverage**:
- ✅ Finds South Africa in API response
- ✅ Extracts official languages list
- ✅ Searches for SASL in multiple formats
- ✅ Validates multilingual status
- ✅ Compares language diversity

**Key Assertions**:
- South Africa is found in response
- Has 11+ official languages
- SASL is included in language list
- Language data is complete

---

## 📈 Reports

### Viewing Test Reports

After running tests, view the HTML report:

```bash
npm run test:report
```

This opens an interactive HTML report with:
- Test execution timeline
- Pass/fail status for each test
- Detailed error messages
- Screenshots on failure
- Test attachments (JSON, TXT reports)

### Report Formats

The framework generates multiple report formats:

1. **HTML Report** (`playwright-report/index.html`)
   - Interactive web-based report
   - Filterable and searchable
   - Includes screenshots and traces

2. **JSON Report** (`test-results/results.json`)
   - Machine-readable format
   - Useful for CI/CD integration
   - Contains detailed test metadata

3. **JUnit XML** (`test-results/junit.xml`)
   - Standard format for CI systems
   - Compatible with Jenkins, Azure DevOps, etc.

4. **Console Output**
   - Real-time test execution logs
   - Formatted with emojis and colors
   - Detailed validation reports

---

## 🔄 CI/CD Integration

### GitHub Actions

The project includes a pre-configured GitHub Actions workflow (`.github/workflows/ci.yml`).

**Features**:
- ✅ Runs on push and pull requests
- ✅ Tests across multiple Node.js versions
- ✅ Uploads test reports as artifacts
- ✅ Fails build on test failures
- ✅ Caches dependencies for faster runs

**Workflow File**:

```yaml
name: API Automation Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x]
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm test
      
      - name: Upload test reports
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: test-reports-${{ matrix.node-version }}
          path: |
            playwright-report/
            test-results/
```

### Running in Docker

**Dockerfile** (create this in your project root):

```dockerfile
FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npm", "test"]
```

**Build and Run**:

```bash
docker build -t restcountries-tests .
docker run restcountries-tests
```

---

## 🏗️ Architecture

### Design Patterns

1. **Service Layer Pattern**
   - `ApiClient.service.ts` encapsulates all API operations
   - Provides reusable methods for API calls
   - Handles error management centrally

2. **Page Object Model (Adapted for API)**
   - Schema definitions separate from tests
   - Model classes for type safety
   - Clear separation of concerns

3. **Utility Pattern**
   - `ValidationUtils.ts` for schema validation
   - `TestHelpers.ts` for common operations
   - Promotes code reusability

### Error Handling Strategy

```typescript
try {
  const response = await apiClient.getAllCountries();
  // Test logic
} catch (error) {
  TestHelpers.log(`Error: ${error}`, 'error');
  throw error;
}
```

All service methods include try-catch blocks with descriptive error messages.

### Validation Strategy

1. **Schema Level** - AJV validates entire response structure
2. **Field Level** - Individual field validation for critical data
3. **Business Logic** - Domain-specific validations (e.g., country count)

---

## 🎨 Code Quality

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

### Formatting

Format code with Prettier:

```bash
npm run format
```

### Type Checking

Check TypeScript types without emitting:

```bash
npm run type-check
```

### Pre-commit Hooks (Recommended)

Install Husky for pre-commit hooks:

```bash
npm install --save-dev husky
npx husky install
npx husky add .husky/pre-commit "npm run lint && npm run type-check"
```

---

## 📚 Best Practices Implemented

### 1. **Code Reusability**
- Service layer for API operations
- Utility classes for common functions
- Shared type definitions

### 2. **Maintainability**
- Clear project structure
- Comprehensive documentation
- Consistent naming conventions

### 3. **Scalability**
- Easy to add new test scenarios
- Modular architecture
- Configuration-driven approach

### 4. **Reliability**
- Robust error handling
- Retry mechanisms
- Comprehensive assertions

### 5. **Observability**
- Detailed logging
- Multiple report formats
- Test attachments

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Tests fail with timeout

**Solution**:
```typescript
// Increase timeout in playwright.config.ts
timeout: 60 * 1000, // 60 seconds
```

**Issue**: Schema validation fails

**Solution**: Check if API schema has changed. Update `schemas/country.schema.ts`

**Issue**: SASL test fails

**Solution**: This is expected if API hasn't updated. Test includes context about 2023 recognition.

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Follow TypeScript best practices
- Add tests for new features
- Update documentation
- Run linter before committing

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Contact

For questions or support, please contact: **TechAssessment@securitease.com**

---

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing the test endpoint
- [Playwright](https://playwright.dev/) for the excellent testing framework
- [AJV](https://ajv.js.org/) for JSON schema validation

---


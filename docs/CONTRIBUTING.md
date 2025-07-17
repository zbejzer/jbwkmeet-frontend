# Contributing to jbwkmeet-frontend

## Branching strategy

This project uses Feature Branch Workflow , with each feature branch following the naming strategy below.

### Branch Format

1. Start branch name with category

- `feature/*`: Feature or feature set
- `bugfix/*`: Resolves an issue
- `refactor/*`: Replaces functionality with equivalent one using different technology

2. Use slash `/` as segment separators

3. End with a short description in kebab-case which sums up the purpose of this specific branch

4. Use dashes `-` to separate words in branch names for best readability

### Examples

- `feature/issue-42/create-new-button-component`
- `bugfix/issue-342/button-overlap-form-on-mobile`
- `bugfix/no-ref/registration-form-not-working`

## Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org) and [Angular](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit) guidelines, combining and simplifying when needed.

Each commit message consists of a **header** and a **body**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```text
<type>(<scope>): <subject>
<BLANK LINE>
<body>
```

The **header** is mandatory and the **scope** of the header is optional.

### Type

Must be one of the following:

- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `text`: Changes in text content that don't change site structure
- `chore`: Everything else (cleaning useless code etc.)

### Examples

- `feat(navbar): add new button component; add new button components to templates`
- `fix(investment view): add the stop directive to button component to prevent propagation`
- `refactor: rewrite button component in TypeScript`
- `docs: write button documentation`

## Style Guide

### Folder Structure

Follow [structure proposed by Mozilla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files#what_structure_should_a_website_have)

### HTML/CSS

Follow [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)

### JavaScript

Follow [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

### Script Names

Follow the [ESLint convention](https://eslint.org/docs/latest/contribute/package-json-conventions#names). Npm script names MUST contain only lower case letters, : to separate parts, - to separate words, and + to separate file extensions. Each part name SHOULD be either a full English word (e.g. coverage not cov) or a well-known initialism in all lowercase (e.g. wasm).

#### Examples

- `sass-embedded:watch`

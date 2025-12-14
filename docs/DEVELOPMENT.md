# Development Guide

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/evgenygurin/codegen-autonomous-skeleton.git
cd codegen-autonomous-skeleton

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your values
```

### Running Locally

```bash
# Development mode (with hot reload)
npm run dev

# Build
npm run build

# Run production build
node dist/index.js
```

### Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Code Quality

```bash
# Type check
npm run typecheck

# Lint
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## Project Structure

```
.
├── .codegen/           # Codegen configuration
│   ├── rules.md        # Agent rules
│   ├── context.md      # Project context
│   └── decisions/      # Decision logs
├── .github/
│   └── workflows/      # CI/CD pipelines
├── docs/               # Documentation
├── src/                # Source code
│   ├── index.ts        # Entry point
│   ├── types/          # Type definitions
│   └── utils/          # Utilities
├── tests/              # Tests
└── package.json
```

## Coding Conventions

### TypeScript

- Use strict mode
- Prefer `const` over `let`
- Always specify types explicitly
- Use interfaces for object shapes
- Use enums for fixed sets of values

### Naming

- **Files**: kebab-case (`user-service.ts`)
- **Variables/Functions**: camelCase (`getUserById`)
- **Classes/Types**: PascalCase (`UserService`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`)

### Imports

```typescript
// External dependencies first
import express from 'express';
import dotenv from 'dotenv';

// Internal modules with @ alias
import { logger } from '@/utils/logger';
import { Config } from '@/types';

// Relative imports last
import { helper } from './helper';
```

### Comments

```typescript
/**
 * JSDoc for public APIs
 * @param id - User identifier
 * @returns User object
 */
export function getUser(id: string): User {
  // Inline comments for complex logic only
  const cached = cache.get(id);
  return cached || fetchUser(id);
}
```

## Git Workflow

### Branch Naming

- Feature: `codegen/issue-123-add-feature`
- Bug fix: `codegen/issue-456-fix-bug`
- Refactor: `codegen/issue-789-refactor-module`

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `test`: Tests
- `refactor`: Code refactoring
- `chore`: Maintenance

**Examples:**
```
feat(api): add health check endpoint
fix(logger): handle null messages
docs(readme): update installation steps
```

## Working with Codegen

### Creating Tasks

1. Create issue in Linear/GitHub
2. Add label: `codegen-agent`
3. Provide clear requirements
4. Wait for agent to auto-assign

### Task Template

```markdown
Title: Add feature X

Description:
- Requirement 1
- Requirement 2
- Requirement 3

Acceptance Criteria:
- [ ] Criterion 1
- [ ] Criterion 2

Labels: enhancement, codegen-agent
Priority: Medium
```

### Monitoring Progress

Codegen will:
- Post status updates in comments
- Create subtasks automatically
- Log decisions in `.codegen/decisions/`
- Create PR when ready

## Troubleshooting

### Tests Failing

```bash
# Clear Jest cache
npm test -- --clearCache

# Run specific test
npm test -- tests/example.test.ts
```

### Type Errors

```bash
# Check types without building
npm run typecheck

# Rebuild
rm -rf dist && npm run build
```

### Coverage Below Threshold

```bash
# See uncovered lines
npm run test:coverage
open coverage/lcov-report/index.html
```

## CI/CD

### GitHub Actions

- **CI**: Runs on every push/PR
  - Type checking
  - Linting
  - Tests
  - Coverage validation

- **Codegen Trigger**: Auto-assigns issues

### Required Checks

Before merge:
- ✅ All tests pass
- ✅ Coverage ≥ 80%
- ✅ No linting errors
- ✅ Types valid
- ✅ Human review approved

## Best Practices

1. **Write tests first** (TDD when possible)
2. **Keep functions small** (< 50 lines)
3. **Avoid magic numbers** (use constants)
4. **Handle errors gracefully**
5. **Log important actions**
6. **Update docs** with code changes
7. **Review PRs carefully**

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Codegen Docs](https://docs.codegen.com)
- [Linear API](https://developers.linear.app/docs)

---

**Questions?** Create an issue or check `.codegen/learned-patterns.md` for common solutions.
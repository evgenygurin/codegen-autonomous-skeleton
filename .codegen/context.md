# Project Context

## 🎯 Project Overview
Autonomous development project using Codegen AI agents for self-sufficient software development.

## 🏗️ Architecture
- **Type**: TypeScript/Node.js application
- **Testing**: Jest
- **Linting**: ESLint + Prettier
- **CI/CD**: GitHub Actions

## 📝 Code Conventions
- **Style**: Airbnb TypeScript
- **Naming**: camelCase for variables/functions, PascalCase for classes/types
- **File structure**: Feature-based organization
- **Imports**: Absolute imports with `@/` prefix

## 🧪 Testing Strategy
- Unit tests: `tests/*.test.ts`
- Coverage target: 80%+
- Test naming: `describe('Component', () => it('should do something'))`

## 📚 Documentation Standards
- JSDoc for public APIs
- README for high-level overview
- Architecture docs in `docs/`
- Inline comments for complex logic only

## 🔧 Development Workflow
1. Create issue in Linear
2. Assign to codegen agent
3. Agent creates feature branch
4. Agent implements + tests + docs
5. Agent creates PR
6. Human reviews and merges

## 🌳 Git Conventions
- Branch naming: `codegen/issue-{number}-{slug}`
- Commit format: `type(scope): description`
- Types: feat, fix, docs, test, refactor, chore

## 🔗 Integrations
- **Linear**: Task management
- **GitHub**: Code hosting + CI/CD
- **Codegen**: Autonomous development

## 📦 Dependencies
- Production: TypeScript, Node.js 20+
- Development: Jest, ESLint, Prettier
- Tools: GitHub Actions, Linear API

## 🎓 Learning Resources
- TypeScript docs: https://www.typescriptlang.org/docs/
- Jest docs: https://jestjs.io/docs/getting-started
- Project patterns: See `.codegen/learned-patterns.md`
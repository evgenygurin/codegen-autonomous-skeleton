# Autonomous Multi-Agent Development System

## 🤖 Execution Mode
- **Mode**: autonomous_multi_agent
- **Auto-spawn agents**: ENABLED
- **Max concurrent agents**: 10
- **Max nesting depth**: 5
- **Require approval**: DISABLED
- **Continue until complete**: ENABLED
- **Self-healing**: ENABLED

## 🎯 Agent Autonomy Level: MAXIMUM

### Decision Making
- Auto-decide: TRUE
- Confidence threshold: 0.6
- Ask human ONLY for:
  - Architectural breaking changes
  - Data loss risk
  - Security policy changes

## 👥 Sub-Agent Creation

### ALWAYS create specialized agents for:
- Tasks of medium/high complexity
- Parallel work opportunities
- Specialized skills needed

### Available Agent Types:
1. **analyzer** - Requirements and code analysis
2. **implementer** - Code implementation
3. **tester** - Test writing and execution
4. **reviewer** - Code review
5. **debugger** - Bug hunting and fixing
6. **refactorer** - Code refactoring
7. **documenter** - Documentation writing

## 🔄 Autonomous Workflow

### 1. Auto-Assign Task
```
- Auto-claim tasks with labels: bug, enhancement, refactor, tests-needed
- Create feature branch immediately: codegen/issue-{number}-{slug}
- Post comment: "🤖 Codegen agent assigned. Starting autonomous development..."
```

### 2. Deep Analysis (spawn: analyzer)
```
Analyze:
- Current codebase structure
- Existing patterns and conventions
- Related issues and PRs
- Dependencies and integrations
- Test coverage gaps

Output: Analysis summary in issue comment
```

### 3. Task Decomposition
```
IF complexity > medium:
  - Break into subtasks (3-7 items)
  - Create sub-issues in Linear
  - Auto-assign to specialized agents
  - Update parent issue with task tree
```

### 4. Parallel Implementation
```
Spawn implementer agents:
  - Count: auto (based on subtasks)
  - Coordination: autonomous
  - Communication: via comments

Each agent:
  - Works on isolated subtask
  - Commits with descriptive messages
  - Updates subtask status
```

### 5. Continuous Testing (spawn: tester, background)
```
Parallel to implementation:
  - Write unit tests
  - Write integration tests
  - Run tests continuously
  
On test failure:
  - Spawn debugger agent
  - Auto-fix and retry
  - Loop until green
  - Max iterations: 10
```

### 6. Self-Review (spawn: reviewer)
```
Review checklist:
  - Code quality and style
  - Performance implications
  - Security concerns
  - Test coverage
  - Documentation completeness

On issues found:
  - Create review comments
  - Auto-fix if confidence > 0.8
  - Request human review if critical
```

### 7. Documentation (spawn: documenter)
```
Update:
  - API documentation
  - Architecture diagrams
  - CHANGELOG.md
  - README.md if needed
  - Inline code comments
```

### 8. Create Pull Request
```
PR Template:
  - Title: Descriptive, linked to issue
  - Body: Changes summary, testing done, checklist
  - Labels: auto-generated based on changes
  - Reviewers: auto-request from CODEOWNERS
  
Auto-merge: DISABLED (requires human approval)
```

### 9. CI/CD Monitoring
```
Monitor:
  - CI pipeline status
  - Test results
  - Code coverage
  - Security scans

On failure:
  - Analyze logs
  - Auto-fix and push
  - Max retries: 5
  - If still failing: request human help
```

### 10. Review Response
```
On human review comments:
  - Parse and understand feedback
  - Spawn implementer for fixes
  - Push updates
  - Respond to comments
  - Loop until approved
```

## 🐛 Bug Fix Workflow

### Autonomous Bug Resolution
```
1. Reproduce (spawn: debugger)
   - Create failing test case
   - Verify bug exists
   - Document reproduction steps

2. Root Cause Analysis
   - Use debugger/profiler
   - Trace execution
   - Identify failing component

3. Generate Solutions (spawn: 3 implementers in parallel)
   - Approach 1: Quick fix
   - Approach 2: Proper fix
   - Approach 3: Fix + refactor

4. Evaluate & Select
   - Compare solutions by:
     - Correctness
     - Performance
     - Maintainability
     - Test coverage
   - Auto-select best

5. Implement & Verify
   - Apply chosen solution
   - Run full test suite
   - Run performance benchmarks
   - Loop until all green

6. Regression Prevention
   - Add regression test
   - Update documentation
   - Log in learned-patterns.md
```

## 🔍 Proactive Maintenance

### Daily Automated Tasks
```
Schedule: Every day at 02:00 UTC

1. Code Quality Scan
   - Detect code smells
   - Find unused code
   - Identify duplication
   - Check complexity metrics

2. Dependency Audit
   - Check for updates
   - Scan for vulnerabilities
   - Test compatibility

3. Test Coverage Analysis
   - Find uncovered code
   - Identify missing edge cases
   - Generate test suggestions

4. Documentation Sync
   - Verify docs match code
   - Update stale examples
   - Fix broken links

5. Auto-Create Issues
   - For each finding:
     - Create Linear issue
     - Prioritize automatically
     - Add relevant labels
   
6. Auto-Fix Low-Risk Issues
   - If risk = low AND impact = positive:
     - Implement fix
     - Create PR
     - Label: auto-improvement
```

## 💬 Communication Protocol

### Language
- Primary: Russian (русский)
- Code comments: English
- Git messages: English

### Status Updates
Post updates ONLY on:
- Milestone completed
- Blocked (after 3 retry attempts)
- Critical error
- Human input needed

### Update Format
```markdown
## 🤖 Codegen Status Update

**Task**: [Issue title]
**Status**: [In Progress/Blocked/Completed]
**Progress**: [X/Y subtasks completed]

### Completed
- ✅ Item 1
- ✅ Item 2

### In Progress
- 🔄 Item 3 (Agent: implementer-2)
- 🔄 Item 4 (Agent: tester-1)

### Next Steps
- [ ] Item 5
- [ ] Item 6

**Active Agents**: 3
**Estimated Completion**: 25 minutes
```

### Decision Logging
Log all significant decisions to `.codegen/decisions/{issue-number}.md`:
```markdown
# Decision Log: Issue #123

## Decision 1: Architecture Choice
**Context**: Need to implement caching
**Options**: Redis vs In-memory
**Chosen**: Redis
**Reasoning**: Better for distributed system, persistence
**Confidence**: 0.85

## Decision 2: ...
```

## 🛡️ Safety & Limits

### Protected Operations
- **Auto-merge**: DISABLED (always require human approval)
- **Protected files**: .env*, *.key, *.pem, .github/workflows/*
- **Breaking changes**: Require human review
- **Database migrations**: Require human review

### Resource Limits
- Max files per PR: 200
- Max lines changed: 5000
- Max execution time: 2 hours
- Max cost per task: $10
- Max parallel agents: 10
- Max retry attempts: 5

### Quality Gates
ALL must pass before creating PR:
- ✅ All tests green
- ✅ Code coverage ≥ 80%
- ✅ No security vulnerabilities
- ✅ No linting errors
- ✅ Documentation updated
- ✅ CHANGELOG updated

## 🧠 Learning System

### Learn From
- Successful implementations
- Failed attempts (log why)
- Human review feedback
- Test failures and fixes
- Performance bottlenecks

### Knowledge Base
Update `.codegen/learned-patterns.md`:
```markdown
## Pattern: [Name]
**Context**: When to use
**Solution**: How to implement
**Example**: Code snippet
**Learned from**: Issue #123
**Success rate**: 95%
```

### Apply Learning
- Use learned patterns in new tasks
- Suggest improvements based on history
- Avoid repeated mistakes
- Share knowledge across agents

## 🚀 Triggers & Automation

### Auto-Assign Conditions
```yaml
Auto-claim tasks when:
  - label: bug
  - label: enhancement
  - label: refactor
  - label: tests-needed
  - label: documentation
  - label: codegen-agent
  - priority: high
  - priority: critical
  - assignee: none (unassigned tasks)
```

### Auto-Create Tasks
```yaml
Create issues when detected:
  - Missing tests (coverage < 80%)
  - Missing documentation
  - Code smells (complexity > 15)
  - Security vulnerabilities
  - Dependency updates available
  - Performance regressions
  - Broken links in docs
```

## 📊 Success Metrics

Track and optimize:
- Task completion time
- First-time success rate
- Test coverage improvement
- Code quality scores
- Human intervention rate
- Cost per task
- Agent efficiency

Target KPIs:
- Task completion: < 1 hour for medium tasks
- First-time success: > 80%
- Test coverage: > 80%
- Human intervention: < 20% of tasks

## ⚡ CRITICAL RULES

### NEVER
- ❌ Wait for approval (except auto-merge)
- ❌ Stop on first error (auto-fix and retry)
- ❌ Create incomplete PRs
- ❌ Skip tests
- ❌ Leave TODO comments without creating issues
- ❌ Hardcode secrets
- ❌ Break existing tests

### ALWAYS
- ✅ Work until task is 100% complete
- ✅ Create specialized agents for complex work
- ✅ Run full test suite before PR
- ✅ Update documentation
- ✅ Log important decisions
- ✅ Follow existing code patterns
- ✅ Write descriptive commit messages
- ✅ Add regression tests for bugs
- ✅ Clean up after yourself
- ✅ Learn from mistakes

---

**Version**: 1.0.0
**Last Updated**: 2025-12-14
**Maintained by**: Codegen Autonomous System
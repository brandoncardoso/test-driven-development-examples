# Test Driven Development (TDD) Examples
Examples from "Test-Driven Development By Example" by Kent Beck, in typescript.

Each commit is one step in the TDD process, as described in the book. There is a branch for each part/chapter, see the READMEs in the related src directory. 

The commits in this repository do not reflect proper git usage while following TDD. You should probably not commit purposefully failing tests or code that does not compile, especially if you are working on the same repository/branch as other people.

## Setup
To get started, run `npm install` to install all dependencies.

### Part 1
Run tests with `npm run test:part1` or `npm run test:part1:dev` to automatically run tests after new changes.

### Part 2
"Part 2: The xUnit Problem" involves creating our own testing framework, so has separate commands to run the tests that don't use mocha.

Run the tests with `npm run test:part2` or `npm run test:part2:dev` to automatically run tests after new changes.

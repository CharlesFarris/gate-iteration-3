# gate-iteration-3

This repository implements the third iteration of the `main` branch gate.

## Iteration 1

- Create a GitHub ruleset for the `main` branch
  - Require a pull request

## Iteration 2

- Add GitHub Copilot pull request reviews
- Require conversation resolution before merging

## Iteration 3

- Add GitHub action
  - Add Biome.js linting & formatting check
  - Add Typescript build check
  - Add unit test execution check
- Require GitHub action success

In addition to extending the scope of the `main` branch gate, this iteration also adds some guardrails:

- Automatic formatting on save
- Better Intellisense resolution

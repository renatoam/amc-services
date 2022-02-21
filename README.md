# AMC Services

## Running project

This project uses `yarn` as its package manager, `Next JS` as its framework and `Typescript` as programming language.

For development mode, run:

`yarn dev`

To run linter, do:

`yarn lint`

To generate build, run:

`yarn build`

To init server over the build, after the build command, run:

`yarn start`

## Linting

After every `commit` command, the staged files will be linted using `lint-staged`.
As well every `commit` message will be linted using `git-commit-msg-linter`.
`prettier` is used for formatting.

## Git Workflow

Our adopted Git workflow is "merge based", that is, when working with a (possibly) shared branch, we'll work using `git merge` strategy rather than `git rebase`. But there is no restrictions for `git rebase` usage in a non-shared branch.

**Reference**: [Git team workflows: merge or rebase?](https://www.atlassian.com/git/articles/git-team-workflows-merge-or-rebase)

Our default and stable branch is `main` and our development branch is `develop`. All _pull requests_ should be opened targeting `develop`, respecting all the requirements. Only the repository administrator can merge code into `main`.

## CI/CD

### Coverage check

To check project coverage, we've chose `Codecov` because it has a basic plan that allows use it for _private_ repos. I can generate (upload) up to **250 reports per month for free**. I could choose `Coveralls` for public repos, but there is a charge for private repos.

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
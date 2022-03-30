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

## Styling

### Material-UI and Emotion

[explain why mui and why emotion instead SC, ref: https://mui.com/guides/styled-engine/]
Basically, I'll need many complex components in the future and MUI has already many of them ready to use.
Styled Components still doesn't work fined with SSR if used as style engine for MUI.
Emotion is very similar to SC;

### Icons

We've opted for using Material Icons because they're slightly more performatic. In addition, we can use SVG Icons wrapper to create new custom icons.

**Importing approach**

Following the Material-UI documentation, using default imports is better than use named imports, because we just import the icon itself, not all the lib. Reference: [Materia-UI Docs](https://mui.com/guides/minimizing-bundle-size).

```jsx
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
```

But we agree that use named imports is better approach to Dev Experience, so in order to mitigate this, we use a pattern similar to barrell pattern:

```jsx
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";

export { AccessAlarmIcon, ThreeDRotation };
```

We centralize the imports into a index file and re-export using named export.

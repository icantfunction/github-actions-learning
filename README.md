# GitHub Actions Learning Lab

A small public repository for experimenting with GitHub Actions safely.

## Start here

Open the **Actions** tab to watch the **Node.js CI** workflow. It tests the project
on Node.js 18, 20, and 22, checks the files it received, lints, tests with coverage,
uploads the coverage report, and builds a production bundle.

## Try changing it

1. Edit `.github/workflows/node-ci.yml`.
2. Change a command or add another step.
3. Commit the change to `main` (or open a pull request).
4. Watch the workflow run in the **Actions** tab and inspect its logs.

The workflow runs automatically on pushes and pull requests to `main`, and can also be run manually.

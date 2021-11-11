# Konamimojisplosion

[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)
![TypeScript: Strict](https://img.shields.io/badge/typescript-strict-brightgreen.svg)
[![NPM version](https://badge.fury.io/js/konamimojisplosion.svg)](http://badge.fury.io/js/konamimojisplosion)

> ⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ 🅱 🅰
>
> 🎉 ✨ 🎆

Hooks [konami-code-js](https://github.com/Haeresis/konami-code-js) to trigger [emojisplosion](https://github.com/JoshuaKGoldberg/emojisplosion).

If a user types in the Konami Code on their keyboard or taps it on their mobile phone, emojisplosions will start firing on the page.
Triggering the Konami Code again will stop the emojisplosions.

> Check it out on [Codecademy Docs!](https://codecademy.com/resources/docs)

## Usage

You can import and use this as a standalone function, a React hook, or a React class component.

### Standalone Function

```tsx
import { initializeKonamimojisplosion } from 'konamimojisplosion';

initializeKonamimojisplosion();
```

### React Hook

```tsx
import { useKonamimojisplosion } from 'konamimojisplosion';

function MyComponent() {
    useKonamimojisplosion();

    return (
      <main>
        Hello, world!
      </main>
    );
  }
}
```

### React Class Component

> Tip: the class component just calls the hook internally.

```tsx
import { Konamimojisplosion } from 'konamimojisplosion';

class MyComponent {
  render() {
    return (
      <main>
        <Konamimojisplosion />
        Hello, world!
      </main>
    );
  }
}
```

## Development

Requires:

- [Node.js](https://nodejs.org) >14
- [Yarn](https://yarnpkg.com/en)

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo):

```shell
git clone https://github.com/<your-name-here>/konamimojisplosion
cd konamimojisplosion
yarn
```

### Contribution Guidelines

We'd love to have you contribute!
Check the [issue tracker](https://github.com/Codecademy/konamimojisplosion/issues) for issues labeled [`accepting prs`](https://github.com/Codecademy/konamimojisplosion/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22accepting+prs%22) to find bug fixes and feature requests the community can work on.
If this is your first time working with this code, the [`good first issue`](https://github.com/Codecademy/konamimojisplosion/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+) label indicates good introductory issues.

Please note that this project is released with a [Contributor Covenant](https://www.contributor-covenant.org).
By participating in this project you agree to abide by its terms.
See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

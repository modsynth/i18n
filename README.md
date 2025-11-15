# i18n Module

[![npm version](https://badge.fury.io/js/%40modsynth%2Fi18n.svg)](https://www.npmjs.com/package/@modsynth/i18n)
[![npm downloads](https://img.shields.io/npm/dm/@modsynth/i18n.svg)](https://www.npmjs.com/package/@modsynth/i18n)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Internationalization module with i18next and formatters

Part of the [Modsynth](https://github.com/modsynth) ecosystem.

## Features

- i18next integration
- React hooks (useTranslation)
- TypeScript support
- ✨ **Date/Number Formatters**: Locale-aware formatting utilities (v0.2.0)
- ✨ **Language Sync**: Automatic language persistence (v0.2.0)

## What's New in v0.2.0

- **Formatters**: Date and number formatting helpers
- **Language Sync**: localStorage-based language persistence

## Installation

```bash
npm install @modsynth/i18n i18next react-i18next
```

## Usage

```typescript
import { useTranslation } from '@modsynth/i18n';

function App() {
  const { t } = useTranslation();
  return <h1>{t('welcome')}</h1>;
}
```

## Version

Current version: `v0.2.0`

## License

MIT

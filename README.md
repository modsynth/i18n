# i18n Module

> Internationalization module (i18next)

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
v0.1.0

## License
MIT

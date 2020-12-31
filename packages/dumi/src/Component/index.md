# Component

The `<Icon />` is wrapped by `<div>`.

## Default

```tsx
import React from 'react';
import Icon from 'icon-c4d';
import icon from './icon.png';

export default () => <Icon src={icon} />;
```

## Size

```tsx
import React from 'react';
import Icon from 'icon-c4d';
import icon from './icon.png';

export default () => (
  <div style={{ display: 'flex' }}>
    <Icon size={32} src={icon} />
    <Icon size={48} src={icon} />
    <Icon size={64} src={icon} />
    <Icon size={96} src={icon} />
  </div>
);
```

## Interval

```tsx
import React from 'react';
import Icon from 'icon-c4d';
import icon from './icon.png';

export default () => (
  <div style={{ display: 'flex' }}>
    <Icon interval={0} src={icon} />
    <Icon interval={20} src={icon} />
    <Icon interval={40} src={icon} />
    <Icon interval={60} src={icon} />
  </div>
);
```

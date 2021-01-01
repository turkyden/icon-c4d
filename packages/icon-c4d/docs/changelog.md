## Changelog

A icon c4d style cpmponent deved with react.

## 📦 Install

```bash
yarn add icon-c4d
```

or you can:

```bash
npm install icon-c4d
```

## 🚀 Usage

```jsx | pure
import Icon from 'icon-c4d';
import icon from '../assets/icon.png';

function App() {
  return (
    <Icon size={64} interval={10} src={icon} />
  )
}
```

## 📔 API

| Params     | Description                                  | Type     | Default |
|------------|:----------------------------------------------|:----------|:---------|
| async | The async properties of extarnal resources `<script>` | `boolean` | true       |
| media | The media properties of extarnal resources `<link>`, support `all`/`screen`/`print`/`handheld` | `string` | all       |
| target | The DOM or Refs of container which need to load the `<img>` | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      |

## 🔨 Contribute

```bash
yarn install
```

```bash
yarn start
```

## License

MIT
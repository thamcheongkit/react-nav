# react-nav

![Demo](https://user-images.githubusercontent.com/9593756/194340929-b6e1ea5e-daea-4fb5-8b2b-671e5d84be1d.mp4)

### Usage:

```jsx
<Nav.Group>
  <Nav.List>
    <Nav navId={1}>😀 People</Nav>
    <Nav navId={2}>🐵 Animals</Nav>
    <Nav navId={3}>🚀 Space</Nav>
    <Nav navId={4}>🍉 Food</Nav>
  </Nav.List>

  <Nav.Panels>
    <Nav.Panel navId={1}>
      <div>😀 Grinning Face</div>
      {{/* ... */}}
    </Nav.Panel>
    <Nav.Panel navId={2}>
      <div>🙈 See-No-Evil Monkey</div>
      {{/* ... */}}
    </Nav.Panel>
    <Nav.Panel navId={3}>
      <Div>🚀 Rocket</Div>
      {{/* ... */}}
    </Nav.Panel>
    <Nav.Panel navId={4}>
      <Div>🍇 Grapes</Div>
      {{/* ... */}}
    </Nav.Panel>
  </Nav.Panels>
</Nav.Group>
```

### Build

```
$ pnpm i
$ pnpx nx build react-nav
```

### Install library locally

```
$ npm i $PWD/dist/packages/react-nav
```

### Browse storybook

```
$ pnpm i
$ pnpx nx storybook react-nav
```

### Small footprint

```
  index.js 3.638 KB (uncompress)
  index.cjs 3.83 KB (uncompress)
⚡ Done in 3.86s
```

### Dependencies

- react
- react-transition-group


### License

This project is licensed under the terms of the MIT license.

# Mocks

This document contains recipes for React contexts you will probably want to mock while writing tests or stories.
This list includes recipes for NextJS routing, Redux and Formik.
i18n should work out of the box in both Jest and Storybook.

## Storybook

### NextJS Router

```JSX
import { withNextRouter } from 'storybook-addon-next-router'

export default {
  title: 'Pages/ExamplePage',
  component: ExamplePage,
  decorators: [
    withNextRouter({
      path: '/',
      asPath: '/',
      query: {},
    }),
  ],
} as Meta
```

### Formik

```JSX
import { Formik, Form } from 'formik'

export default {
  title: 'Component/ExampleForm',
  component: ExampleForm,
  decorators: [
    Story => <Formik onSubmit={...} initialValues={...}><Form><Story /></Form></Formik>
  ],
} as Meta
```

### Redux

```JSX
import { Provider } from 'react-redux'
import store from './store'

export default {
  title: 'Component/ExampleForm',
  component: ExampleForm,
  decorators: [
    Story => <Provider store={store}><Story /></Provider>
  ],
} as Meta
```

## Jest

### NextJS Router

```JSX
import nextRouter from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({ route: '/', query: {} })),
}))
```

### Formik

It might be a good idea to separately export `initialValues`, `onSubmit`, `validationSchema` and
any other props you're using to make them easier to resuse in your tests.

```JSX
import { Formik } from 'formik'
const onSubmit = jest.fn();

render(
    <Formik initialValues={...} validationSchema={...} onSubmit={onSubmit}>
        <ComoponentUnderTest />
    </Formik>
)
```

### Redux

```JSX
import { Provider } from 'react-redux'
import store from './store'

render(
  <Provider store={store}>
    <ComoponentUnderTest />
  </Provider>
)
```

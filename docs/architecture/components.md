---
id: components
title: Components
sidebar_label: components
---

Components are the building blocks of our applications, think about them as functions that return a piece of the page to be rendered

## Example

```jsx
export function ItemList() {
  const { items, getItems } = useItemsFacade();

  useEffect(() => {
    getItems();
  }, [getItems]);

  return <div>{JSON.stringify(items)}</div>;
}
```

## Guideliness

- Use css modules instead of inline styles
- Use functional components instead of class components

## Unit testing

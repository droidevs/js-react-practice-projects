# Use Window Resize Hook

This custom React hook allows you to track the dimensions of the browser window.

## How to Use

1.  **Import the hook:**

    ```javascript
    import useWindowResize from './useWindowResize';
    ```

2.  **Call the hook in your component:**

    ```javascript
    const { width, height } = useWindowResize();
    ```

3.  **Use the `width` and `height` values in your component:**

    ```jsx
    <div>
      <h1>Window Dimensions</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
    ```

## Example

```jsx
import useWindowResize from './useWindowResize';

export default function MyComponent() {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h1>Window Dimensions</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}
```

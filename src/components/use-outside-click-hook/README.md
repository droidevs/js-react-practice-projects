# Use Outside Click Hook

This custom React hook allows you to detect clicks outside of a specified element.

## How to Use

1.  **Import the hook:**

    ```javascript
    import useOutsideClick from './useOutsideClick';
    ```

2.  **Create a ref for the element you want to track:**

    ```javascript
    const ref = useRef();
    ```

3.  **Call the hook in your component:**

    ```javascript
    useOutsideClick(ref, () => {
      // Your code to handle the outside click here
      console.log('Clicked outside!');
    });
    ```

4.  **Attach the ref to your element:**

    ```jsx
    <div ref={ref}>
      {/* Your component's content */}
    </div>
    ```

## Example

```jsx
import { useRef, useState } from 'react';
import useOutsideClick from './useOutsideClick';

export default function MyComponent() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(true);

  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Click Outside Me!</h1>
          <p>This content will disappear if you click outside of this box.</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
```

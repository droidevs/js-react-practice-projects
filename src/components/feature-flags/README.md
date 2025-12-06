# Feature Flags Project

This project demonstrates a simple feature flag system in React. It uses a combination of React Context and a mock API call to conditionally render different components based on the feature flags received.

## How it Works

1.  **`FeatureFlagsGlobalState` (context/index.jsx):**
    *   Creates a `FeatureFlagsContext` to hold the feature flag data.
    *   Fetches the feature flags from a mock API call (`featureFlagsDataServiceCall`) when the component mounts.
    *   Stores the fetched flags in a state variable `enabledFlags`.
    *   Provides the `enabledFlags` and a `loading` state to its children components through the context.

2.  **`featureFlagsDataServiceCall` (data.js):**
    *   This function simulates an API call by returning a promise.
    *   The promise resolves with a predefined object (`dummyApiResponse`) containing the feature flags.

3.  **`FeatureFlags` (index.jsx):**
    *   This is the main component that consumes the `FeatureFlagsContext`.
    *   It retrieves the `enabledFlags` from the context.
    *   It has a list of components to render, each associated with a specific feature flag key.
    *   It maps through the list of components and only renders a component if its corresponding feature flag is set to `true` in `enabledFlags`.

## Conditionally Rendered Components

The following components are rendered based on the feature flags:

*   `LightDarkMode`
*   `TicTacToe`
*   `RandomColor`
*   `Accordian`
*   `TreeView`

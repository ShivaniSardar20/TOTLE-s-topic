# Topic Search by TOTLE - Frontend Developer Intern Submission

This project is a React component that displays a list of topics and allows for real-time filtering through a search input. It serves as a simulation of TOTLE's topic browsing UI for their Catalogue Management System, built as part of the Frontend Developer Intern coding submission.

## Features

-   **Real-time Filtering**: Topics are filtered instantly as the user types.
-   **Case-Insensitive Search**: Matches topics regardless of casing.
-   **Debounced Input**: Search logic is debounced for optimal performance, preventing excessive re-renders on every keystroke.
-   **Search Term Highlighting**: The matching part of the topic name is visually highlighted.
-   **Dynamic Animations**: Topic cards appear with a subtle, staggered fade-in animation.
-   **Helpful UX**: A clear button allows for quick search resets, and a user-friendly message is displayed when no topics are found.
-   **Clean & Responsive UI**: A modern, dark-themed interface built with Tailwind CSS that works well on all screen sizes.
-   **TypeScript**: Fully typed for better code quality and maintainability.

## Tech Stack

-   **React**: For building the user interface.
-   **TypeScript**: For static typing.
-   **Tailwind CSS (via CDN)**: For styling the application.

## Getting Started

No complex build setup is required to run this project.

1.  **Download the files**: Download or clone all the project files to a local directory.
2.  **Open in Browser**: Simply open the `index.html` file in your web browser.

For the best experience, it's recommended to serve the files using a simple local server to avoid any potential browser security issues with ES modules. You can use the VS Code "Live Server" extension or run the following command in the project directory:

```bash
npx serve .
```

## Code Structure

The project is organized into logical folders and files:

-   `index.html`: The main entry point of the application. It includes the necessary scripts and basic HTML structure.
-   `index.tsx`: The main React script that renders the `App` component into the DOM.
-   `App.tsx`: The root component of the application. It sets up the main layout, header, and footer.
-   `constants.ts`: Contains the static in-memory array of topic data.
-   `types.ts`: Defines the TypeScript types used throughout the application (e.g., `Topic`).

### `components/`

This directory contains the reusable React components.

-   `TopicSearch.tsx`: The core component that manages the search state, filtering logic, and renders the list of topics.
-   `SearchInput.tsx`: A controlled input component with a search icon and a clear button.
-   `TopicCard.tsx`: A component that displays a single topic with its category and handles the highlighting of the search query.

### `hooks/`

This directory contains custom React hooks.

-   `useDebounce.ts`: A reusable hook that debounces a value, used to delay the search filter execution and improve performance.

## Explanation Video

[Link to 2-minute video explaining the case study and code structure will be added here.]

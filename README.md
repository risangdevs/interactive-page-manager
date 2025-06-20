# Interactive Page Manager

## Description

The Interactive Page Manager is a React application that allows users to manage a series of form pages with features like drag-to-reorder, adding new pages with custom names and icons, and context menus per page for actions like renaming, duplicating, setting as first, and deleting. All application state is managed in memory.

This project focuses on providing a clean, intuitive, and responsive user interface for managing a sequence of pages.

## Features

*   **Page Tabs:** Displays pages as selectable tabs.
*   **Active Page Highlight:** Clearly indicates the currently active/selected page.
*   **Drag & Drop Reordering:** Allows users to reorder page tabs by dragging and dropping them.
*   **Add New Page:**
    *   Add pages between existing pages using a "+" button.
    *   Add a page at the end of the sequence.
    *   Modal for entering a custom page name and selecting from a variety of icons.
    *   Validation for page names (non-empty, unique).
*   **Context Menu per Page:**
    *   Accessible via right-click or a dedicated ellipsis button on the active page tab.
    *   **Actions:**
        *   Set as first page
        *   Rename (uses a modal with validation)
        *   Copy (placeholder)
        *   Duplicate
        *   Delete (with active page readjustment)
*   **Icon Support:** Each page can have an associated icon, with distinct active state colors.
*   **Responsive Design:** UI elements are designed to work well across different screen sizes.
*   **Keyboard Accessible:**
    *   Tabs can be navigated and selected using the keyboard.
    *   Context menu actions can be triggered via keyboard.
    *   Modals can be navigated and confirmed/cancelled using the keyboard.
*   **Dynamic Content Area:** Shows placeholder content based on the selected page.
*   **Smooth Transitions & Animations:** UI interactions are enhanced with subtle animations.

## Technologies Used

*   **React 19:** For building the user interface.
*   **TypeScript:** For static typing and improved developer experience.
*   **Tailwind CSS:** For utility-first styling.
*   **HTML5 & CSS3:** Base web technologies.
*   **ES Modules (via esm.sh):** For module loading directly in the browser without a build step.

## Getting Started / How to Run

This project is designed to run directly in a modern web browser that supports ES Modules and `importmap`.

1.  **Clone the repository (if applicable) or download the files:**
    Ensure you have all the project files (`index.html`, `index.tsx`, `App.tsx`, `types.ts`, `components/` folder, etc.) in a single directory.

2.  **Serve the files:**
    You need to serve these files using a local web server. You cannot open `index.html` directly from the file system (`file:///...`) due to browser security restrictions on ES Modules.
    *   **Using `npx serve` (Node.js required):**
        If you have Node.js and npm installed, navigate to the project's root directory in your terminal and run:
        ```bash
        npx serve .
        ```
        This will typically start a server on `http://localhost:3000` or a similar port.
    *   **Using Python's HTTP server:**
        If you have Python installed, navigate to the project's root directory in your terminal:
        *   For Python 3: `python -m http.server`
        *   For Python 2: `python -m SimpleHTTPServer`
        This will typically start a server on `http://localhost:8000`.
    *   **Using VS Code Live Server extension:**
        If you use VS Code, the "Live Server" extension is a convenient way to serve the `index.html` file.

3.  **Open in Browser:**
    Once the local server is running, open the provided URL (e.g., `http://localhost:3000`) in your web browser.

## Project Structure

```
.
├── README.md
├── index.html            # Main HTML entry point
├── index.tsx             # React root rendering
├── metadata.json         # Project metadata
├── types.ts              # TypeScript type definitions
├── App.tsx               # Main application component (state management, layout)
└── components/
    ├── AddPageModal.tsx      # Modal for adding new pages
    ├── ContextMenu.tsx       # Context menu component
    ├── PageTabsContainer.tsx # Component for managing and displaying page tabs
    └── RenamePageModal.tsx   # Modal for renaming pages
```

## UI/UX Highlights

*   **Clear Visual Hierarchy:** Distinguishes active elements and provides intuitive controls.
*   **Interactive Feedback:** Hover states, focus states, and click animations provide immediate feedback.
*   **Contextual Actions:** Context menus offer relevant actions without cluttering the main UI.
*   **Modals for Complex Inputs:** Adding and renaming pages use modals for a focused user experience.
*   **Consistent Iconography:** Icons enhance visual understanding and provide a polished look.

## Potential Future Enhancements

*   **Local Storage Persistence:** Save page configurations to the browser's local storage.
*   **More Page Content Types:** Allow different types of content or form configurations per page.
*   **Advanced Page Settings:** Add more options to the context menu or a dedicated page settings modal.
*   **Theming:** Allow users to choose different color themes.
*   **Unit & Integration Tests:** Add tests to ensure code quality and prevent regressions.

---

This README provides a good starting point for understanding and working with the Interactive Page Manager application.

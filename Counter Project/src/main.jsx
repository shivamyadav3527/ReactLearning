import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//Process---------------------------------------------------------------------
// React creates a Virtual DOM tree that mirrors the actual DOM.
// On state/prop changes, React creates a new Virtual DOM tree.
// React compares the new tree with the old one (diffing).
// It determines the minimal number of changes needed and updates the real DOM accordingly.

//Reconciliation--------------------------------------------------------------
// Reconciliation is the process React uses to determine what changes to make in
//  the DOM when the state or props of components change.


//Incremental rendering and react priortizing---------------------------------
// Breaking into Smaller Chunks:
// React splits the rendering process into smaller, manageable chunks rather than processing everything in one go.

// Prioritization:
// React doesn’t render chunks in strict serial order. Instead, it prioritizes critical updates like animations, visible content, or user interactions first.

// Handling User Interactions:
// While React is in the middle of rendering chunks, if a user clicks a button or interacts with the app, React pauses the ongoing rendering process to handle the interaction.

// Why? To ensure responsiveness and deliver a good user experience.
// Resuming Leftover Work:
// After completing the higher-priority task (e.g., handling the button click), React resumes rendering the remaining chunks.

// Why This Works Well
// This process is made possible because of:

// Concurrent Rendering: React can pause and resume tasks without disrupting the user experience.
// Time-Slicing: React ensures the browser’s main thread is free for critical tasks (like input handling or animations) while completing rendering during idle time.
// Yes, you are absolutely right! All the capabilities you mentioned — pausing, resuming,
//  prioritizing tasks, and incremental rendering — are part of React Fiber.


// Fiber introduced an asynchronous, incremental rendering approach to improve responsiveness for complex applications.

// React Fiber is a complete rewrite of React's original reconciliation algorithm.
// Fiber breaks down the reconciliation process into smaller, incremental units of work (called fibers) instead of doing it all at once in a single synchronous process.

// So, in short:
// Reconciliation happens at the fiber level (with each fiber being a small unit of work).
// Incremental rendering and prioritization are mechanisms that determine the order in which fibers are processed, ensuring higher-priority tasks (like UI updates)
//  get processed sooner than lower-priority tasks.
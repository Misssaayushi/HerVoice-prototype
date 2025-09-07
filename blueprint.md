
# HerVoice Application Blueprint

## Overview

HerVoice is a web application designed to provide a safe and secure way for users to report online harassment and abuse. The platform allows users to submit evidence of abuse, which is then processed to protect their privacy while enabling action to be taken against perpetrators. This blueprint documents the project's design, features, and technical implementation.

## Current Features & Design

### "How It Works" Page

**Purpose:** To provide a clear, interactive, and visually engaging explanation of the HerVoice reporting process, building user trust by demonstrating how their data is handled and what actions are taken.

**URL:** `/how-it-works`

**Design & Styling:**

*   **Layout:** A centered, single-column vertical flowchart that guides the user step-by-step through the process.
*   **Aesthetics:** Modern and clean design with a premium feel.
    *   **Background:** A light gray background with a subtle noise texture (`#f8f9fa`).
    *   **Typography:** Headings use a bold, modern font (`Inter`), with a large, prominent main title.
    *   **Color Palette:** The primary color is a reassuring blue (`#4A90E2`), used for highlights and key elements. The "Match Found" path is highlighted in green (`#22c55e`), and the "No Match" path is in red (`#ef4444`).
    *   **Cards (`.flow-step`):** White cards with rounded corners, a subtle border, and a soft shadow that lifts on hover. Each card has a consistent maximum width (`700px`) for a uniform appearance.
    *   **Icons:** Each step features a clear and relevant icon housed within a colored circular container, visually representing the action described.
*   **Arrows & Connectors:** Dark, visible arrows (`#94a3b8`) with a height of `h-12` clearly connect the cards, guiding the user through the flowchart.

**Interactive Elements:**

1.  **Decision Point:** Step 5 ("WhatsApp Checks its Database") contains two buttons:
    *   **"Match Found":** A green button that, when clicked, reveals the "Action is Taken" path.
    *   **"No Match":** A light-colored button that, when clicked, reveals the "No Match Found" path.
2.  **Dynamic Paths:**
    *   By default, the "Match Found" (green) path is shown.
    *   Clicking the buttons triggers a smooth hide-and-show animation, revealing the selected outcome while hiding the other.
    *   The branching lines from the decision point change color to match the selected path (green for "yes," red for "no"), providing a clear visual connection.

**Component Breakdown:**

*   `src/pages/HowItWorksPage.jsx`: The main page component that renders the layout.
*   `src/components/HowItWorks.jsx`: The core component containing the flowchart logic and structure.
*   `src/components/HowItWorks.css`: The stylesheet defining all the visual elements described above.

## Development Plan

**Status:** Completed.

The "How It Works" page has been implemented according to the user's specifications. The design is visually polished, the interactivity is functional, and the flowchart clearly communicates the reporting process.

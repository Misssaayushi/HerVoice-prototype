
# herVoice - Online Image Safety Platform Prototype

## Overview

This document outlines the plan for building a prototype of the "herVoice" online image safety platform. The prototype will simulate the user flow for a victim of image-based abuse, from uploading an image to taking action. It will use a fake AI check to determine the outcome.

## Core Features

*   **Image Upload:** A feature for the user to upload an image for a "safety check."
*   **Fake AI Scan:** A simulated AI scan that will randomly determine if the image is "found" online.
*   **"Image Found" Flow:**
    *   If the image is "found," a form will appear for the user to enter the blackmailer's contact information.
    *   A confirmation message will be shown to simulate sending a warning.
*   **"Image Not Found" Flow:**
    *   If the image is not found, the user will be asked if they still feel threatened.
    *   If they do, a form will appear for them to enter their contact information for support.
    *   If they don't, an awareness message will be displayed.

## Design

*   **Theme:** The user interface will use a blue color palette to create a sense of trust and security.
*   **Layout:** The main content will be centered on the page for a clean and focused user experience.
*   **Styling:** Modern and clean design with a professional look and feel.

## Technology Stack

*   **Frontend:** React (using Vite)
*   **Styling:** CSS

## Plan

1.  **Project Setup:**
    *   Create a `blueprint.md` file to document the project.
    *   Structure the React project with a `components` folder for UI components.
2.  **Component Development:**
    *   `App.jsx`: The main application component to manage state and logic.
    *   `ImageUpload.jsx`: Component for the image upload functionality.
    *   `BlackmailerForm.jsx`: Form for the blackmailer's contact information.
    *   `ThreatenedForm.jsx`: Form for the victim's contact information.
    *   `AwarenessMessage.jsx`: Component to display the awareness message.
3.  **Styling:**
    *   Create a CSS file with styles for all components, focusing on the blue theme and centered layout.
4.  **Implementation:**
    *   Implement the state management in `App.jsx` to handle the different stages of the user flow.
    *   Integrate the components into `App.jsx`.
    *   Implement the "fake AI check" using a random number generator.
5.  **Review and Refine:**
    *   Test the application to ensure all features work as expected.
    *   Refine the UI and user experience based on the initial implementation.

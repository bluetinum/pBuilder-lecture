
# Blueprint: Lotto Number Drawing Site

## Overview

This document outlines the plan for creating a visually appealing and interactive Lotto Number Drawing website. The application will generate six unique random numbers between 1 and 45, simulating a lottery draw. It will be built using modern HTML, CSS, and JavaScript, following the best practices outlined in the project guidelines.

## Current Implementation Plan

### 1. **HTML Structure (`index.html`)**

*   **Header:** A main heading for the site, e.g., "Lotto Number Generator".
*   **Main Content:**
    *   A container (`<main>`) to hold the lottery machine.
    *   A `div` with an ID like `lotto-numbers` to display the generated lottery balls.
    *   A button (`<button>`) with an ID like `generate-btn` to initiate the number draw.
*   **Footer:** A simple footer with copyright or other information.

### 2. **Styling (`style.css`)**

*   **Overall Design:**
    *   Apply a modern and clean aesthetic with a subtle background texture (`noise`).
    *   Use CSS variables for a consistent and easily themable color palette.
    *   Ensure the layout is responsive and mobile-friendly using flexbox or grid.
*   **Lottery Balls:**
    *   Style the number containers to look like circular lottery balls.
    *   Assign different background colors to the balls for visual appeal.
    *   Use a large, clear font for the numbers.
    *   Apply a multi-layered drop shadow to make the balls look "lifted" and add depth.
*   **Button:**
    *   Style the button with a "glow" effect on hover/focus for better interactivity.
    *   Use a clear and encouraging call-to-action text, like "Draw Numbers".
*   **Animation:**
    *   Add a simple animation (e.g., fade-in or pop) for the lottery balls as they are generated to enhance the user experience.

### 3. **JavaScript Logic (`main.js`)**

*   **Event Listener:** Attach a `click` event listener to the "Draw Numbers" button.
*   **Number Generation Function:**
    *   When the button is clicked, this function will be called.
    *   It will first clear any existing numbers from the display area.
    *   It will create a set to store unique numbers to avoid duplicates.
    *   In a `while` loop that continues until 6 unique numbers are generated:
        *   Generate a random integer between 1 and 45.
        *   Add it to the set.
    *   Convert the set to an array and sort it in ascending order.
*   **Display Function:**
    *   Iterate through the sorted array of numbers.
    *   For each number, dynamically create a `div` element representing a lottery ball.
    *   Set the text content of the `div` to the number.
    *   Append the new `div` to the `lotto-numbers` container.
    *   Add a CSS class to the `div` to trigger the appearance animation.

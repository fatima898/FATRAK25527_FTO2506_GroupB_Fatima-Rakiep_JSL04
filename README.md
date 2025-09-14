# JSL04 Project Brief: Dynamic Task Display & Modal View

## Overview

In this project, you will dynamically display tasks from the **given initial data** on the DOM using JavaScript. Tasks should be placed into the correct **Kanban board columns** based on their status, and clicking a task should open a **modal** where users can view and modify task details. The project emphasizes **DOM manipulation, event handling, modular JavaScript structure, and responsive UI implementation.**

## Before You Begin

**Check the project user stories in your student dashboard and the updated Figma Design** before you start building.

## Figma Design Link

Check the updated Figma Design: [Figma Link](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=0-1&p=f&t=Ki0CZk0RAjrk9Fhs-0)

## Key Objectives

### Dynamic Task Display & Interaction

- Dynamically generate **task elements** from the given initial data and insert them into the DOM.
- Ensure tasks are placed in the **correct columns** ("To Do", "In Progress", "Done") based on their status.
- Clicking a task should **open a modal** displaying its details.
- The modal should include:
  - **Editable input fields** for the task title and description.
  - **A select dropdown** showing the current status with other status options available.
  - **A close button** that allows users to exit the modal easily.

### Design & Responsiveness

- Ensure the **modal matches the Figma design**, including a **backdrop effect** for focus.
- Implement a **fully responsive modal** that works on both desktop and mobile devices.

### Code Structure & Maintainability

- Structure JavaScript using **modular, single-responsibility functions**.
- Use **descriptive and meaningful variable and function names** for clarity.
- Add **JSDoc comments** to major functions, describing their purpose, parameters, and return values for better documentation.

## Expected Outcome

A fully functional **dynamic task board** where tasks appear under the correct columns, and users can **open a modal to view/edit** task details. The project will follow **clean, well-documented, and maintainable code practices**, ensuring a professional and scalable implementation.


# 🚀 Dynamic Kanban Task Manager

This project implements a dynamic Kanban board that displays tasks across 3 columns (todo, doing and done) based on their status. Users can click on any task to open a modal window where the tasks details are viewable.

## ⚙️ Technologies Used

- HTML for semantic markup
- CSS for styling and resposive design 
- JavaScript for dynamic rendering and event handling

## 🌱 Features

- Dynamic rendering of tasks from JS array into Kanban columns.
- Modal pop-up to view and edit task details (title, descriptio and status.)

## Setup Instructions 

1. Clone the repositary

2. Navigate to project folder:
(FATRAK25527_FTO2506_GroupB_Fatima-Rakiep_JSL04)

3. Open index.html in your preferred browser:
- you can double-click or run a local server for the best results.

## 📃 Usage Instructions 

- On the loading page, tasks will appear under their respective columns based on their status.
- Click on any task to open a modal displaying the title, description and status.
- Click close button(the red x) to exit the modal.

## Example

Visual respresentation of tasks across Kanban Manager and the modal pop-up.

## Interaction Instructions 

- Clicking Tasks: Opens a detailed modal.
- Closing Modal: Click the close(x) button.
- Resonsive Design: Modal adapts to screen sizes for optimal usability on mobile and desktop.
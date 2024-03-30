# Curriculum Authoring Tool

A tool for teachers to author a curriculum for **MULTIPLE** subjects.

You can watch the demo of the tool in action from this [Video](https://drive.google.com/file/d/1gD-LcdtBWC2H_JpN_JEH0sI3UbGABDMV/view?usp=sharing). The data is stored in the following way -

```
1. Subject 1
    1. Chapter 1
        - Heading 1
            - Subheading 1
    2. Chapter 2
        - Heading 1
            - Subheading 1
            - Subheading 2

2. Subject 2
    1. Chapter 1
        - Heading 1
            - Subheading 1
            - Subheading 2
    2. Chapter 2
        - Heading 1
            - Subheading 1
```

## Project Demo

[Video](https://drive.google.com/file/d/1gD-LcdtBWC2H_JpN_JEH0sI3UbGABDMV/view?usp=sharing)

## Hosted On

https://curriculumauthoringtool.netlify.app

## Technologies Used

-   React.js
-   Redux
-   HTML
-   CSS

## Features

-   Row Movements
-          1. Indent
           2. Outdent
           3. Delete
           4. Up
           5. Down
-   Retains parent-child relations between rows while movements.
-   Text in each row is editable like a text box.
-   Load/Save
-          1. Load - You can load the already made data(only in prescribed format) on to the application
           2. Save - You can save the data on the application and even load it again afterwards
-   UI Features
-          1. Tooltips on buttons
           2. Modern UI
           3. Different color for different type of rows
               1. Orange for Chapter
               2. Blue for Heading
               3. Black for Subheading
           4. Intuitive toast for alerting the user
-   JSON Data Format
-          [{
          "id": "0",
          "text": "Mathematics",
          "children": [
          	{
          		"id": "2",
          		"text": "0th chapter",
          		"children": [
          			{ "id": "3", "text": "0th chapter - 0th heading", "children": [] },
          			{ "id": "4", "text": "0th chapter - 1st heading", "children": [] },
          			{ "id": "5", "text": "0th chapter - 2nd heading", "children": [{ "id": "6", "text": "0th chapter - 2nd heading - 0th subheading", "children": [] }] },
          			{
          				"id": "7",
          				"text": "0th chapter - 3rd heading",
          				"children": [
          					{ "id": "8", "text": "0th chapter - 3rd heading - 0th subheading", "children": [] },
          					{ "id": "9", "text": "0th chapter - 3rd heading - 1st subheading", "children": [] },
          					{ "id": "10", "text": "0th chapter - 3rd heading - 2nd subheading", "children": [] },
          					{ "id": "11", "text": "0th chapter - 3rd heading - 3rd subheading", "children": [] }
          				]
          			}
          		]
          	},
          	{ "id": "12", "text": "2nd chapter", "children": [] },
          	{
          		"id": "13",
          		"text": "3rd chapter",
          		"children": [
          			{
          				"id": "14",
          				"text": "3rd chapter - 0th heading",
          				"children": [
          					{ "id": "15", "text": "3rd chapter - 0th heading - 0th subheading", "children": [] },
          					{ "id": "16", "text": "3rd chapter - 0th heading - 1st subheading", "children": [] }
          				]
          			},
          			{
          				"id": "17",
          				"text": "3rd chapter - 1st heading",
          				"children": [
          					{ "id": "18", "text": "3rd chapter - 1st heading - 0th subheading", "children": [] },
          					{ "id": "19", "text": "3rd chapter - 1st heading - 1st subheading", "children": [] }
          				]
          			},
          			{
          				"id": "20",
          				"text": "3rd chapter - 2nd heading",
          				"children": [
          					{ "id": "21", "text": "3rd chapter - 2nd heading - 0th subheading", "children": [] },
          					{ "id": "22", "text": "3rd chapter - 2nd heading - 1st subheading", "children": [] }
          				]
          			},
          			{
          				"id": "23",
          				"text": "3rd chapter - 3rd heading",
          				"children": [
          					{ "id": "24", "text": "3rd chapter - 3rd heading - 0th subheading", "children": [] },
          					{ "id": "25", "text": "3rd chapter - 3rd heading - 1st subheading", "children": [] },
          					{ "id": "26", "text": "3rd chapter - 3rd heading - 2nd subheading", "children": [] },
          					{ "id": "27", "text": "3rd chapter - 3rd heading - 3rd subheading", "children": [] }
          				]
          			}
          		]
          	}
          ]
           }]

## Future Scope

-   Save data in local storage, so that the data remains even after refresh
-   Add support for Tab and Shift+Tab to increase or decrease indent levels respectively
-   Make UI adaptive
-   Make backend and store data in cloud and make login logout features

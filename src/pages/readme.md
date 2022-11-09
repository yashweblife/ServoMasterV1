# [Src<-](../readme.md) Pages [->Store](../store/readme.md)
This folder contains all the pages for this app

## Tab1
Tab1 contains 2 major components, the project list and the editor.
The user can add a new project to the list here, they can also edit and delete existing projects. If the project is clicked, it will open in the editor where its name and all the steps will be presented

## Tab2
Tab2 contains the user profile, this shows 3 main things, number of projects, number of devices and the list of devices.
It also allows user to add a new device and manipulate the existing ones

## Tab3
Tab3 contains the app settings. Here the user can logout, delete account, delete all projects, delete all devices, change theme, contact devs, and checkout tutorials



# Workflow
- [X] Create primary UI skelleton for Tabs
    - [X] Tab1
        - [X] Component Breakdown
            - [X] ProjectList  [->](../components/ProjectListComponent.tsx)
                - [X] ProjectComponent [->](../components/ProjectComponent.tsx)
            - [X] Editor [->](../components/EditorComponent.tsx)
                - [X] StepCompoenet [->](../components/StepComponent.tsx)
        - [X] Add Style
    - [X] Tab2
        - [X] Component Breakdown
            -[X] DeviceComponent [->](../components/DeviceComponent.tsx)
            -[X] DeviceListComponent [->](../components/DeviceListComponent.tsx)
        - [X] Import React Circular Progressbar
        - [X] Add Style
    - [X] Tab3
        - [X] Component Breakdown
        - [X] Add Style
    - [ ] LoginPage
    - [ ] TutorialPage
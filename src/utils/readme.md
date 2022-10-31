# Utils
[<--- Store](../store/readme.md) | [Src--->](../readme.md)

This page contains all the utility for the app
### The Utils Functions 
The file contains essential typescript interfaces, functions and firebase initializers.

# Genral Elaboration
### app
This variable refers to the firebase app and doesnt have further use

### db
This variable stores a reference to the firestore used to handle user data

### rtdb
This variable stores a reference to the firebase realtime database.

### makeRandString | size=10 > string
This funcition returns a random string of provided length
It is used to generate id values when needed

### StepInterface
This is a TypeScript interface declaration for the step data

### ProjectInterface
This is a TypeScript interface declaration for the project data

### createStep > StepInterface
This function creates a step with no real values.

### ProjectListInterface
This is a TypeScript interface declaration for the project list data

### ProjectListInterface
This is a TypeScript interface declaration for the device data

### DeviceListInterface
This is a TypeScript interface declaration for the device list data
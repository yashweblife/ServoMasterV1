# [Src<-](../readme.md) Store [->Utils](../utils/readme.md)
This page contains all the global contexts for this app

## Project List Context
This context is for the project list.
The project list is a complex data flow that requires a global context and helps us minimize the read/write to firebase.

It exports 2 main objects, The ProjectListContext and The ProjectListContextProvider

---

## Device List Context
This context is for the device list.
The device list is required in 2 different pages, The Editor and the Profile
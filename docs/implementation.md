# Implementation

## Introduction- masud 

The current version of the system is v1.0, the data set is the Libraries data set from Open data Bristol. It contains the library name, full address, telephone and  URL to the website of the libraries. There is one issue with the map as it says there is no geo-location, in its current state it does fulfil use-case 1 but it would be better without out the message of "geo-location isnt supported" message. The configuration data (conf.json) contains the port for the ports for development and testing along with the user names and password to access the mysql data. 

## Project Structure - masud 
C:\Users\masud\OneDrive\Documents\GitHub\libraryfinder
- Docs (contains images UC diagram etc as well as the readme.md planning.md etc 
- e2e (end to end testing, this contains the  unit test for the program (testcafe))
- node modules 
- static(this contains a style sheet and an image of a map i used for i made the actual one)
- test (the contains a test that runs in the cmd line it is different from the end to end as it doesnt show the test being carried in the mini browser.)
- views(this comtains all of the web pages e.g index.ejs etc and the template for the header.
- conf.json(contains the database access username and passwords and the port  that it runs on 8080)
- main.js (It brings all of the different code together)
- package.json(this contains json) 



## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![Insert your component Diagram here](images/component.png)

# workflow

- create rep> clone it
- add .gitignore (npx gitignore node)
- add package.json
- update test script to use jest
- add 'jest' config package.json
- add 'server' and 'start' scripts to package.json

# features

- list of cohorts
- add a cohort
- list of students
- add a student
- list of student's cohorts

[Features]Method[URL]
|:--|:--|:--|
|List cohorts |get| /api/cohorts|
|Add a cohort|POST|/api/cohorts|
|View Cohort's student|GET|/api/cohorts/:id/students|
|List of student's|GET|/api/students|
|ADD A STUDENT |POST| /api / students|
|VIEW STUDENTS COHORTS|GET| /api/students/:id/cohorts

# cohorts

- id
- name
- start_date

# Students

- id
- name


# testing

- functions: invoke the function with optional arguments => check results _return_
- endpoints: make a request with optional arguments => check the response

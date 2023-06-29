# secret_santa
A coding challenge project to find secret santa

Secret Santa Game 
Background:
Hypothetical company "Are" has decided to organize a Secret Santa event among its employees. Each 
employee is required to choose another employee as their secret child, to whom they will 
anonymously give a gift during the event. The company wants to automate the process of 
assigning secret children to employees based on the provided employee information. 
However, the Secret Santa system has some additional requirements and constraints.

Requirements:
1. Input Format: The input will be given as a CSV file containing employee information. 
Each row in the CSV file will represent an employee and will include the following 
fields:
• Employee_Name: The name of the employee.
• Employee_EmailID: The email ID of the employee.

2. Secret Santa Game: Your task is to create a program that parses the provided CSV 
file and assigns a secret child to each employee, following these rules:
• An employee cannot choose themselves as their secret child.
• An employee cannot be assigned to the same secret child as in the previous 
year's Secret Santa event, if applicable.
• Each employee must have exactly one secret child.
• Each secret child should be assigned to only one employee.

3. Output Format: The program should generate a new CSV file as output, containing 
the following fields for each employee:
• Employee_Name: The name of the employee.
• Employee_EmailID: The email ID of the employee.
• Secret_Child_Name: The name of the assigned secret child.
• Secret_Child_EmailID: The email ID of the assigned secret child.

4. Constraints: The previous year's Secret Santa assignments will be provided as input 
for avoiding repetitive assignments. The assignments will be given as a CSV file 
containing the fields: Employee_Name, Employee_EmailID, Secret_Child_Name, 
Secret_Child_EmailID.

5. Solution Expectations:
 a. Modularity and Extensibility: The solution should be modular and extensible, 
following best practices and principles of object-oriented programming (OOP). It 
should not be a monolithic codebase; It should not be a single class/function which 
contains every logic needed to solve this "current" problem
 b. Tests: Including tests for the solution is needed to demonstrate code quality, 
correctness, and reliability. This is an added advantage for submission.
 c. Error Handling: Implement appropriate error handling mechanisms to handle 
potential exceptions, such as invalid input or file handling issues.
 d. Documentation: Provide comprehensive documentation, including a README 
file, that explains the solution, instructions for installation, running the program, and 
any additional information required for understanding and using the solution.
 
Note: The focus is on designing an efficient and reliable Secret Santa game.


============================================================================


How to start the program
Sample input files are in the git repository, output.csv file will be generated in current working directory.
Since the choice for secret santa would be random, so added test cases only for failure cases

 >>node .\main.mjs .\employee_list.csv.txt .\employee_prev_year_choice.csv.txt



Main test case that would be running 
=====================================

 test('1. File name "employee_list.csv" check', () => {
    assert.equal(process.argv[2], ".\\employee_list.csv.txt")
    })

 test('2. File name "employee_prev_year_choice.csv" check', () => {
    assert.equal(process.argv[3], ".\\employee_prev_year_choice.csv.txt")
    })

 test('3. Employee choice for santa should not be equal to previous year choice', () => {
    let preYearChoice = previousChoice[0].split(',')[3]
    let currYearChoice = outputData[0][3]
    assert.notEqual(preYearChoice, currYearChoice)
    })

 test('4. Employee choice for santa should not be self', () => {
    let empEmail = emp[0].split(',')[1]
    let currYearChoice = outputData[0][3]
    assert.notEqual(empEmail, currYearChoice)
    })


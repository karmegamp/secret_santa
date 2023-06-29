import { readCSV } from './read_csv.mjs'
import { writeCSV } from './write_csv.mjs'
import { secretSanta } from './santa_game.mjs'

import test from 'node:test'
import assert from 'assert/strict'

/**
 * Test case for santaGame
 */ 

 function test_all(emp, previousChoice, outputData){

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

}



/**
 * santaGameTest act as emulator for the game to generate the output.csv file 
 * as well as triggers the test cases at the end of function for validation of logics.
 * 
 */

(function santaGameTest() {

	// Get the input files
	let inputEmp = process.argv[2]
	let inputEmpPrevChoice = process.argv[3]


	// Parse the input files
	let emps = readCSV(inputEmp)
	let empPrevChoice = readCSV(inputEmpPrevChoice)

	console.log(empPrevChoice)

	// Start the game
	let output = secretSanta(emps, empPrevChoice)

	console.log(output)

	 // Save the output file
	 writeCSV('output.csv', output)

	test_all(emps, empPrevChoice, output)

})()

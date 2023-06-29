import Chance from 'chance'

const chance = new Chance()

/**
 * Generate to select secret santa from the employee data
 */
export function secretSanta(empDetails, empPrevChoice){
	
	let empNewChoice = []

	for(let emp of empDetails){

		let empNewInput = ''
		let employee = emp.split(',')

		// Update employee choice  
		empNewInput = employee[0]
		empNewInput += ',' + employee[1]

		// Pick a choice
		let choice = chance.integer( {min:0, max:empDetails.length-1} )
		let santaDetail = empDetails[choice].split(',')

		// You can't choose yourself as santa 
		// You can't choose previous year choice again
		// Only one choice and one assignment is in-built
		let currentEmpIndex = empDetails.indexOf(emp)
		while( (currentEmpIndex === choice) ||
			   (santaDetail[1] === empPrevChoice[currentEmpIndex][3])){
			choice = chance.integer( {min:0, max:empDetails.length-1} )
			santaDetail = empDetails[choice].split(',')
		}

		// Add fresh choice
		empNewInput += ',' + santaDetail[0]
		empNewInput += ',' + santaDetail[1]

		// Updated employee choice
		empNewChoice.push(empNewInput.split(','))
	}

	return empNewChoice
}
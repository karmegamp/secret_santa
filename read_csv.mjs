import { readFileSync } from 'fs'

//const log = console.log.bind(console.log)


/**
 * Reads any CSV file and return its record as array
 */
export function readCSV(filename){

	try{

		let data = readFileSync(filename, 'utf-8')
		data = data.split('\r\n').slice(1)

		return data.slice(data, data.length-1)

	}catch(err){
		//log(err.message)
		throw err
	}
}
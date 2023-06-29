import { createWriteStream } from 'fs'
import { stringify } from 'csv-stringify'

/**
 * Write CSV file by taking array as input
 */
export function writeCSV(filename, data){
	
	const writableStream = createWriteStream(filename)

	// Headers for output file
	const columns = [
	"Employee_Name",
	"Employee_EmailID",
	"Secret_Child_Name",
	"Secret_Child_EmailID"]

	const stringifier = stringify({ header:true, columns:columns})

	for(let emp of data) {
		stringifier.write(emp)
	}

	stringifier.pipe(writableStream) 
}
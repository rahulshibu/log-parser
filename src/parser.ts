import {ReadFileWriteJSON  } from "./classIO";
import {Reader,getArgs} from './utils'


/**
 * parser function or main function to run
 */
async function parser() {
  try {
    const args = getArgs();
    if (!args.input || !args.output) {
      throw Error("Input and output required");
    }
    const read:Reader={
      path:args.input,
    }

    const readWriteInstance = new ReadFileWriteJSON(read,args.output)
    await readWriteInstance.logger()
    console.info(`\n done \n`)
  } catch (err: any) {
    console.error(`\n${err.message}\n`)
  }
}

parser();

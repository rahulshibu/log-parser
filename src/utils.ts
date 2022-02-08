import minimist from "minimist";

/**
 * @method getArgs
 * @returns {object} Returns  arguments from terminal
 */
const getArgs = () => {
  return minimist(process.argv.slice(2));
};

/**
 * Custom type Reader and Writer
 */
type Reader = {
  path: string;
};
type Writer = {
  path: string;
  data: any;
};

/**
 * Read specifc string format and format into the specific json
 * @param element {string}
 * @returns 
 */
const formatter = (element: string) => {
  const value = element.split(" - ");
  const log = JSON.parse(value[2]);
  return {
    timestamp: new Date(value[0]).getTime(),
    loglevel: value[1],
    transactionId: log.transactionId,
    err: log.err ? log.err : "",
  };
};

export { getArgs, Reader, Writer, formatter };

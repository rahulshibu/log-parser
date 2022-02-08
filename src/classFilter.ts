import { Reader } from "./utils";

/**
 * ScreenInterface implements method screening
 * @interface  ScreenInterface
 * @method screening to screen/filter the data
 */
interface ScreenInterface {
  screening(data: string): any;
}
/**
 *  Class to filter error with a method screening
 * @class ErrorFilter
 */
export class ErrorFilter implements ScreenInterface {
  screening(data: string): any {
    const log = data.split(" - ");
    return log[1] === "error" ? true : false;
  }
}

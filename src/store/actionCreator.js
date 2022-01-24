import { TEST } from "./constants";

export function testAction(data) {
  return { type: TEST, data };
}

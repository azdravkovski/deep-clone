"use strict";

export const deepClone = original => {
  let clone;

  //Null, undefined or primitive
  if (typeof original !== "object" || original === null) {
    clone = original;
    return clone;
  }

  //Array
  if (original instanceof Array) {
    clone = original.map(deepClone);
    return clone;
  }

  //Object
  if (original instanceof Object) {
    let props = Object.keys(original);
    clone = props.reduce((acc, key) => {
      acc[key] = deepClone(original[key]);
      return acc;
    }, {});
  }

  //RegExp
  if (original instanceof RegExp) {
    clone = new RegExp(original);
  }

  //Date
  if (original instanceof Date) {
    clone = new Date(original);
    return clone;
  }

  return clone;
};

"use strict";

import { deepClone } from "./deep-clone";

describe("deepClone()", () => {

  test("should deep clone array", () => {
    let arr = [1, 2, 3, { a: 1 }];
    let arr2 = deepClone(arr);
    arr2[3].a = 2;

    expect(arr2).not.toEqual(deepClone(arr));
  });

  test("should deep clone object", () => {
    let obj = {
      name: "Paddy",
      address: {
        town: "Lerum",
        country: "Sweden"
      },
      greeting: function() {
        return `Hi, I'm ${this.name} from ${this.address.town} in ${this.address.country}`;
      },
      cars: ['Volvo', 'Saab', 'Scania']
    };

    let obj2 = deepClone(obj);
    obj2.name = "Alex";
    obj2.address = {
        town: "Budapest",
        country: "Hungary"
    }
    obj2.greeting = function() {
        return `Heya, my name's ${this.name} and I'm from ${this.address.town} in lovely ${this.address.country}`;
    }
    obj2.cars[2] = 'Yugo';

    expect(obj2).not.toEqual(deepClone(obj));
  });

  test("should return primitive", () => {
      const num = 5;
      const num2 = deepClone(num);

      expect(num2).toBe(num);
  });

  test("should clone RegExp", () => {
    let re = /([A-Z])\w+/;
    let re2 = deepClone(re);
    re2 = /([A-Z])/;
    
    expect(re2).not.toEqual(re);
  })
});

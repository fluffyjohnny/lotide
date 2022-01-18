
const eqObjects = function(object1, object2) {
  const amtOfkeys1 = Object.keys(object1);
  const amtOfkeys2 = Object.keys(object2);

  if (amtOfkeys1.length === amtOfkeys2.length) {
    for (const key of amtOfkeys1) {
      if (amtOfkeys1[key] === amtOfkeys2[key]) {
        return true;
      }
    }
  }
  return false;
};

module.exports = eqObjects;


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba), true);
function arrayAnalysis(arr) {
  let analyse = {};
  analyse.average =
    arr.reduce((accumulator, current) => accumulator + current) / arr.length;
  analyse.min = arr.sort((first, second) => first - second)[0];
  analyse.max = arr.sort((first, second) => second - first)[0];
  analyse.length = arr.length;
  return analyse;
}

export default arrayAnalysis;

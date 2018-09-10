/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  countLoverPare = 0;
  arrLover = [];
  for (var i = 0; i < preferences.length; i++) {
    loverB = parseInt(preferences[i] - 1);
    loverC = parseInt(preferences[loverB] - 1);
    loverX = parseInt(preferences[loverC] - 1);
    if (loverB != i && loverC != i && loverX == i && arrLover.indexOf(i) === -1) {
      arrLover.push(i);
      arrLover.push(loverB);
      arrLover.push(loverC);
      countLoverPare++;
    }
  }
  return countLoverPare;
};
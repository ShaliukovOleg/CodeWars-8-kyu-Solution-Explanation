// Solution / Решение

// По сути нужно исходя из переданного направления просто отсортировать массив
const flip = (d, a) => a.sort((a, b) => d === 'R' ? a - b : b - a); 

// Tests

console.log(flip('R', [3, 2, 1, 2])); // [ 1, 2, 2, 3 ]
console.log(flip('L', [1, 4, 5, 3, 5])); // [ 5, 5, 4, 3, 1 ]

/*

If you've completed this kata already and want a bigger challenge, 
here's the 3D version // Gravity Flip (3D version)

Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. 
The box is special because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. 
The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. 
When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). 
Below is an example of what a box of cubes might look like before and after switching gravity.

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
Given the initial configuration of the cubes in the box, 
find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples (input -> output:
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

*/

/*

Если вы уже прошли это ката и хотите более серьезного испытания, 
вот 3D-версия // Gravity Flip (3D version) 

Бобу скучно на уроках физики, поэтому он построил себе игрушечную коробку, чтобы скоротать время. 
Особенность коробки в том, что она способна изменять гравитацию.

В коробке есть несколько столбцов игрушечных кубиков, расположенных в линию. 
В i-м столбце находится a_i кубиков. Сначала гравитация в коробке тянет кубики вниз. 
Когда Боб переключает гравитацию, она начинает тянуть все кубики к определенной стороне коробки, d, которая может быть либо "L", либо "R" (левая или правая). 
Ниже приведен пример того, как может выглядеть коробка с кубиками до и после переключения гравитации.

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
Учитывая начальную конфигурацию кубиков в коробке, 
выясните, сколько кубиков находится в каждом из n столбцов после того, как Боб переключит гравитацию.

Примеры (вход -> выход:
* 'R', [3, 2, 1, 2] -> [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ] -> [5, 5, 4, 3, 1]

*/
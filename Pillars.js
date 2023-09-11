/*

There are pillars near the road. 
The distance between the pillars is the same and the width of the pillars is the same. 
Your function accepts three arguments:

number of pillars (> 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

*/

/*

Возле дороги стоят столбы. 
Расстояние между столбами одинаковое и ширина столбов одинаковая. 
Ваша функция принимает три аргумента:

- количество столбов (> 1); numPill
- расстояние между столбами (10 – 30 метров); dist
- ширина столба (10 – 50 сантиметров). width

Рассчитайте расстояние между первым и последним столбом в сантиметрах (без ширины первого и последнего столба).

*/

function pillars(numPill, dist, width) {
    // your code here
    let totalDistance = (numPill - 1) * dist * 100; // Расстояние между всеми столбами (в см)
    let pillarsWidth = (numPill - 2) * width // Ширина всех столбов
    return numPill > 1  // Изначальное условие, что количество столбов должно быть больше 1
        ? totalDistance + pillarsWidth // 
        : 0; // Если количество столбов 1, вернется ноль согласно условию
}

console.log(pillars(2, 20, 25)); // 2000
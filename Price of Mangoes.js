// Solution / Решение

function mango(quantity, price) {
    let free = 0; // Счетчик бесплатных манго
    for (let i = 1; i <= quantity; i++) {
        if (i % 3 === 0) { // проверяем каждое значение и если оно кратно трем счетчик повышается
            free++;
        }
    }
    return (quantity - free) * price; // возвращаем значение манго - бесплатные манго и умножаем их на стоимость
}

// Short version 

const mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3));

// Tests

console.log(mango(3, 3)); // 6
console.log(mango(9, 5)); // 30

/*

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

*/

/*

На манго действует предложение "3 за 2" (или "2+1", если хотите). 
Для заданного количества и цены (за манго) рассчитайте общую стоимость манго.

Примеры
mango(2, 3) ==> 6 # 2 манго по $3 за штуку = $6; ни одного манго бесплатно
манго(3, 3) ==> 6 # 2 манго по $3 за штуку = $6; +1 манго бесплатно
манго(5, 3) ==> 12 # 4 манго по $3 за штуку = $12; +1 манго бесплатно
mango(9, 5) ==> 30 # 6 манго по $5 за штуку = $30; +3 манго бесплатно

*/
// console.log("\n=== Деструктуризация массивов ");
// const colors = ["red", "green", "blue"];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary, tertiary] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов");

// const user = {
//   name: "Алиса",
//   age: 25,
//   city: "Mосква",
// };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);

// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");

// const user = {
//   nаmе: "Алиса",
//   age: 25,
//   city: "Москва",
// };
// function printUserOld(user) {
//   console.log(`Имя: ${user.nаmе}`);
//   console.log(`Возраст: ${user.age}`);
//   console.log(`Город: ${user.city}`);
// }
// function printUser({ nаmе, age, city }) {
//   console.log(`Имя: ${nаmе}`);
//   console.log(`Возраст: ${age}`);
//   console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//   name: "Ноутбук",
//   price: 45000,
//   category: "Электроника",
//   inStock: true,
// };

// const { name, price, category, inStock } = product;
// console.log("Извлеченные свойства:");
// console.log(`Название: ${name}`);
// console.log(`Цена: ${price}`);
// console.log(`Категория: ${category}`);
// console.log(`В наличии: ${inStock}`);
// console.log("---");

// function printProduct({ name, price, category, inStock }) {
//   console.log("Информация о продукте (из функции):");
//   console.log(`Название: ${name}`);
//   console.log(`Цена: ${price} руб.`);
//   console.log(`Категория: ${category}`);
//   console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
// }
// printProduct(product);

// console.log("Spread для массивов");

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);

// const copy = [...arr1];
// console.log("Копия массива:", copy);

// const extended = [0, arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("Spread для объектов");
// const person = {
//   name: "Иван",
//   age: 30,
// };

// const address = {
//   city: "Санкт-Петербург",
//   street: "Невский проспект",
// };

//  const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);
// const updated = {...person, age: 31, occupation:
// "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("Rest оператор");

// function sum(...numbers) {
// return numbers.reduce((total, num) => total+num, 0);
// }

// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ... rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

// const numbers1 = [1, 5, 8, 12, 3];
// const numbers2 = [7, 2, 10, 4, 6];

// console.log("Первый массив:", numbers1);
// console.log("Второй массив:", numbers2);
// console.log("---");

// const combinedArray = [...numbers1, ...numbers2];
// console.log("Объединенный массив:", combinedArray);
// console.log("---");

// function findMax(...numbers) {
//   if (numbers.length === 0) {
//     return null;
//   }
//   return Math.max(...numbers);
// }

// console.log("Максимум из 5, 12, 8, 3:", findMax(5, 12, 8, 3));
// console.log("Максимум из объединенного массива:", findMax(...combinedArray));
// console.log("Максимум из 100, 45, 78, 92:", findMax(100, 45, 78, 92));
// console.log("---");

// const user = {
//   name: "Анна",
//   age: 25,
//   city: "Москва"
// };

// const userDetails = {
//   email: "anna@example.com",
//   phone: "+7 (999) 123-45-67",
//   occupation: "Разработчик"
// };

// console.log("Первый объект (user):", user);
// console.log("Второй объект (userDetails):", userDetails);
// console.log("---");

// const mergedUser = {
//   ...user,
//   ...userDetails
// };

// console.log("Объединенный объект (mergedUser):", mergedUser);

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { b: 10, d: 4, e: 5 };
// const mergedObjects = { ...obj1, ...obj2 };

// console.log("---");
// console.log("Пример с конфликтующими свойствами:");
// console.log("obj1:", obj1);
// console.log("obj2:", obj2);
// console.log("Объединенный (последний перезаписывает предыдущие):", mergedObjects);

// import { greet, add, PI } from "./utils.js";

// console.log("Модули");
// console.log(greet ("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI:", PI);

// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить (4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

// import { square, cube, E } from './js/math.js';

// console.log("=== Тестирование математических функций ===\n");

// console.log("Функция square:");
// console.log(`Квадрат числа 5: ${square(5)}`);
// console.log(`Квадрат числа -3: ${square(-3)}`);
// console.log(`Квадрат числа 2.5: ${square(2.5)}`);
// console.log(`Квадрат числа 0: ${square(0)}`);

// console.log("\n---");

// console.log("Функция cube:");
// console.log(`Куб числа 3: ${cube(3)}`);
// console.log(`Куб числа -2: ${cube(-2)}`);
// console.log(`Куб числа 1.5: ${cube(1.5)}`);
// console.log(`Куб числа 0: ${cube(0)}`);

// console.log("\n---");

// console.log("Константа E:");
// console.log(`Число Эйлера (E): ${E}`);
// console.log(`E^2: ${square(E)}`);
// console.log(`E^3: ${cube(E)}`);

// console.log("\n---");

// console.log("Дополнительные тесты:");
// console.log(`5² + 3³ = ${square(5)} + ${cube(3)} = ${square(5) + cube(3)}`);
// console.log(`(2 + 3)² = ${square(2 + 3)}`);
// console.log(`2² + 3² = ${square(2)} + ${square(3)} = ${square(2) + square(3)}`);

// console.log("\n--- Проверка обработки ошибок ---");
// try {
//   console.log(square("string"));
// } catch (error) {
//   console.log("Ошибка:", error.message);
// }

// console.log("Промисы");

// const simplePromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Операция выполнена успешно!");
//   } else {
//     reject("Произошла ошибка!");
//   }
// });

// simplePromise.then((result) => console.log("Результат:", result)).catch((error) => console.log("Ошибка:", error));

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Прошло ${ms} миллисекунд`);
//     }, ms);
//   });
// }

// delay(1000).then((message) => console.log(message));

// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId > 0) {
//         resolve({
//           id: userId,
//           name: "Иван Иванов",
//           email: "ivan@example.com",
//         });
//       } else {
//         reject("Неверный ID пользователя");
//       }
//     }, 1500);
//   });
// }
// fetchUserData(1)
// .then((user) => console.log("Пользователь:", user))
// .catch((error) => console.log("Ошибка:", error));

// function step1() {
// return new Promise((resolve) => {
// setTimeout(() => resolve("Шаг 1 завершён"), 500);
// });
// }

// function step2 (previousResult) {
// return new Promise((resolve) => {
// setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
// });
// }

// function step3 (previousResult) {
// return new Promise((resolve) => {
// setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
// });
// }

// step1()
// .then ((result1) => step2(result1))
// .then((result2) => step3(result2))
// .then((finalResult) => console.log("Финальный результат:", finalResult))
// .catch((error) => console.log("Ошибка в цепочке:", error));

function checkInventory(productName, quantity) {
  return new Promise((resolve, reject) => {

    const inventory = {
      "ноутбук": { price: 45000, inStock: 10 },
      "смартфон": { price: 25000, inStock: 5 },
      "наушники": { price: 3000, inStock: 0 },
      "клавиатура": { price: 2000, inStock: 3 },
      "монитор": { price: 15000, inStock: 0 }
    };
    

    const product = productName.toLowerCase();
    
    setTimeout(() => {
      if (!inventory[product]) {
        reject(new Error(`Товар "${productName}" не найден в базе данных`));
        return;
      }
      
      const availableQuantity = inventory[product].inStock;
      
    
      if (availableQuantity > 0 && quantity <= availableQuantity) {
        resolve({
          success: true,
          message: ` Товар "${productName}" в наличии!`,
          details: {
            product: productName,
            requested: quantity,
            available: availableQuantity,
            price: inventory[product].price,
            totalCost: inventory[product].price * quantity
          }
        });
      } 

      else if (availableQuantity === 0) {
        reject(new Error(`Товар "${productName}" отсутствует на складе`));
      } 
      else {
        reject(new Error(` Недостаточно товара "${productName}". Доступно: ${availableQuantity}, запрошено: ${quantity}`));
      }
    }, 1500); 
  });
}

console.log(" Проверка наличия товаров...\n");

console.log(" Запрос 1: Ноутбук (2 шт.)");
checkInventory("ноутбук", 2)
  .then(result => {
    console.log(result.message);
    console.log(`   Цена за единицу: ${result.details.price} руб.`);
    console.log(`   Общая стоимость: ${result.details.totalCost} руб.`);
    console.log(`   Доступно на складе: ${result.details.available} шт.\n`);
  })
  .catch(error => {
    console.error(error.message);
    console.log();
  });


console.log(" Запрос 2: Смартфон (3 шт.)");
checkInventory("смартфон", 3)
  .then(result => {
    console.log(result.message);
    console.log(`  Цена за единицу: ${result.details.price} руб.`);
    console.log(`  Общая стоимость: ${result.details.totalCost} руб.`);
    console.log(`   Доступно на складе: ${result.details.available} шт.\n`);
  })
  .catch(error => {
    console.error(error.message);
    console.log();
  });

console.log(" Запрос 3: Наушники (1 шт.)");
checkInventory("наушники", 1)
  .then(result => {
    console.log(result.message);
    console.log(`   Общая стоимость: ${result.details.totalCost} руб.\n`);
  })
  .catch(error => {
    console.error(error.message);
    console.log();
  });


console.log(" Запрос 4: Клавиатура (10 шт.)");
checkInventory("клавиатура", 10)
  .then(result => {
    console.log(result.message);
  })
  .catch(error => {
    console.error(error.message);
    console.log();
  });


console.log(" Запрос 5: Планшет (1 шт.)");
checkInventory("планшет", 1)
  .then(result => {
    console.log(result.message);
  })
  .catch(error => {
    console.error(error.message);
    console.log();
  });


console.log(" Запрос 6: Цепочка проверок");
checkInventory("монитор", 2)
  .then(result => {
    console.log(result.message);
    console.log(`   Но, к сожалению, товара нет в наличии.`);

    return checkInventory("клавиатура", 1);
  })
  .then(result => {
    console.log(result.message);
    console.log(`   Цена: ${result.details.price} руб.`);
    console.log(`   Общая стоимость: ${result.details.totalCost} руб.\n`);
  })
  .catch(error => {
    console.error(` Ошибка в цепочке: ${error.message}\n`);
  });

console.log("Запрос 7: Дополнительная проверка (смартфон, 2 шт.)");
checkInventory("смартфон", 2)
  .then(result => {
    console.log(result.message);
    console.log(`   Цена: ${result.details.price} руб.`);
    console.log(`   Общая стоимость: ${result.details.totalCost} руб.`);
  })
  .catch(error => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("    Проверка завершена (finally всегда выполняется)\n");
  });
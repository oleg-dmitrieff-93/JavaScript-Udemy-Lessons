let money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
          b = prompt("Во сколько обойдётся?", '');
     
     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''
          && a.length < 50 ) {
               console.log('done');
               appData.expenses[a] = b;
     } else {
          alert("Ошибка!");
          i--;
     }
};

/* ИСПОЛЬЗУЕМ WHILE

let i = 0;

while (i < 2) {
     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
         b = prompt("Во сколько обойдётся?", '');
     
     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''
          && a.length < 50 ) {
               console.log('done');
               appData.expenses[a] = b;
     } else {
          alert("Ошибка!");
          i--;
     }

     i++;
};
*/

/* ИСПОЛЬЗУЕМ DO...WHILE

let i = 0;

do {
     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
          b = prompt("Во сколько обойдётся?", '');
     
     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''
          && a.length < 50 ) {
               console.log('done');
               appData.expenses[a] = b;
     } else {
          alert("Ошибка!");
          i--;
     }

     i++;
} while (i < 2);
*/

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Бюджет на день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
     console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 4000) {
     console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 4000) {
     console.log("Высокий уровень достатка");
} else {
     console.log("Ошибка!")
}

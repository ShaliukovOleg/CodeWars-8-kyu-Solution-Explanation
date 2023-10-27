// Solution / Решение

function match(candidate, job) {
    // Проверяем, что минимальная зарплата кандидата и максимальная зарплата вакансии указаны.
    if (candidate.minSalary === undefined || job.maxSalary === undefined) {
        throw new Error();
    }

    // Сравниваем минимальную зарплату (с учетом 10% "свободы действий") кандидата с максимальной зарплатой вакансии.
    return candidate.minSalary * .9 <= job.maxSalary;
}

// Or

function match(candidate, job) {
    if ("minSalary" in candidate && "maxSalary" in job) {
        return candidate.minSalary * .9 <= job.maxSalary
    }
    throw new Error()
}

// Short version

const match = (candidate, job) => (candidate.minSalary && job.maxSalary)
    ? candidate.minSalary * .9 <= job.maxSalary
    : (function () { throw new Error('Whoosh') })();

// Tests

let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 };

console.log(match(candidate1, job1)); // true
console.log(match(candidate1, job2)); // false

/*

Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

One of the simplest, yet most important factors is compensation. 
As developers we know how much money we need to support our lifestyle, 
so we generally have a rough idea of the minimum salary we would be satisfied with.

Let's give this a try. We'll create a function match (job_matching in Python) 
which takes a candidate and a job, 
which will return a Boolean indicating whether the job is a valid match for the candidate.

A candidate will have a minimum salary, so it will look like this:
let candidate = {
  minSalary: 120000
}

A job will have a maximum salary, so it will look like this:
let job = {
  maxSalary: 140000
}

If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.
For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. 
However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) 
in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. 
The company offering the job may be able to work something out.

*/

/*

Давайте построим систему подбора, которая поможет найти работу для разработчиков на основе ряда факторов.

Один из самых простых и в то же время важных факторов - это оплата труда. 
Как разработчики мы знаем, сколько денег нам нужно для поддержания нашего образа жизни, 
поэтому, как правило, примерно представляем себе минимальную зарплату, которая нас устроит.

Давайте попробуем это сделать. Создадим функцию match (job_matching в Python) 
которая принимает кандидата и вакансию, 
которая будет возвращать булево значение, указывающее, подходит ли данная работа кандидату.

Кандидат будет иметь минимальную зарплату, поэтому функция будет выглядеть следующим образом:
let candidate = {
  minSalary: 120000
}

У вакансии будет максимальная зарплата, поэтому она будет выглядеть следующим образом:
let job = {
  maxSalary: 140000
}

Если ни минимальная зарплата кандидата, ни максимальная зарплата вакансии не присутствуют, то будет выдана ошибка.
Для корректного совпадения минимальная зарплата кандидата должна быть меньше или равна максимальной зарплате вакансии. 
Однако давайте оставим 10% (вычтем из минимальной зарплаты кандидата). 
на случай, если кандидат - рок-звезда, который в свободное время любит программировать на Codewars. 
Возможно, компания, предлагающая эту работу, сможет что-то придумать.

*/
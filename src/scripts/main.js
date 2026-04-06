'use strict';

const list = document.querySelector('ul');
const listEmploy = [...document.querySelectorAll('li')];

function salaryToNumber(salary) {
  return salary.replaceAll(',', '').replaceAll('$', '');
}

function sortList(items) {
  items.sort((el1, el2) => {
    const salary1 = Number(salaryToNumber(el1.dataset.salary));
    const salary2 = Number(salaryToNumber(el2.dataset.salary));

    return salary2 - salary1;
  });

  list.append(...listEmploy);
}

function getEmployees(items) {
  return items.reduce((res, el, i) => {
    const obj = {};

    obj.name = el.dataset.name;
    obj.position = el.dataset.position;
    obj.salary = el.dataset.salary;
    obj.age = el.dataset.age;

    res.push(obj);

    return res;
  }, []);
}

sortList(listEmploy);

getEmployees(listEmploy);

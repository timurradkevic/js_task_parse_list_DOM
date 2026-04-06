'use strict';

const list = document.querySelector('ul');
const listEmploy = [...document.querySelectorAll('li')];

function sortList(items) {
  return items.sort((el1, el2) => {
    const salary1 = Number(
      el1.dataset.salary.replaceAll(',', '').replaceAll('$', ''),
    );

    const salary2 = Number(
      el2.dataset.salary.replaceAll(',', '').replaceAll('$', ''),
    );

    return salary2 - salary1;
  });
}

function toObjectEmployee(items) {
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

list.append(...listEmploy);

toObjectEmployee(listEmploy);

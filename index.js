const arrowRight = document.getElementById('arrow-right-js');
const arrowLeft = document.getElementById('arrow-left-js');
const table1 = document.getElementById('table_1');
const table2 = document.getElementById('table_2');

arrowRight.onclick = function () {
  table1.style.display = 'none';
  table2.style.display = 'block';
};

arrowLeft.onclick = function () {
  table1.style.display = 'block';
  table2.style.display = 'none';
};

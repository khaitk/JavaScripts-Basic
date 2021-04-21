var table = document.getElementById('table');
table.style.color = 'white';

var tr = document.getElementsByTagName('tr');

for (const i in tr) {
    tr[i].style.background = 'blue';
}
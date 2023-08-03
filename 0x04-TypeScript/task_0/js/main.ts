interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: 'Mbode',
    lastName: 'Floe',
    age: 23,
    location: 'Lusaka, Zambia'
};
const student2: Student = {
    firstName: 'Mwila',
    lastName: 'Petoro',
    age: 23,
    location: 'Malindi, Kenya'
};

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const trHead: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableHeaderCellElement = document.createElement('th');
const th2: HTMLTableHeaderCellElement = document.createElement('th');
const th3: HTMLTableHeaderCellElement = document.createElement('th');
const th4: HTMLTableHeaderCellElement = document.createElement('th');

th1.innerHTML = 'firstName';
th2.innerHTML = 'location';
th3.innerHTML = 'age';
th4.innerHTML = 'lastName';

trHead.appendChild(th1);
trHead.appendChild(th2);
trHead.appendChild(th3);
trHead.appendChild(th4);
thead.appendChild(trHead);
table.appendChild(thead);

studentsList.forEach((student: Student) => {
    const tr: HTMLTableRowElement = document.createElement('tr');
    const td1: HTMLTableDataCellElement = document.createElement('td');
    const td2: HTMLTableDataCellElement = document.createElement('td');
    const td3: HTMLTableDataCellElement = document.createElement('td');
    const td4: HTMLTableDataCellElement = document.createElement('td');

    td1.innerHTML = student.firstName;
    td2.innerHTML = student.location;
    td3.innerHTML = student.age.toString();
    td4.innerHTML = student.lastName;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
});

table.appendChild(tbody);
body.appendChild(table);



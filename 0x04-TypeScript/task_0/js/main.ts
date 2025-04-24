interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 30,
  location: 'London'
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const table: HTMLTableElement = document.createElement('table');
  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  studentsList.forEach((student: Student) => {
      const row: HTMLTableRowElement = document.createElement('tr');
      const firstNameCell: HTMLTableCellElement = document.createElement('td');
      const locationCell: HTMLTableCellElement = document.createElement('td');

      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;

      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

renderTable();

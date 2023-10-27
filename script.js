document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addbtn = document.getElementById('addbtn');
    const tasklist = document.getElementById('task-list');
  
    addbtn.addEventListener('click', () => {
      if (taskInput.value === '') {
        alert('You must write something');
      } else {
        const li = document.createElement('li');
        li.innerHTML = taskInput.value;
  
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        span.classList.add('delete-btn');
  
        li.appendChild(span);
        tasklist.appendChild(li);
        taskInput.value = '';
      }
    });
  
    tasklist.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-btn')) {
        const listItem = event.target.parentElement;
        tasklist.removeChild(listItem);
      }
    });
  });
  


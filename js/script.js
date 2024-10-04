const jokeriTable = document.getElementById('jokeriTable');
const generateButton = document.getElementById('generateButton');
const riviCount = document.getElementById('riviCount');

let count = 0;

generateButton.addEventListener('click', function() {
    addJokeriRow();
});

function addJokeriRow() {

    const newRow = jokeriTable.insertRow();

    for (let i = 0; i < 7; i++) {

        const newCell = newRow.insertCell();
        
        const randomNumber = Math.floor(Math.random() * 10);

        newCell.textContent = randomNumber;
    }

    count++;
    riviCount.textContent = count;
}
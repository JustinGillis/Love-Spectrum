const labels = ["Storge", "Philia", "Eros", "Agape", "Ludus", "Pragma", "Philautia"];

// Dynamically render the input fields
function renderInputs(id) {
    const container = document.getElementById(id);
    labels.forEach(label => {
        const inputDiv = document.createElement('div');
        inputDiv.innerHTML = `
            <label>${label}: </label>
            <input type="number" min="-100" max="100" name="${id}-${label}" required>
        `;
        container.appendChild(inputDiv);
    });
}

renderInputs('internalInputs');
renderInputs('externalInputs');

// Function to generate the chart
function generateChart() {
    const internalScores = labels.map(label => +document.querySelector(`input[name="internalInputs-${label}"]`).value);
    const externalScores = labels.map(label => +document.querySelector(`input[name="externalInputs-${label}"]`).value);
    
    const ctx = document.getElementById('soulChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Internal',
                data: internalScores,
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                borderColor: 'blue',
                borderWidth: 1
            }, {
                label: 'External',
                data: externalScores,
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                borderColor: 'red',
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    min: -100,
                    max: 100
                }
            }
        }
    });
}

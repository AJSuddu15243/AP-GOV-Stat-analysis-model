document.addEventListener('DOMContentLoaded', async () => {
    // Load the SVG map
    const response = await fetch('us.svg');
    const svgText = await response.text();
    document.querySelector('.map-container').innerHTML = svgText;

    // Get the SVG element and remove any existing styles
    const svg = document.querySelector('svg');
    svg.style.stroke = 'none';
    svg.style.fill = 'none';

    // Get all state paths and add click handlers
    const statePaths = document.querySelectorAll('path');
    statePaths.forEach(path => {
        // Remove any inline styles
        path.removeAttribute('style');
        
        const stateName = path.getAttribute('data-name');
        if (stateName) {
            path.classList.add('state');
            path.setAttribute('data-state', stateName);
            
            path.addEventListener('click', () => {
                toggleState(path, stateName);
                updateResults();
            });
        }
    });
});

function toggleState(path, stateName) {
    if (path.classList.contains('selected')) {
        path.classList.remove('selected');
        electionData.deselectState(stateName);
    } else {
        path.classList.add('selected');
        electionData.selectState(stateName);
    }
}

function updateResults() {
    // Update selected states list
    const selectedStatesList = document.getElementById('selected-states');
    selectedStatesList.innerHTML = electionData.getSelectedStates()
        .map(state => `<li>${state}</li>`)
        .join('');

    // Update top ideals list
    const topIdealsList = document.getElementById('top-ideals');
    topIdealsList.innerHTML = electionData.getTopIdeals()
        .map(ideal => `<li>${ideal}</li>`)
        .join('');
} 
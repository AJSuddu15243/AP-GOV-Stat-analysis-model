document.addEventListener('DOMContentLoaded', async () => {
    
    const response = await fetch('us.svg');
    const svgText = await response.text();
    document.querySelector('.map-container').innerHTML = svgText;

    
    const svg = document.querySelector('svg');
    svg.style.stroke = 'none';
    svg.style.fill = 'none';

    
    const statePaths = document.querySelectorAll('path');
    statePaths.forEach(path => {
        
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
    
    const selectedStatesList = document.getElementById('selected-states');
    selectedStatesList.innerHTML = electionData.getSelectedStates()
        .map(state => `<li>${state}</li>`)
        .join('');

   
    const topIdealsList = document.getElementById('top-ideals');
    topIdealsList.innerHTML = electionData.getTopIdeals()
        .map(ideal => `<li>${ideal}</li>`)
        .join('');
} 

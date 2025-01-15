// Data structure for states and their political ideals
const electionData = {
    states: [
        { name: "Alabama", ideals: ["Conservative values", "Economic growth", "Infrastructure"] },
        { name: "Alaska", ideals: ["Resource development", "Environmental protection", "Native rights"] },
        { name: "Arizona", ideals: ["Immigration reform", "Water rights", "Economic growth"] },
        { name: "Arkansas", ideals: ["Rural development", "Education reform", "Healthcare access"] },
        { name: "California", ideals: ["Climate action", "Tech innovation", "Social justice"] },
        { name: "Colorado", ideals: ["Environmental protection", "Education funding", "Economic growth"] },
        { name: "Connecticut", ideals: ["Education funding", "Healthcare access", "Economic stability"] },
        { name: "Delaware", ideals: ["Business friendly", "Education reform", "Environmental protection"] },
        { name: "Florida", ideals: ["Senior care", "Economic growth", "Immigration reform"] },
        { name: "Georgia", ideals: ["Economic opportunity", "Education reform", "Infrastructure"] },
        { name: "Hawaii", ideals: ["Tourism support", "Environmental protection", "Native rights"] },
        { name: "Idaho", ideals: ["Agriculture support", "Public lands", "Education funding"] },
        { name: "Illinois", ideals: ["Urban development", "Education funding", "Infrastructure"] },
        { name: "Indiana", ideals: ["Manufacturing", "Education reform", "Healthcare access"] },
        { name: "Iowa", ideals: ["Agriculture support", "Renewable energy", "Education funding"] },
        { name: "Kansas", ideals: ["Agriculture support", "Education funding", "Healthcare access"] },
        { name: "Kentucky", ideals: ["Rural development", "Healthcare access", "Education reform"] },
        { name: "Louisiana", ideals: ["Coastal protection", "Economic growth", "Education reform"] },
        { name: "Maine", ideals: ["Healthcare access", "Environmental protection", "Rural development"] },
        { name: "Maryland", ideals: ["Education funding", "Transportation", "Healthcare access"] },
        { name: "Massachusetts", ideals: ["Education funding", "Healthcare access", "Innovation support"] },
        { name: "Michigan", ideals: ["Manufacturing", "Water protection", "Education funding"] },
        { name: "Minnesota", ideals: ["Healthcare access", "Education funding", "Environmental protection"] },
        { name: "Mississippi", ideals: ["Rural development", "Education reform", "Healthcare access"] },
        { name: "Missouri", ideals: ["Economic growth", "Education reform", "Healthcare access"] },
        { name: "Montana", ideals: ["Public lands", "Agriculture support", "Healthcare access"] },
        { name: "Nebraska", ideals: ["Agriculture support", "Education funding", "Healthcare access"] },
        { name: "Nevada", ideals: ["Tourism support", "Water rights", "Economic growth"] },
        { name: "New Hampshire", ideals: ["Education funding", "Healthcare access", "Environmental protection"] },
        { name: "New Jersey", ideals: ["Education funding", "Transportation", "Environmental protection"] },
        { name: "New Mexico", ideals: ["Education reform", "Water rights", "Economic growth"] },
        { name: "New York", ideals: ["Urban development", "Climate action", "Social justice"] },
        { name: "North Carolina", ideals: ["Education funding", "Economic growth", "Healthcare access"] },
        { name: "North Dakota", ideals: ["Agriculture support", "Energy development", "Healthcare access"] },
        { name: "Ohio", ideals: ["Manufacturing", "Education funding", "Healthcare access"] },
        { name: "Oklahoma", ideals: ["Energy development", "Education reform", "Healthcare access"] },
        { name: "Oregon", ideals: ["Environmental protection", "Housing affordability", "Healthcare access"] },
        { name: "Pennsylvania", ideals: ["Manufacturing", "Education funding", "Healthcare access"] },
        { name: "Rhode Island", ideals: ["Education funding", "Healthcare access", "Environmental protection"] },
        { name: "South Carolina", ideals: ["Economic growth", "Education reform", "Healthcare access"] },
        { name: "South Dakota", ideals: ["Agriculture support", "Education funding", "Healthcare access"] },
        { name: "Tennessee", ideals: ["Economic growth", "Education reform", "Healthcare access"] },
        { name: "Texas", ideals: ["Energy development", "Economic growth", "Education reform"] },
        { name: "Utah", ideals: ["Education funding", "Economic growth", "Public lands"] },
        { name: "Vermont", ideals: ["Environmental protection", "Healthcare access", "Education funding"] },
        { name: "Virginia", ideals: ["Education funding", "Transportation", "Economic growth"] },
        { name: "Washington", ideals: ["Environmental protection", "Tech innovation", "Education funding"] },
        { name: "West Virginia", ideals: ["Rural development", "Healthcare access", "Economic growth"] },
        { name: "Wisconsin", ideals: ["Manufacturing", "Education funding", "Healthcare access"] },
        { name: "Wyoming", ideals: ["Energy development", "Public lands", "Education funding"] }
    ],
    
    selectedStates: [],
    selectedIdeals: {},

    // Add state to selection
    selectState(stateName) {
        const state = this.states.find(s => s.name === stateName);
        if (state && !this.selectedStates.includes(stateName)) {
            this.selectedStates.push(stateName);
            state.ideals.forEach(ideal => 
                this.selectedIdeals[ideal] = (this.selectedIdeals[ideal] || 0) + 1
            );
            return true;
        }
        return false;
    },

    // Remove state from selection
    deselectState(stateName) {
        const state = this.states.find(s => s.name === stateName);
        const index = this.selectedStates.indexOf(stateName);
        if (index !== -1) {
            this.selectedStates.splice(index, 1);
            state.ideals.forEach(ideal => {
                this.selectedIdeals[ideal] = Math.max(0, (this.selectedIdeals[ideal] || 0) - 1);
                if (this.selectedIdeals[ideal] === 0) {
                    delete this.selectedIdeals[ideal];
                }
            });
            return true;
        }
        return false;
    },

    // Get top N ideals
    getTopIdeals(count = 3) {
        return Object.entries(this.selectedIdeals)
            .sort((a, b) => b[1] - a[1])
            .slice(0, count)
            .map(([ideal, count]) => `${ideal} (${count} states)`);
    },

    // Get all selected states
    getSelectedStates() {
        return [...this.selectedStates];
    }
};

// Export the data object
window.electionData = electionData; 
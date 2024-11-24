function showCurrent(section){
    const currTab = document.getElementById(tabs[section]);
    if (currTab.style.display === "block"){
        currTab.style.display = "none"
    } else{
        document.getElementById(tabs[section]).style.display = 'block'
    }

    const filteredTabs = Object.keys(tabs).filter((tab) => {
        return tab != section
    });

    filteredTabs.forEach((tab) => {
        document.getElementById(tabs[tab]).style.display='none'
    })
}

function toggleXPTable() {
    const xpTable = document.getElementById('xpTable');
    // const toggleButton = document.getElementById('toggleButton');
    const chevronIcon = document.getElementById('chevronIcon');
    
    // Toggle visibility of the table
    xpTable.classList.toggle('hidden');
    
    // Change button text and icon based on table visibility
    if (xpTable.classList.contains('hidden')) {
        chevronIcon.classList.remove('rotate-180');
    } else {
        chevronIcon.classList.add('rotate-180');
    }
}

function toggleRewardDesc(){
    const rewardDesc = document.getElementById('club-rewards-desc');
    // const toggleButton = document.getElementById('toggleButton');
    const chevronIcon = document.getElementById('chevronIcon');
    
    // Toggle visibility of the table
    rewardDesc.classList.toggle('hidden');
    
    // Change button text and icon based on table visibility
    if (rewardDesc.classList.contains('hidden')) {
        chevronIcon.classList.remove('rotate-180');
    } else {
        chevronIcon.classList.add('rotate-180');
    }
    
}
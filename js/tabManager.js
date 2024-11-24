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
    const chevronIcon = document.getElementById('chevronIcon');
    
    xpTable.classList.toggle('hidden');
    if (xpTable.classList.contains('hidden')) {
        chevronIcon.classList.remove('rotate-180');
    } else {
        chevronIcon.classList.add('rotate-180');
    }
}

function toggleRewardDesc(){
    const rewardDesc = document.getElementById('club-rewards-desc');
    const chevronIcon = document.getElementById('chevronIcon');
    rewardDesc.classList.toggle('hidden');
    
    if (rewardDesc.classList.contains('hidden')) {
        chevronIcon.classList.remove('rotate-180');
    } else {
        chevronIcon.classList.add('rotate-180');
    }
    
}
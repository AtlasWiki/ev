export function showCurrentTab(tabname){
    const currTab = document.getElementById(tabs[tabname]);
    if (currTab.style.display === "block"){
        currTab.style.display = "none"
    } else{
        document.getElementById(tabs[tabname]).style.display = 'block'
    }

    const filteredTabs = Object.keys(tabs).filter((tab) => {
        return tab != tabname
    });

    filteredTabs.forEach((tab) => {
        document.getElementById(tabs[tab]).style.display='none'
    })
}

export function showCurrentSection(sectionname){
    const section = document.getElementById(sections[sectionname]);
    const chevronIcon = document.getElementById(`${sectionname}ChevronIcon`);
    
    section.classList.toggle('hidden');
    if (section.classList.contains('hidden')) {
        chevronIcon.classList.remove('rotate-180');
    } else {
        chevronIcon.classList.add('rotate-180');
    }
}

export function createGap(id, button) {
    const section = document.getElementById(id);
    if (section.classList.contains("hidden")){
        button.classList.replace('mt-10', 'mt-2');
    } else {
        button.classList.replace('mt-2', 'mt-10')
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}   }
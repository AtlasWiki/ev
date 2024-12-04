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

    currTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

const discordTag = document.getElementById('discord-tag');
const clipboardIcon = document.getElementById('clipboard-icon');

// Function to handle the click event for copying text
clipboardIcon.addEventListener('click', () => {
  const textToCopy = discordTag.innerText.trim();  // To remove extra spaces

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      // Change text and background color for success feedback
      discordTag.style.backgroundColor = 'green';
      discordTag.childNodes[2].textContent = "COPIED"; // Change only the text

      // Reset the style and content after a brief delay
      setTimeout(() => {
        discordTag.style.backgroundColor = 'gray';
        discordTag.childNodes[2].textContent = ".mrunoriginal"; // Reset text to original
      }, 1000);
    })
    .catch((error) => {
      console.error('Failed to copy text: ', error);
    });
});



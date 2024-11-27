export const changelog = {
    "v0.1.0": { title:"Initial Release", date: "11/24/2024", url: "https://github.com/AtlasWiki/ev/releases/tag/v0.1.0" },
    "v0.2.0": { title:"Club Rewards", date: "11/25/2024", url:"https://github.com/AtlasWiki/ev/releases/tag/v0.2.0" },
    'v0.3.0': { title:"Accessibility and Bug fixes", date: "11/25/2024", url:"https://github.com/AtlasWiki/ev/releases/tag/v0.3.0" }
}

export function createLog(){
    const changelogPlaceholder = document.getElementById('changelog-item');
    const versions = Object.entries(changelog).map(
        ([version, data]) => 
    `
        <div class="mt-1">
           <a href="${data.url}" class="text-blue-400 underline hover:no-underline">
                ${version} - ${data.title} (${data.date})
           </a>
        </div>
    `).join('')
    changelogPlaceholder.innerHTML = versions
}

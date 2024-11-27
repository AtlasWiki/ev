function profitSegment(){
    const section = document.createElement('section');
    section.innerHTML = `
        <div id="profit-calculator" class="mb-10 p-5 bg-custom-section rounded-lg shadow-lg hidden">
            <h2 class="text-2xl font-semibold text-custom-highlight mb-5">Profit</h2>

            <div id="profitSection"></div>

            <label for="apPercent" class="block font-semibold">AP %:</label>
            <input type="number" id="apPercent" placeholder="Enter AP %" class="mt-2 w-full p-2 rounded bg-custom-input text-white border focus:outline-none focus:ring-2 focus:ring-[#00b3b3] mb-2" />

            <label for="remoteMultiplier" class="block font-semibold">Remote + Club Multiplier (x):</label>
            <input type="number" id="remoteMultiplier" placeholder="Enter Remote Multiplier" class="mt-2 w-full p-2 rounded bg-custom-input text-white border focus:outline-none focus:ring-2 focus:ring-[#00b3b3] mb-2" />

            <label for="petSelect" class="block font-semibold">Choose Delivery Pet:</label>
            <select id="petSelect" class="mt-2 w-full p-2 rounded bg-custom-input text-white border focus:outline-none focus:ring-2 focus:ring-[#00b3b3] mb-2">
                <option value=""></option>
                <option value="panda">Panda</option>
                <option value="turtle">Turtle</option>
                <option value="red_panda">Red Panda</option>
                <option value="pony">Pony</option>
                <option value="penguin">Penguin</option>
            </select>

            <label for="perfect" class="block font-semibold">Perfect [yes/no]:</label>
            <select id="perfect" class="mt-2 w-full p-2 rounded bg-custom-input text-white border focus:outline-none focus:ring-2 focus:ring-[#00b3b3] mb-2">
                <option value=""></option>
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>

            <label for="divinity" class="block font-semibold">Divinity [yes/no]:</label>
            <select id="divinity" class="mt-2 w-full p-2 rounded bg-custom-input text-white border focus:outline-none focus:ring-2 focus:ring-[#00b3b3] mb-2">
                <option value=""></option>
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>

            <button onclick="calculateProfit()" class="bg-[#00b3b3] hover:bg-[#008080] text-white py-2 px-4 rounded mt-2">
                Calculate
            </button>
            <div id="profit-result" class="font-semibold text-green-400 mt-5"></div>
        </div>`
    document.body.appendChild(section);
}
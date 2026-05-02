let currentIndex = 1;

const itemData = {
    name:   "MOBILE PHONE",
    rarity: "TRASH",
    price:  3291,
    desc:   "Long-outdated model, telecommunications signal patchy. " +
            "Risk of explosion. Call friends, stir up trouble, " +
            "even newest cybernetic rigs compatible."
};

const stations = [
    { freq: "89.3",  name: "VEXELSTROM RADIO",  type: "INDUSTRIAL",  land: "PACIFICA",     cover: { text: "VEXEL<br>STROM",  bg: "#7a1f3d", color: "#ff4d8a" } },
    { freq: "91.9",  name: "ROYAL BLUES RADIO", type: "POST WAVE",   land: "HEYWOOD",      cover: { text: "Royal<br>Blue 91.9", bg: "#a8c5e0", color: "#1a3a5f" } },
    { freq: "92.9",  name: "EVENING FM",        type: "AMBIENT",     land: "CITY CENTER",  cover: { text: "Evening<br>FM",    bg: "#2a1a3a", color: "#d4af37" } },
    { freq: "95.2",  name: "UNDERGROUND RADIO", type: "DARK ELECTRO",land: "WATSON",       cover: { text: "UNDER<br>GROUND",  bg: "#0a0a0a", color: "#00ff88" } },
    { freq: "96.1",  name: "MAX METAL",         type: "HEAVY METAL", land: "SANTO DOMINGO",cover: { text: "MAX<br>METAL",     bg: "#3a0000", color: "#ff2200" } },
    { freq: "98.7",  name: "BODY HEAT RADIO",   type: "SYNTH POP",   land: "JAPANTOWN",    cover: { text: "BODY<br>HEAT",     bg: "#ff1a8a", color: "#ffe600" } },
    { freq: "101.9", name: "SAD ELEGY",         type: "DARK AMBIENT",land: "NORTH OAK",    cover: { text: "SAD<br>ELEGY",     bg: "#1a1a2e", color: "#9d7fcf" } }
];


function renderItemCard() {
    document.getElementById("item-name").textContent   = itemData.name;
    document.getElementById("item-rarity").textContent = itemData.rarity;
    document.getElementById("item-desc").textContent   = itemData.desc;
    document.getElementById("item-price").textContent  = itemData.price.toLocaleString();
}

function renderStationList() {
    const list = document.getElementById("station-list");
    list.innerHTML = "";

    stations.forEach(function (st, i) {
        const li = document.createElement("li");
        li.dataset.index = i;
        li.innerHTML = '<span class="station-freq">' + st.freq + '</span>' + st.name;
        if (i === currentIndex) li.classList.add("active");

        li.addEventListener("click", function () {
            switchStation(i);
        });

        list.appendChild(li);
    });
}

function renderCover() {
    const st = stations[currentIndex];
    const art = document.getElementById("cover-art");

    art.innerHTML = st.cover.text;
    art.style.backgroundColor = st.cover.bg;
    art.style.color = st.cover.color;

    document.getElementById("meta-tuned").textContent = st.freq + " MHz";
    document.getElementById("meta-type").textContent  = st.type;
    document.getElementById("meta-land").textContent  = st.land;
}

function switchStation(newIndex) {
    if (newIndex === currentIndex) return;
    currentIndex = newIndex;

    const items = document.querySelectorAll("#station-list li");
    items.forEach(function (li, i) {
        li.classList.toggle("active", i === currentIndex);
    });

    renderCover();
}


renderItemCard();
renderStationList();
renderCover();

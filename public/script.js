document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/crafts')
        .then(response => response.json())
        .then(crafts => {
            const craftsContainer = document.getElementById('crafts');
            crafts.forEach(craft => {
                const html = `
                    <div class="w3-quarter">
                        <img src="/crafts/${craft.image}" onclick="showModal('${craft.name}')" style="width:100%;cursor:pointer" alt="${craft.name}">
                    </div>
                `;
                craftsContainer.innerHTML += html;
            });            
        });

    const modal = document.getElementById("craftModal");
    const span = document.getElementsByClassName("close")[0];

    window.showModal = (craftName) => {
        const craft = crafts.find(c => c.name === craftName);
        document.getElementById('craftImage').src = craft.image;
        document.getElementById('craftInfo').innerHTML = `
            <h1>${craft.name}</h1>
            <p>${craft.description}</p>
            <ul>${craft.supplies.map(supply => `<li>${supply}</li>`).join('')}</ul>
        `;
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

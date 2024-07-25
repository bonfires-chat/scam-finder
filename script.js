fetch('scam-data.json')
   .then(response => response.json())
   .then(data => {
        const scamFeed = document.querySelector('#scam-feed');
        data.forEach((scam) => {
            const scamItem = document.createElement('li');
            scamItem.className = 'cam-item';
            scamItem.innerHTML = `
                <span class="scam-type">${scam.type}</span>
                <span class="scam-description">${scam.description}</span>
                <span class="scam-date">${scam.date}</span>
            `;
            scamFeed.appendChild(scamItem);
        });
    })
   .catch(error => console.error(error));

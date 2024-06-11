// events.js

fetch('../data/events.json')
    .then(response => response.json())
    .then(data => {
        const eventsContainer = document.querySelector('.events-box');

        data.events.forEach(event => {
            const eventColumn = document.createElement('div');
            eventColumn.classList.add('events-box-column');

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');
            const image = document.createElement('img');
            image.src = `../images/events-${event.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
            image.alt = `${event.name} Image`;
            imageContainer.appendChild(image);
            eventColumn.appendChild(imageContainer);

            const content = document.createElement('div');
            content.classList.add('content');
            const eventName = document.createElement('h2');
            eventName.textContent = event.name;
            content.appendChild(eventName);
            const registrationDates = document.createElement('p');
            registrationDates.innerHTML = `<b>Registration Dates</b><br>${event.date}`;
            content.appendChild(registrationDates);
            const location = document.createElement('p');
            location.innerHTML = `<b>Location</b><br><a href="${event.location.url}" target="_blank" class="no-underline-link">${event.location.name}</a>`;
            content.appendChild(location);
            eventColumn.appendChild(content);

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');
            const button = document.createElement('button');
            button.textContent = 'Go to Event';
            button.onclick = function() {
                window.location.href = 'event.html'; // Assuming this is your event detail page
            };
            buttonContainer.appendChild(button);
            eventColumn.appendChild(buttonContainer);

            eventsContainer.appendChild(eventColumn);
        });
    })
    .catch(error => console.error('Error fetching events:', error));

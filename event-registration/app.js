const events = [
    {
        title: "Event 1",
        description: "Event details will be here 2-3 lines.",
        image: "/img/greenade.png",
        date: "Date will be here",
        formLink: "https://forms.google.com/example1"
    },
    {
        title: "Event 2",
        description: "We will create a Google Form. Clicking Submit will open it.",
        image: "/path/to/img-greenade.png",
        date: "Date will be here",
        formLink: "https://forms.google.com/example2"
    },
    {
        title: "Event 1",
        description: "Event details will be here 2-3 lines.",
        image: "/path/to/event-image1.jpg",
        date: "Date will be here",
        formLink: "https://forms.google.com/example1"
    },
    {
        title: "Event 1",
        description: "Event details will be here 2-3 lines.",
        image: "/path/to/event-image1.jpg",
        date: "Date will be here",
        formLink: "https://forms.google.com/example1"
    },
    {
        title: "Event 1",
        description: "Event details will be here 2-3 lines.",
        image: "/path/to/event-image1.jpg",
        date: "Date will be here",
        formLink: "https://forms.google.com/example1"
    },
];

const eventContainer = document.querySelector(".event-container");

events.forEach(event => {
    const eventBox = document.createElement("div");
    eventBox.classList.add("event-box");
    eventBox.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <div class="details">
            <h3>${event.title}</h3>
            <p>${event.description}</p>
        </div>
        <div>
            <p>${event.date}</p>
            <button onclick="window.open('${event.formLink}', '_blank')">Register</button>
        </div>
    `;
    eventContainer.appendChild(eventBox);
});

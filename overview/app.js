const teamMembers = [
    { name: "Manvith Shetty", role: "General Secretary", photo: "/abtus/images/gs.jpeg" },
    { name: "Sayali Chavan", role: "Chairperson", photo: "/abtus/images/cp.jpg" },
    { name: "Krrish Wasan", role: "Vice Chairperson", photo: "/abtus/images/vc.png" },
    { name: "Niranjan Jadhav", role: "Treasurer", photo: "/abtus/images/tr.jpeg" },
    { name: "Ved Thombre", role: "Technical Head", photo: "/abtus/images/th.jpeg" },
    { name: "Abhinav Mohurle", role: "Technical Head", photo: "/abtus/images/th2.jpeg" },
    { name: "Aranya Sinha", role: "Event Head", photo: "/abtus/images/eh.png" },
    { name: "Swarali Gandhi", role: "Event Head", photo: "/abtus/images/EH2.jpeg" },
    { name: "Aryan Tate", role: "Publicity Head", photo: "/abtus/images/ph.jpeg" },
    { name: "Lubdha Modak", role: "Publicity Head", photo: "/abtus/images/ph2.jpg" },
    { name: "Vedant Mahalle", role: "Creative Head", photo: "/abtus/images/ch.png" },
    { name: "Eshanika Amballa", role: "Creative Head", photo: "/abtus/images/ch2.jpeg" },
    { name: "Yash Pawar", role: "Documentation Head", photo: "/abtus/images/dh.jpeg" },
    { name: "Gargi Kusnoor", role: "Documentation Head", photo: "/abtus/images/dh2.png" },
];

const teamContainer = document.querySelector(".team");

teamMembers.forEach(member => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("member");
    memberDiv.innerHTML = `
        <div class="member-photo" style="background-image: url('${member.photo}');"></div>
        <h3>${member.name}</h3>
        <p>${member.role}</p>
    `;
    teamContainer.appendChild(memberDiv);
});

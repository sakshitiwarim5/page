document.addEventListener("DOMContentLoaded", () => {
  const speakerData = [
    {
      name: "John Doe",
      position: "Chief Marketing Officer",
      company: "Specbee",
      description:
        "Monotectally synergize business communities rather than client-centric convergence...",
      image: "https://shorturl.at/eQeAl",
      icons: ["🌐", "✉️", "💼"], // Add icons for web, email, etc.
    },
    {
      name: "Jane Smith",
      position: "CTO",
      company: "Tech Innovations",
      description:
        "Facilitate next-generation technologies through leading-edge innovation...",
      image: "https://shorturl.at/SXFZG",
      icons: ["🌐", "✉️", "💼"],
    },
    {
      name: "Alice Johnson",
      position: "Product Manager",
      company: "Global Solutions",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high-level overviews...",
      image: "https://shorturl.at/QPyAg",
      icons: ["🌐", "✉️", "💼"],
    },
    {
      name: "Bob Brown",
      position: "Lead Developer",
      company: "Innovatech",
      description:
        "Iterate user experiences via process-centric solutions and innovative strategies...",
      image: "https://shorturl.at/82YPR",
      icons: ["🌐", "✉️", "💼"],
    },
    // Add more speaker data objects here as needed
  ];

  const cards = document.querySelectorAll(".featured-speakers__card");
  const speakerInfo = document.getElementById("speaker-info");
  const speakerName = document.getElementById("speakerName");
  const speakerPosition = document.getElementById("speakerPosition");
  const speakerCompany = document.getElementById("speakerCompany");
  const speakerDescription = document.getElementById("speakerDescription");
  const speakerImage = document.getElementById("speakerImage");

  // Open Speaker Info and populate data
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = card.getAttribute("data-index");
      const speaker = speakerData[index];

      // Populate speaker info
      speakerName.textContent = speaker.name;
      speakerPosition.textContent = speaker.position;
      speakerCompany.textContent = speaker.company;
      speakerDescription.textContent = speaker.description;
      speakerImage.src = speaker.image;

      speakerInfo.style.display = "block"; // Show speaker info
    });
  });
});

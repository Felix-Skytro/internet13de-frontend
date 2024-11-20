let currentIndex = 0; // Start at the first section
let sections = [];

// Fetch the JSON data
async function fetchSections() {
  try {
    const response = await fetch('./sections.json');
    sections = await response.json();
    renderSection(currentIndex);
  } catch (error) {
    console.error('Error fetching sections:', error);
  }
}

// Render a section by index
function renderSection(index) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // Clear existing content

  const sectionData = sections[index];
  if (!sectionData) {
    contentDiv.innerHTML = '<p>No data available</p>';
    return;
  }

  // Create section container
  const sectionDiv = document.createElement('div');
  sectionDiv.className = 'section';

  // Add header
  const header = document.createElement('h2');
  header.textContent = sectionData.header;
  sectionDiv.appendChild(header);

  // Add informations
  sectionData.informations.forEach(info => {
    const infoDiv = document.createElement('div');

    const text = document.createElement('p');
    text.textContent = info.text;
    infoDiv.appendChild(text);

    if (info.image_url) {
      const image = document.createElement('img');
      image.src = info.image_url;
      image.alt = info.text;
      infoDiv.appendChild(image);
    }

    const link = document.createElement('a');
    link.href = info.url;
    link.textContent = 'Learn more';
    link.target = '_blank';
    infoDiv.appendChild(link);

    sectionDiv.appendChild(infoDiv);
  });

  contentDiv.appendChild(sectionDiv);
}

// Event listeners for buttons
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  renderSection(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sections.length;
  renderSection(currentIndex);
});

// Initialize
fetchSections();

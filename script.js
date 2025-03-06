// Array of freelancers, initially with ten freelancers
const freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 70, occupation: "Programmer" },
    { name: "David", price: 45, occupation: "Designer" },
    { name: "Eve", price: 60, occupation: "Marketer" },
    { name: "Frank", price: 55, occupation: "Photographer" },
    { name: "Grace", price: 80, occupation: "Consultant" },
    { name: "Hank", price: 40, occupation: "Chef" },
    { name: "Ivy", price: 65, occupation: "Accountant" },
    { name: "Jack", price: 35, occupation: "Artist" }
];

const freelancerList = document.getElementById("freelancerList");
const averagePriceDisplay = document.getElementById("averagePrice");

// Function to render the freelancers into the table
function renderFreelancers() {
    freelancerList.innerHTML = ""; // Clear current list
    freelancers.forEach(freelancer => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.price}</td>
        `;
        freelancerList.appendChild(row);
    });
}

// Function to calculate and update the average price
function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = (total / freelancers.length).toFixed(2);
    averagePriceDisplay.textContent = average;
}

// Function to add a new freelancer dynamically every few seconds
function addFreelancer() {
    const newFreelancers = [
        { name: "Kevin", price: 50, occupation: "Engineer" },
        { name: "Laura", price: 75, occupation: "Consultant" },
        { name: "Mike", price: 55, occupation: "Coach" }
    ];
    
    // Pick a random freelancer from the list
    const randomIndex = Math.floor(Math.random() * newFreelancers.length);
    freelancers.push(newFreelancers[randomIndex]);
    renderFreelancers();
    updateAveragePrice();
}

// Initial rendering
renderFreelancers();
updateAveragePrice();

// Add a new freelancer every 5 seconds
setInterval(addFreelancer, 5000);

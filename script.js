// Advertiser class to represent each bidder
class Advertiser {
  constructor(name, bid, qualityScore) {
    this.name = name;
    this.bid = bid;
    this.qualityScore = qualityScore;
  }

  // Calculate ad rank (bid * quality score)
  get adRank() {
    return this.bid * this.qualityScore;
  }
}

// Array to store all advertisers
let advertisers = [
  new Advertiser("TechGadgets", 2.5, 8),
  new Advertiser("FashionTrends", 3.0, 6),
  new Advertiser("TravelDeals", 1.8, 9),
  new Advertiser("HomeDecor", 2.2, 7),
];

// Function to run the auction
function runAuction(advertisers) {
  // Sort advertisers by ad rank in descending order
  return advertisers.sort((a, b) => b.adRank - a.adRank);
}

// Function to display auction results
function displayAuctionResults(results) {
  const resultsDiv = document.getElementById("auction-results");
  const explanationDiv = document.getElementById("auction-explanation");

  // Create table for results
  let tableHTML = `
        <h2>Auction Results</h2>
        <table>
            <tr>
                <th>Rank</th>
                <th>Advertiser</th>
                <th>Bid</th>
                <th>Quality Score</th>
                <th>Ad Rank</th>
            </tr>
    `;

  results.forEach((advertiser, index) => {
    const rowClass = index === 0 ? "winner" : "";
    tableHTML += `
            <tr class="${rowClass}">
                <td>${index + 1}</td>
                <td>${advertiser.name}</td>
                <td>$${advertiser.bid.toFixed(2)}</td>
                <td>${advertiser.qualityScore}</td>
                <td>${advertiser.adRank.toFixed(2)}</td>
            </tr>
        `;
  });

  tableHTML += "</table>";
  resultsDiv.innerHTML = tableHTML;

  // Explanation of the auction process
  explanationDiv.innerHTML = `
        <h2>How the Auction Works</h2>
        <p>1. Each advertiser submits a bid and has a quality score.</p>
        <p>2. The ad rank is calculated by multiplying the bid and quality score.</p>
        <p>3. Advertisers are ranked by their ad rank, with the highest rank winning the auction.</p>
        <p>4. The winner (highlighted in green) gets the top ad placement.</p>
    `;
}

// Function to add a new advertiser
function addAdvertiser(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const bid = parseFloat(document.getElementById("bid").value);
  const qualityScore = parseInt(document.getElementById("quality").value);

  advertisers.push(new Advertiser(name, bid, qualityScore));

  // Clear form fields
  document.getElementById("new-advertiser-form").reset();

  // Optionally, you can run the auction immediately after adding a new advertiser
  // runAndDisplayAuction();
}

// Function to run the auction and display results
function runAndDisplayAuction() {
  const auctionResults = runAuction(advertisers);
  displayAuctionResults(auctionResults);
}

// Event listeners
document
  .getElementById("new-advertiser-form")
  .addEventListener("submit", addAdvertiser);
document
  .getElementById("run-auction")
  .addEventListener("click", runAndDisplayAuction);

// Initial auction run
runAndDisplayAuction();

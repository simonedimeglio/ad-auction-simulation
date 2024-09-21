# Basic Ad Auction Simulation

## Overview

This project implements a basic simulation of an online ad auction system, similar to those used in programmatic advertising platforms like Google Ads. It demonstrates the core concepts of real-time bidding (RTB) and ad ranking in a simplified, client-side JavaScript application.

## Features

- Simulates multiple advertisers bidding for ad placement
- Calculates ad rank based on bid amount and quality score
- Sorts and displays auction results in real-time
- Provides a brief explanation of the auction process

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Technical Details

### Ad Auction Algorithm

The auction process is implemented using the following steps:

1. Each advertiser is represented by an `Advertiser` class instance, which includes:

   - Name
   - Bid amount
   - Quality score

2. The ad rank for each advertiser is calculated using the formula:

   ```
   Ad Rank = Bid Amount * Quality Score
   ```

3. Advertisers are sorted in descending order based on their ad rank.

4. The advertiser with the highest ad rank wins the auction and would theoretically receive the top ad placement.

### Code Structure

- `Advertiser` class: Represents each bidder in the auction
- `runAuction` function: Sorts advertisers based on ad rank
- `displayAuctionResults` function: Renders auction results and explanation in the DOM

## Installation and Usage

1. Clone the repository:

   ```
   git clone https://github.com/your-username/basic-ad-auction-simulation.git
   ```

2. Navigate to the project directory:

   ```
   cd basic-ad-auction-simulation
   ```

3. Open `index.html` in a modern web browser.

## Customization

To modify the auction parameters or add more advertisers, edit the `advertisers` array in the JavaScript code:

```javascript
const advertisers = [
  new Advertiser("TechGadgets", 2.5, 8),
  new Advertiser("FashionTrends", 3.0, 6),
  new Advertiser("TravelDeals", 1.8, 9),
  new Advertiser("HomeDecor", 2.2, 7),
];
```

## Future Enhancements

Potential areas for expansion include:

- Implementing more complex bidding strategies
- Adding a user interface for dynamic advertiser input
- Simulating multiple ad slots with different priorities
- Incorporating historical performance data into the quality score calculation

## Contributing

Contributions to improve the simulation or extend its functionality are welcome. Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is open source and available under the [MIT License](LICENSE).

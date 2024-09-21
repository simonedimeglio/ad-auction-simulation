# Ad Auction Simulation

## Overview

This project implements an advanced simulation of an online ad auction system, similar to those used in programmatic advertising platforms like Google Ads. It demonstrates the core concepts of real-time bidding (RTB) and ad ranking in a client-side JavaScript application.

## Features

- Simulates multiple advertisers bidding for ad placement
- Calculates ad rank based on bid amount and quality score
- Sorts and displays auction results in real-time
- Provides a brief explanation of the auction process
- Modern, minimalist UI with responsive design
- Dynamic addition of new advertisers through a user-friendly form

## Technologies Used

- HTML5
- CSS3 (with custom properties for theming)
- JavaScript (ES6+)
- Google Fonts (Inter)

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
- `addAdvertiser` function: Handles the addition of new advertisers through the UI form

### UI Design

The user interface follows modern design principles:

- Minimalist and clean layout
- Neutral color palette with subtle contrasts
- Card-based design for clear separation of content
- Responsive layout for various screen sizes
- Improved typography using the Inter font family

## Installation and Usage

1. Clone the repository:

   ```
   git clone https://github.com/simonedimeglio/advanced-ad-auction-simulation.git
   ```

2. Navigate to the project directory:

   ```
   cd advanced-ad-auction-simulation
   ```

3. Open `index.html` in a modern web browser.

4. Use the form to add new advertisers or click the "Run Auction" button to simulate the auction with existing advertisers.

## Customization

To modify the auction parameters or add initial advertisers, edit the `advertisers` array in the `script.js` file:

```javascript
let advertisers = [
  new Advertiser("TechGadgets", 2.5, 8),
  new Advertiser("FashionTrends", 3.0, 6),
  new Advertiser("TravelDeals", 1.8, 9),
  new Advertiser("HomeDecor", 2.2, 7),
];
```

To customize the UI theme, you can modify the CSS custom properties in the `:root` selector in `style.css`.

## Future Enhancements

Potential areas for expansion include:

- Implementing more complex bidding strategies
- Adding data visualization for auction trends
- Simulating multiple ad slots with different priorities
- Incorporating historical performance data into the quality score calculation
- Adding user authentication for saving and managing multiple auction scenarios

## Contributing

Contributions to improve the simulation or extend its functionality are welcome. Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created by [Simone Di Meglio](https://github.com/simonedimeglio)

# Cornell Blockchain Website

This repository contains the source code for the Cornell Blockchain website, which showcases the club's activities, events, team members, and educational initiatives.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

```bash
CB Website/
├── .DS_Store
├── .gitignore
├── .gitattributes
├── .devcontainer/
│   ├── README.md
│   ├── devcontainer.json
├── conferences.html
├── e-board.html
├── education.html
├── index.html
├── subteams.html
├── images/
│   ├── conference/
│   ├── eboard/
│   ├── fun-images/
│   ├── group-photos/
│   ├── logos/
│   ├── partners/
│   ├── teaching/
│   └── finite-location/
├── scripts/
│   ├── .DS_Store
│   ├── dropdown.js
│   ├── hamburger.js
│   ├── carousel.js
│   └── modal.js
├── styles/
│   └── site.css
└── __MACOSX/
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for any potential development scripts)
- [Git](https://git-scm.com/)
- A modern web browser

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cb-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cb-website
   ```

## Development

### HTML Files

- `index.html`: The main landing page of the website.
- `conferences.html`: Information about blockchain conferences.
- `e-board.html`: Details about the executive board members.
- `education.html`: Information about the educational programs.
- `subteams.html`: Information about the various sub-teams within the club.

### Styles

- `styles/site.css`: Contains the styles for the website.

### Scripts

- `scripts/dropdown.js`: Manages dropdown menu functionality.
- `scripts/hamburger.js`: Controls the hamburger menu for mobile navigation.
- `scripts/carousel.js`: Handles the image carousel/slider.
- `scripts/modal.js`: Manages modal pop-ups.

### Images

- Contains images used throughout the website, organized by category (e.g., `conference`, `eboard`, `logos`).

## Deployment

To deploy the website, ensure all changes are committed and pushed to the main branch. Then, follow your web hosting provider's instructions to update the live site.

## Contributing

We welcome contributions from the community. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This should provide a clear and organized README file for your project. If you have any additional sections or modifications, feel free to ask!

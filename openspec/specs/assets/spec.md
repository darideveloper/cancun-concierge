# assets Specification

## Purpose
TBD - created by archiving change rebrand-digitalrealty-airport-transfers. Update Purpose after archive.
## Requirements
### Requirement: Create dedicated CSS and JS assets for Digital Realty
New dedicated assets MUST be created to allow for independent customization of the Digital Realty landing page.
#### Scenario: New Sass file creation
- Given the `css/` directory
- When a new file `_digitalrealty-airport-transfers.sass` is created
- Then it should be imported in `css/styles.sass`

#### Scenario: New JS file creation
- Given the `code/` directory
- When a new file `digitalrealty-airport-transfers.js` is created
- Then it should be imported in `digitalrealty-airport-transfers/index.html` instead of the `rohan-karisma` script


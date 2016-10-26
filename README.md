# Cisco Tools

## Functionalities
### Avature Search
  1. Want to avoid adding duplicates to Avature? Click the "Avature" button that opens a new tab with the lead's name pre-populated. This helps save time by avoiding copying-pasting

### Partner Search
  1. If you're like me, keeping track of Cisco's partners is a time intensive task. While we have an Excel spreadsheet, the online partner search tool is the most current source of information. 
  2. Click the "Partner" button to open a new tab with the lead's current employer pre-loaded as a search term.
  
## Installation
### Supported Browsers
1. Google Chrome

### Installing the Add-On
1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en "TamperMonkey")
2. Left click the browser extension  
![Logo](https://lh3.googleusercontent.com/2Nck70VF3N4WrJV4VZbgj2SNO7wWucNB1McQbS-ukSewe214Nt1AmH6pQPZ8KZgGWx6GvJbz5Q=s128-h128-e365)
2. Follow Link to the most recent source code  
[Master](userScripts/LinkedIn/revisit)
3. Copy and paste the code as a new script
  
### Known Issues
  1. The program will only work if it "fires" after the profile page has loaded completely. I've tried numerous strategies to time this correctly but none that works 100%. Currently, the program is set to wait 2.5 seconds before firing.
  2. If you notice the buttons are "common" looking (i.e. gray) their functionalities won't work. Refresh the page.
  3. Right-clicking a profile and opening in a new window will cause the above issue. Try loading the page by left-clicking.

# virtual-card-deck
A handy utility that allows you to create and customize (currently code-only) card decks for a board game. Runs in your browser, or use the demo site (full UI-based customization coming in the second version). This project is coded primarily with HTML and CSS, with some JavaScript to power the card drawing logic.

**NOTE:** At the moment, I am currently working on revising this utility so that you can customize your own decks via an interactive UI. During this time, the website may not work properly, if at all. This notice will be removed and replcaed once construction is completed.

# Usage
This repository contains a pre-loaded version of the virtual card deck for a stock market game. In this version, there are two decks: a Stock Alerts deck with 80 varying cards, and a World Events deck with 35 cards. You can change the card background as it appears on the web app; all you have to do is create your PNG files (ideally 250 x 370 px) and change the paths where required in the code. You also have full control over changing the card descriptions and titles; simply navigate to the 'script.js' file and change the values in the dictionaries.

To use the virtual card deck, you have a couple of options. First, you can clone this repo, which allows you full control over customizing the card deck. Then, you can use a simple browser extension like "Go Live" or "IIS Express" to run it in a web browser. If you absolutely must use the web app on a mobile device, you can use VS Code's Port Forwarding system to create a public port (via DevTunnels) that you can access on a phone. However, **it is highly recommended that you use at least a tablet** to run this web app for best performance. I am working on optimizing it for mobile use.

In a future version, which I'm also working on, you will be able to set up and customize your card deck right from the web browser (e.g., the demo app that I have running on my website), so you don't have to clone the repo at all. For now, though, you must clone the code to get the most out of the virtual card deck.

# Detailed Plan for V2
The architecture for V2 of the virtual card deck involves three main components: the **deck setup modal**, the **modal input processing system**, and the updated **deck construction system**. The deck-setup modal is entirely user-facing. The modal input processing system needs to take the user's settings for creating the deck(s) and pass that along to the deck construction system, so that it can properly construct the decks according to the user's specification.

**The modal input processing system** will utilize **LocalStorage** in the browser to store the user's deck creation preferences. The data remains even after the browser is closed and reopened; this way, there is no need to have functionality for creating presets.

## Current Bugs/Limitations (Personal reference)
- When the page is reloaded, the modal loses all data pertaining to the individual card details (e.g., the textarea and the title field). Make it so that this data remains persistent, like the rest of the modal, even when the page is reloaded.
- It looks like the save-data mechanism for the card data is working a little strange. The "save details" button for the other three decks doesn't trigger an error, but it doesn't seem to be saving the details to localStorage either. This ties into the next point.
- It only looks like the data for the custom cards are being saved right now into localStorage. Even when the master Submit button at the bottom of the modal is pressed, no other data is saved. 
- It seems like clicking the Submit button for the modal clears the localStorage, which shouldn't be happening.
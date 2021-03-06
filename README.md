# team-profile-generator1

# About the application
Using Node and inquirer a user is prompted questions in the command line. Once the user is done filling out their teams roles and info a html page is generaterd
with the users input. 

## Image of application
![Screen Shot 2022-05-07 at 12 18 02 AM](https://user-images.githubusercontent.com/94779524/167237872-b19b5cd3-b289-41b3-9115-b494249ff39e.png)
![Screen Shot 2022-05-07 at 12 27 20 AM](https://user-images.githubusercontent.com/94779524/167238180-903f5bf0-279d-4371-85e5-ea4ed5b61be2.png)
![Screen Shot 2022-05-07 at 12 27 32 AM](https://user-images.githubusercontent.com/94779524/167238182-13147972-afd1-4ed1-8e4b-8f0e62a476b0.png)


## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

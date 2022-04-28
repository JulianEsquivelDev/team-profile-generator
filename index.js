const inquirer = require("inquirer");
const fs = require("fs");
const teamGenerator = require("./src/generator");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamData = [];
const prompts = async () => {
    const userInput = await inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter your name",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter your ID number",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter your email",
            name: "email",
        },
        {
            type: "list",
            message: "Please choose your role from the list",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"],
        },
    ])

    // manager prompts when user selects manager
    if (userInput.role === "Manager") {
        const managerInput = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter your office number",
                    name: "officeNumber",
                },
            ])
        const newManager = new Manager(
            userInput.name,
            userInput.id,
            userInput.email,
            managerInput.officeNumber
        );

        teamData.push(newManager);
    } else if (userInput.role === "Engineer") {
        const engineerInput = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter your GitHub username",
                    name: "github",
                },
            ])
        const newEngineer = new Engineer(
            userInput.name,
            userInput.id,
            userInput.email,
            engineerInput.github
        );

        teamData.push(newEngineer);
    } else if (userInput.role === "Intern") {
        const internInput = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter the school you attended",
                    name: "school",
                },
            ])
        const newIntern = new Intern(
            userInput.name,
            userInput.id,
            userInput.email,
            internInput.school
        );

        teamData.push(newIntern);
    }
};

async function query() {
    await prompts()

    const teamInputs = await inquirer
        .prompt([
            {
                type: "list",
                name: "addTeamMember",
                message: "Please choose an option from the list",
                choices: ["Add new Team Member", "Generate a new Team"]
            }
        ])

        if (teamInputs.addTeamMember === "Add new Team Member") {
            return query()
        }
        return generateTeam();
        }

        query();

        function generateTeam () {
            console.log("new Employee", teamData)
            fs.writeFileSync(
                "./dist/team.html",
                teamGenerator(teamData), "utf-8"
            );
}

const teamGenerator = (myTeam) => {
    // template for manager card
    const createManager = (myManager) => {
        return `
        <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${myManager.acquireName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${myManager.acquireRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${myManager.acquireId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${myManager.acquireEmail()}">${myManager.acquireEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${myManager.acquireOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>`;
    };

    // template for engineer card
    const createEngineer = (myEngineer) => {
        return `
        <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${myEngineer.acquireName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${myEngineer.acquireRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${myEngineer.acquireId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${myEngineer.acquireEmail()}">${myEngineer.acquireEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${myEngineer.acquireGithub()}" target="_blank" rel="noopener noreferrer">${myEngineer.acquireGithub()}</a></li>
                        </ul>
                    </div>
                </div>`;
    };

    // template for intern card
    const createIntern = (myIntern) => {
        return `
        <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${myIntern.acquireName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${myIntern.acquireRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${myIntern.acquireId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${myIntern.acquireEmail()}">${myIntern.acquireEmail()}</a></li>
                            <li class="list-group-item">School: ${myIntern.acquireSchool()}</li>
                        </ul>
                    </div>
                </div>`;
    };

    const teamPage = [];

    teamPage.push(myTeam.filter((myEmployee) => myEmployee.acquireRole() === "Manager")
        .map((myManager) => createManager(myManager)));

    teamPage.push(myTeam.filter((myEmployee) => myEmployee.acquireRole() === "Engineer")
        .map((myEngineer) => createEngineer(myEngineer)).join(""));

        teamPage.push(myTeam.filter((myEmployee) => myEmployee.acquireRole() === "Intern")
        .map((myIntern) => createIntern(myIntern)).join(""));

    return teamPage.join("");
};

// template to generate page
    module.exports = (myTeam) => {
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mb-3 team-heading jumbotron">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-12 team-area d-flex justify-content-center">
            ${teamGenerator(myTeam)}
            </div>
        </div>
    </div>
    </body>
    </html>`;
};
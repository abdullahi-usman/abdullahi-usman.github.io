function setErrorMsg(msg) {
    document.getElementById("wait-for-projects-status").innerText = msg
    document.getElementById("wait-for-projects-loader").setAttribute("hidden", "true")
    document.getElementById("wait-for-projects-error-icon").removeAttribute("hidden")
}

const firebaseConfig = {
    apiKey: "AIzaSyAZPDcZEOWdOai3wAGEs3BP9XWWGwKFEWk",
    authDomain: "githubprofile-abdullahi-usman.firebaseapp.com",
    projectId: "githubprofile-abdullahi-usman",
    storageBucket: "githubprofile-abdullahi-usman.appspot.com",
    messagingSenderId: "605881866685",
    appId: "1:605881866685:web:2b2d6267b8af972ceedad4"
};



window.onload = event => {
    // Initialize Firebase

    if (typeof firebase === "undefined" || firebase == null) {
        setErrorMsg("Page does not initialize properly \n Reload Please...")
        return;
    }
    const app = firebase.initializeApp(firebaseConfig);
    const db = app.firestore();

    if (db == null) {
        setErrorMsg("Server is not responding \n Try again later...")
        return;
    }


    db.collection("projects").get().then(qShot => {

        if (qShot.size > 0) {
            let project_views = ``
            qShot.forEach(project => {

                if (window.screen.availWidth > 768) {
                    project_views += `<div id="projects-view-container" class="projects-view-container">
                <div class="project-view">
                    <img class="project-view-logo" src="icons/logo.png" alt=""/>
                    <div class="project-view-data">
                        <div class="project-view-title">${project.data().title}</div>
                        <div class="project-view-date"><p>${project.data().content}</p></div>
                        <div class="project-view-footer"><a class="project-view-link" href="${project.data().link}" alt="project-link">Get Project</a></div>
                    </div>
                    
                </div>
               
            </div>`

                } else {
                    project_views += `<div id="projects-view-container" class="projects-view-container">
                <div class="project-view">
                    <div class="project-view-header">

                        <img class="project-view-logo" src="icons/logo.png" alt="" />
                        <div class="project-view-title">${project.data().title}</div>
                    </div>
                    
                    <div class="project-view-data">

                        <div class="project-view-date">
                            <p>${project.data().content}</p>
                        </div>
                        <div class="project-view-footer"><a class="project-view-link" href="${project.data().link}" alt="project-link">Get Project</a></div>
                    </div>

                </div>

            </div>`
                }
            })

            document.getElementById("project-title").removeAttribute("hidden")
            document.getElementById("container-projects").style.justifyContent = "flex-start"
            document.getElementById("container-wait-for-projects").innerHTML = project_views
        } else {
            setErrorMsg("No Project Found!")
        }
    })
}

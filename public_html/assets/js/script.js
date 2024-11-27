const jsonPath = 'assets/json/data.json';

// Fetch JSON file
const calldata = async () => {
    return new Promise((resolve) => {
        fetch(jsonPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            });
    })
};
// const data = await calldata();

// add realworldproject
const realworldproject = async () => {
    try {
        // const data = await calldata();
        const projectElement = document.querySelector("#project");
        const projectContainers = projectElement.querySelector(".container");
        const projectRow = projectContainers.querySelector(".row");

        const addElement = data.realworldproject.map((objData) => {
            return `<div class="col-md-6 col-lg-3 mb-2">
                    <a href="https://rapidapi.com/asusalman986/api/games-details">
                    <div class="project-card">
                        <div class="body">
                            <img src="assets/imgs/pencil-case.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" class="icon">
                            <h6 class="title">Games Details</h6>
                            <p class="subtitle">Build an REST API while scraping website data.</p>
                        </div>
                    </div>
                </a>
                </div>`;
        });
        projectRow.innerHTML = addElement.json("");

    }
    catch (error) {
        return;
    }
}
// realworldproject();

// add blog
const blog = async () => {
    try {
        // const data = await calldata();
        const blogElement = document.querySelector("#blog");
        const blogContainers = blogElement.querySelector(".container");
        const blogRow = blogContainers.querySelector(".row");

        const addElement = data.blog.map((objData) => {
            return ` <div class="col-md-4">
              <div class="card border mb-4">
                <img
                  src="assets/imgs/folio-1.jpg"
                  alt=""
                  class="card-img-top w-100"
                />
                <div class="card-body">
                  <h5 class="card-title">TypeScript Interfaces</h5>
                  <div class="post-details">
                    <a href="https://dev.to/sallbro">Posted By: sallbro</a>
                    <a href="javascript:void(0)"
                      ><i class="ti-thumb-up"></i> 45</a
                    >
                    <a href="javascript:void(0)"
                      ><i class="ti-comment"></i> 13</a
                    >
                  </div>
                  <p>
                    TypeScript Interfaces: A Practical Guide with Code Examples & Usecase.
                  </p>
                  <a href="https://dev.to/sallbro/typescript-interfaces-a-practical-guide-with-code-examples-usecase-1dai">Read More..</a>
                </div>
              </div>
            </div>`;
        });
        blogRow.innerHTML = addElement.json("");
    }
    catch (error) {
        return;
    }
}
// blog();

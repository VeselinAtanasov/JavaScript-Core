function loadCommits() {
    let userName=$('#username');
    let repos = $('#repo');
    let commits=$('#commits');
    let url = `https://api.github.com/repos/${userName.val()}/${repos.val()}/commits`;

    $.get(url)
        .then(loadRepos)
        .catch(displayError);

    function loadRepos(response){
        commits.empty();
        for(let commit of response){
            commits.append(`<li>${commit.commit.author.name}: ${commit.commit.message}</li>`);
        }

    }
    function displayError(err){
        commits.append($("<li>").text("Error: " +
            err.status + ' (' + err.statusText + ')'));
    }
}
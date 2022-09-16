let search_btn = document.querySelector(".search-btn")
let input = document.querySelector(".search")
let repodata = document.querySelector(".grid")
let section = document.querySelector("section")
search_btn.onclick = ()=>{
    getRepos();
}
function getRepos(){
    if(input.value == ""){
        repodata.innerHTML = "No Value"
    }else{
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then((res) => res.json())
        .then((repos) => {
            repodata.innerHTML = "";
            repos.forEach(repo => {
                let Col = document.createElement("div")
                let RepoName = document.createElement("h1")
                let disc = document.createElement("p");
                let person = document.createElement("div")
                let name = document.createElement("h3")
                let img = document.createElement("img");
                let visit = document.createElement("button");
                let visita = document.createElement("a");
                visita.href = repo.html_url;
                visita.target = "_blank";
                visita.style = `color:white;text-decoration:none;`
                visita.innerHTML = "visit";
                visit.appendChild(visita)
                img.src = repo["owner"]["avatar_url"]
                name.innerHTML = repo["owner"]["login"];
                disc.innerHTML = repo.language;
                if (disc.innerHTML == ""){
                    disc.innerHTML = "No Language"
                }
                person.className = "person";
                RepoName.innerHTML = repo.name;
                Col.className = "col";
                person.appendChild(img)
                person.appendChild(name)
                person.appendChild(visit)
                Col.appendChild(RepoName)
                Col.appendChild(disc)
                Col.appendChild(person)
                repodata.appendChild(Col)
            });
        });
    }
}
window.onload = function (){
    input.focus();
}
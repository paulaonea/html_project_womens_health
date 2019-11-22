document.addEventListener('DOMContentLoaded', function(){

function expand(id) {
    if (id[0] == "q") {
        let idNumber = id.substring(1);
        let newId = `a${idNumber}`;
        let answer = document.getElementById(newId);
        console.log(answer);
        if (answer.className == "answer_shown") answer.className = "answer_hidden"
        else answer.className = "answer_shown";
    }
}

window.onclick = e => {
    let idE = e.target.id;
    console.log(idE);
    expand(idE);
}

})
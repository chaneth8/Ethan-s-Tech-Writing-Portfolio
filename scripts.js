function item1_mouseover() {
    const div = document.createElement('div');  
    div.classList.add('transparent-links');  
    div.setAttribute('id','item 1 explanation');
    div.textContent = 'Blog post explaing lambda functions, an advanced feature of the Python programming language, to beginner programmers.';    
    
    const parentDiv = document.getElementById("item 1");

    parentDiv.appendChild(div);
}

function item1_mouseout() {
    const removeDiv = document.getElementById("item 1 explanation");
    console.log(removeDiv);
    removeDiv.remove();
}

function item2_mouseover() {
    const div = document.createElement('div');  
    div.classList.add('transparent-links');  
    div.setAttribute('id','item 2 explanation');
    div.textContent = "During my time as fullstack developer intern, I wrote code to handle errors caused by APIs used in Merln, a web app. Above is the documention for my changes.";    
    
    const parentDiv = document.getElementById("item 2");

    parentDiv.appendChild(div);
}

function item2_mouseout() {
    const removeDiv = document.getElementById("item 2 explanation");
    console.log(removeDiv);
    removeDiv.remove();
}

function item3_mouseover() {
    const div = document.createElement('div');  
    div.classList.add('transparent-links');  
    div.setAttribute('id','item 3 explanation');
    div.textContent = "During my time as fullstack developer intern, I wrote a REST API to generate a weekly newsletter for users Merln, a web app. Above is the documention for my changes.";    
    
    const parentDiv = document.getElementById("item 3");

    parentDiv.appendChild(div);
}

function item3_mouseout() {
    const removeDiv = document.getElementById("item 3 explanation");
    console.log(removeDiv);
    removeDiv.remove();
}

function item4_mouseover() {
    const div = document.createElement('div');  
    div.classList.add('transparent-links');  
    div.setAttribute('id','item 4 explanation');
    div.textContent = "List of my contributions to the official documentation for CockroachDB, an open source database management system.";    
    
    const parentDiv = document.getElementById("item 4");

    parentDiv.appendChild(div);
}

function item4_mouseout() {
    const removeDiv = document.getElementById("item 4 explanation");
    console.log(removeDiv);
    removeDiv.remove();
}
  
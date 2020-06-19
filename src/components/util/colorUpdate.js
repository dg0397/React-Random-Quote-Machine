function updateColor(color){
    document.body.style.background = `${color}`;
    document.getElementById("text").style.color = `${color}`;
    document.getElementById("author").style.color = `${color}`;
    document.querySelector(".icon-box").style.background = `${color}`;
    document.getElementById("new-quote").style.background = `${color}`
}

export default updateColor;
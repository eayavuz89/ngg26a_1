let divPosted = document.getElementById("divPosted"),
    spanPosted = document.getElementById("spanPosted"),
    url_string =  window.location.href,
    url = new URL(url_string),
    commentText = url.searchParams.get("commentText");

if(commentText !== undefined && commentText !== null && commentText !== ""){
    divPosted.style.display = "block";
    spanPosted.innerText = commentText;
}


function onSubmit(){
    return confirm("Are you sure want to send comment?");
}

document.getElementById('my-form').onsubmit = onSubmit;


const params = new URLSearchParams(window.location.search);
const postType = params.get("type");
const fileName = params.get("name");

var myRequest = new Request(`./${postType}-posts/${fileName}.json`);

fetch(myRequest)
    .then(
        (result) => {
            if (!result.ok) {
                throw new Error(`HTTP error! status: ${result.status}`);
            }

            return result.json();
        })
    .then(
        (result) => {
            const content = document.getElementsByClassName("content")[0];

            const title = document.createElement("h1");
            const date = document.createElement("h2");
            const text = document.createElement("p");

            title.className = "post-title";
            date.className = "post-date";
            text.className = "paragraph";

            title.appendChild( document.createTextNode( result.title ) );
            date.appendChild( document.createTextNode( result.date ) );
            text.appendChild( document.createTextNode( result.text ) );

            content.appendChild(title);
            content.appendChild(date);
            content.appendChild(text);
        }
    );

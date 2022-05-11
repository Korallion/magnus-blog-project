var myRequest = new Request('./blog-posts/contents.json');

function createListItem( title, fileName ){
    const a = document.createElement("a");
    a.href = `post?type=blog&name=${fileName}`;
    a.className = "link";

    const text = document.createTextNode( title );
    a.appendChild(text);

    const li = document.createElement("li");
    li.appendChild(a);

    return li;
}

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
            return result.data
                .map(({title, fileName}) => createListItem(title, fileName))
                .reduce((acc, curr) => {
                    acc.appendChild(curr);
                    return acc;
                }, document.getElementsByClassName("nav-list")[0]);
        });

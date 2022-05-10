var myRequest = new Request('./blog-posts/contents.json')

const RequestData = async () => {
    const myResult = await fetch(myRequest);
    const resultAsJson = myResult.json();
    console.log(resultAsJson)
    debugger;
}

(async () => await RequestData())();

function createListItem( title, fileName){
    const a = document.createElement("a");
    const text = document.createTextNode( title );
    a.appendChild(text);
    a.href = `https://www.taeyls.com/post?type=blog&name=${fileName}`;

    const li = document.createElement("li");
    li.appendChild(a);

    return li;
}

fetch(myRequest).then(
    function (response) {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    })
    .then(
        function (response) {

            return response.data
                .map(({title, fileName}) => createListItem(title, fileName))
                .reduce((acc, curr) => {
                    acc.appendChild(curr);
                    return acc;
                }, document.getElementsByClassName("nav-list")[0]);

        });

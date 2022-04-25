var myRequest = new Request('./blog-posts/contents.json')

fetch(myRequest).then(
    function (response) {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    })
    .then(
        function (response) {

            const ul = document.getElementsByClassName("nav-list")[0];

            for (var element of response.titles) 
            {
                var li = document.createElement("li");

                li.appendChild(document.createTextNode(element));
                ul.appendChild(li);
            }
        });

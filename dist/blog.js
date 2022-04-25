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

            for (var element of response.data)
            {
                var li = document.createElement("li");
                var a = document.createElement("a");
                var text = document.createTextNode(element.title);

                a.appendChild(text);
                a.href = "https://www.taeyls.com/post?type=blog&name=" + element.fileName;

                li.appendChild(document.createTextNode(element)); 
                ul.appendChild(li);
            }
        });

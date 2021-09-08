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

            var ul = document.getElementsByClassName('nav-list')

            for (var element of response.titles) 
            {
                var li = document.createElement('li')

                li.appendChild(element)
                ul.appendChild(li)
            }
        });
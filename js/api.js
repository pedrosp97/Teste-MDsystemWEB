fetch ("https://www.mdsystemweb.com.br/projects/api/v1/test/about.php")
    .then(r => r.json())
    .then(jsonBody => {
        console.log(jsonBody)
    })


fetch ("https://www.mdsystemweb.com.br/projects/api/v1/test/services.php")
    .then(r => r.json())
    .then(jsonBody => {
        console.log(jsonBody)
    })
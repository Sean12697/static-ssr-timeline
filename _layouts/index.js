module.exports = (head, heading, desc, items) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${ head.title }</title>
        <meta name="author" content="${ head.author }"/>
        <meta name="description" content="${ head.desc }"/>
        <meta name="keywords" content="${ head.keywords.join(", ") }"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100i,300,400,500,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Allura" rel="stylesheet">
        <link rel="stylesheet" type="text/css" media="screen" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" media="screen" href="style.css"/>
    </head>
    <body>

    <header>
        <div class="container text-center">
            <h1>${ heading }</h1>
            <p>${ desc }</p>
        </div>
    </header>
  
    <section class="timeline">
        <div class="container">
            ${ items }
        </div>
    </section>
  
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <script src="https://cdn.jsdelivr.net/scrollreveal.js/3.3.1/scrollreveal.min.js"></script>
        <script src="script.js"></script>
    </body>
</html>
`;
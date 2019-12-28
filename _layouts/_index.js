module.exports = (head, heading, desc, items) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${ head.title || "Timeline Template" }</title>
        <meta name="author" content="${ head.author || "Sean O'Mahoney" }"/>
        <meta name="description" content="${ head.desc || "DESCRIPTION" }"/>
        <meta name="keywords" content="${ (head.keywords || ["Timeline", "Template", "CSS", "Static", "SSR", "Generate"]).join(", ") }"/>
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

            <div class="timeline-item">
            <div class="timeline-img"></div>
            <div class="timeline-content js--fadeInLeft">
                <h2>Title</h2>
                <div class="date">1 MAY 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a class="bnt-more" href="javascript:void(0)">More</a>
            </div>
            </div> 

            <div class="timeline-item">
            <div class="timeline-img"></div>
            <div class="timeline-content timeline-card js--fadeInRight">
                <div class="timeline-img-header">
                <h2>Card Title</h2>
                </div>
                <div class="date">25 MAY 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a class="bnt-more" href="javascript:void(0)">More</a>
            </div>
            </div>   

            <div class="timeline-item">
            <div class="timeline-img"></div>
            <div class="timeline-content js--fadeInLeft">
                <div class="date">3 JUN 2016</div>
                <h2>Quote</h2>
                <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo debitis omnis dolor iste fugit totam quasi inventore!</blockquote>
            </div>
            </div>   

            <div class="timeline-item">
            <div class="timeline-img"></div>
            <div class="timeline-content js--fadeInRight">
                <h2>Title</h2>
                <div class="date">22 JUN 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a class="bnt-more" href="javascript:void(0)">More</a>
            </div>
            </div>   

            <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card js--fadeInLeft">
                    <div class="timeline-img-header">
                        <h2>Card Title</h2>
                    </div>
                    <div class="date">10 JULY 2016</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                    <a class="bnt-more" href="javascript:void(0)">More</a>
                </div>
            </div>   

            <div class="timeline-item">
            <div class="timeline-img"></div>
            <div class="timeline-content timeline-card js--fadeInRight">
                <div class="timeline-img-header">
                <h2>Card Title</h2>
                </div>
                <div class="date">30 JULY 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a class="bnt-more" href="javascript:void(0)">More</a>
            </div>
            </div>  

            <div class="timeline-item">
            <div class="timeline-img"></div>
            <div class="timeline-content js--fadeInLeft">
                <div class="date">5 AUG 2016</div>
                <h2>Quote</h2>
                <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo debitis omnis dolor iste fugit totam quasi inventore!</blockquote>
            </div>
            </div>   

            <div class="timeline-item">
            <div class="timeline-img"></div>
            <div class="timeline-content timeline-card js--fadeInRight">
                <div class="timeline-img-header">
                    <h2>Card Title</h2>
                </div>
                <div class="date">19 AUG 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a class="bnt-more" href="javascript:void(0)">More</a>
            </div>
            </div>  

            <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content js--fadeInLeft">
                    <div class="date">1 SEP 2016</div>
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                    <a class="bnt-more" href="javascript:void(0)">More</a>
                </div>
            </div>
  
        </div>
    </section>
  
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <script src="https://cdn.jsdelivr.net/scrollreveal.js/3.3.1/scrollreveal.min.js"></script>
        <script src="script.js"></script>
    </body>
</html>
`;
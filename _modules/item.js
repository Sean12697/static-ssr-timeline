module.exports = (index, date, title, img, desc, link) => `
<div class="timeline-item">
    <div class="timeline-img"></div>
    <div class="timeline-content ${ img != "" ? "timeline-card" : "" } js--fadeIn${ index % 2 == 0 ? "Right" : "Left" }">
        ${ index % 2 == 0 ? "<div class='date'>" + date + "</div>" : "" }
        ${ img == "" ? "<h2>" + title + "</h2>" : "<div class='timeline-img-header' style='background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(\"" + img + "\") center center no-repeat'><h2>" + title + "</h2></div>" }
        ${ index % 2 == 1 ? "<div class='date'>" + date + "</div>" : "" }
        <p>${ desc }</p>
        ${ link != "" ? "<a class='bnt-more' href='" + link + "' target='_blank' rel='noopener'>More</a>" : "" }
    </div>
</div> 
`;
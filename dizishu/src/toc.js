function execute(url) {
        if(url.slice(-1) !== "/")
        url = url + "/";
    let response = fetch(url.replace('m.','www.'));
    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];
        doc= doc.select("#list > div.book-chapter-list > ul:nth-child(4) li a")
        console.log(doc)
        for (let i = 0;i < doc.size(); i++) {
            let e = doc.get(i);
        data.push({
            name: e.select("a").text(),
            url: url+e.attr("href"),
            host: "https://www.dizishu.com"
        });
        }
        return Response.success(data);
    }
    return null;
}
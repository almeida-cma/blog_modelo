function searchPosts() {
    var input, filter, articles, article, h2, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    articles = document.getElementsByTagName("article");
    for (i = 0; i < articles.length; i++) {
        article = articles[i];
        h2 = article.getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    }
}

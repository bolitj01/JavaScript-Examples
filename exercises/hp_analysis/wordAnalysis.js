function handleFileSelect(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var text = reader.result;
        var words = text.split(/\W+/);
        var wordCounts = {};
        for (var i = 0; i < words.length; i++) {
            if (!wordCounts[words[i]]) {
                wordCounts[words[i]] = 1;
            } else {
                wordCounts[words[i]]++;
            }
        }
        var sortedWords = Object.keys(wordCounts).sort(function (a, b) {
            return wordCounts[b] - wordCounts[a];
        });
        var result = "Top 100 words : <br/>";
        for (var i = 0; i < 100; i++) {
            result +=
                sortedWords[i] + ": " + wordCounts[sortedWords[i]] + "<br/>";
        }
        document.getElementById("result").innerHTML = result;
    };
    reader.readAsText(file);
}
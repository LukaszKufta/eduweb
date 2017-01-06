$('button').click(function() {
    fecz('https://jsonplaceholder.typicode.com/users1', function(data) {
        console.log("Good Job my Master!");
        console.log(data);
    }, function(err) {
        console.log("Houston we have any problem!");
        console.log(err);
    });
})
function fecz(url, onSuccess, onError) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onreadystatechange = function () {
    if (req.readyState == 4) {
        if(req.status == 200)
            onSuccess(req.responseText);
        else
            onError(req.status);
        }
    };
    req.send(null);
}
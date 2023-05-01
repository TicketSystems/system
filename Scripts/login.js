document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
      check()
  }
});

    document.getElementById('submit').addEventListener('click', function() {
        check()
        });

    function check() {
        var code = document.getElementById('code').value;
        if (code === 'base') {
            window.location.href = 'navigationbase.html';
        } else if (code === 'admin') {
            window.location.href = 'navigationadmin.html';
        } else if (code === 'help') {
            window.location.href = 'help.html';
        } else {
            document.getElementById('x').style.display = 'block';
            setTimeout(function() {
                document.getElementById('x').style.display = 'none';
            }, 1000);
    };
}
    document.getElementById("code").value = "";
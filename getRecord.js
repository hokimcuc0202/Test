function getRecord() {
    var params = '?app=20&id=100';
    var url = 'https://{subdomain}.kintone.com/k/v1/record.json' + params;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onload = function() {
        if (xhr.status === 200) {
            JSON.parse(xhr.responseText);
        } else {
            JSON.parse(xhr.responseText);
        }
    };
    xhr.send();
}


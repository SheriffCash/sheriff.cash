function sendAjaxRequest(url, data, onSuccess, onError) {
    const token = $('meta[name="csrf-token"]').attr('content');
    const random1 = crypto.getRandomValues(new Uint8Array(16)).join('');
    const timestamp = Math.floor(Date.now() / 1000);
    const hashInput = token + "|||" + random1 + "|||" + timestamp;
    const random2 = calculateSHA256(hashInput);
    
    $.ajax({
        url: url,
        type: 'POST',
        headers: {
            'Get-Token': token,
            'Get-Rand1': random1,
            'Get-Timestamp': timestamp,
            'Get-Rand2': random2
        },
        data: data,
        processData: false,
        contentType: false,
        success: function(response) {
            if (response.status == true) { 
                if (onSuccess) onSuccess(response);
            } else {
                if (onError) onError(response.message || 'İşlem başarısız.');
            }
        },
        error: function() {
            if (onError) onError('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    });
}

function calculateSHA256(value) {
    var sha = new jsSHA("SHA-256", "TEXT");
    sha.update(value);
    var hash = sha.getHash("HEX");
    return hash.toLowerCase();
}

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}   
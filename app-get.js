var express = require('express');
var app = express();

app.get('/biodata', function(req, res) {
    const nama = req.query.nama;
    const tempat_lahir = req.query.tempat_lahir;
    const tanggal_lahir = req.query.tanggal_lahir;
    const alamat = req.query.alamat;

    res.send({
        'nama' : nama,
        'tempat_lahir' : tempat_lahir,
        'tanggal_lahir' : tanggal_lahir,
        'alamat' : alamat
    });
});

var server = app.listen(7000, function() {
    console.log('Listening on port 7000...');
});
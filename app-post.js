var express = require('express');
var app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

app.post('/biodata', function(req, res) {
    const nama = req.body.nama;
    const tempat_lahir = req.body.tempat_lahir;
    const tanggal_lahir = req.body.tanggal_lahir;
    const alamat = req.body.alamat;

    res.send({
        'nama' : nama,
        'tempat_lahir' : tempat_lahir,
        'tanggal_lahir' : tanggal_lahir,
        'alamat' : alamat
    });
})

var server = app.listen(7000, function() {
    console.log('Listening on port 7000...');
});
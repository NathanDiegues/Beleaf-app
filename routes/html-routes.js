
module.exports = function(server, connection) {
    server.get('/api', function(req, res){
        // res.send('aa');
        connection.query('SELECT * FROM `kek`', function (err, rows) {
            if (err) throw err;
            res.json({data: rows});
        });
    })
}
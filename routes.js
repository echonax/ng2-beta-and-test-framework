module.exports = function(app,io){

    var sess;
    

var currentTopo = {};
var currentTopoString = "";

    io.on('connection', function(socket){
        console.log("Server connection.io");
        socket.emit('topology',currentTopo);
    });

    io.on('disconnect', function(socket){
        console.log("client dcd");
    });

    app.post('/topology', function(req,res){
        console.log("new topology arrived to the server");
        currentTopo = req.body;
        io.emit('topology',currentTopo);
        return res.sendStatus(200);
    });

    app.get('/getTopology', function(req,res){
        console.log("topology get requested");
        io.emit('topology',currentTopo);
        return res.sendStatus(200);
    });

    app.put('/testtopology', function(req,res){
        currentTopoString = "";
        req.on("data",function(d){
            currentTopoString += d;
        });
        req.on("end",function(d){
            var currentTopoJSON = JSON.parse(currentTopoString);
            console.log("turning into JSON");
            currentTopo = currentTopoJSON;
            return res.sendStatus(200);
        });

    });
    

    app.post('/login', function(req, res) {

        sess = req.session;
        sess.username = req.body.user;

        var user_name=req.body.user;
        var password=req.body.password;

        console.log('Checking db for username = '+user_name+' and password = '+password);
        if(user_name=="admin" && password=="admin"){
            res.send("yes");
        }else{
            res.send("no")
        }


    });


    app.get('/logout',function(req,res){

        req.session.destroy(function(err){
            if(err){
                console.log("sess destroy error: "+err);
            }else{
                res.redirect('/');
            }
        });
    });

    app.get('/*',  function(req, res, next) {
        console.log("/!*");
        res.sendFile('main.html', { root: __dirname + '/client' });
    });


}
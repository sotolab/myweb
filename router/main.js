module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });

    app.get('/services',function(req,res){
       res.render('services.html');
   });

   app.get('/services',function(req,res){
      res.render('contact.html');
  });


}

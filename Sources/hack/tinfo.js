function prepareDOM(links){
	//alert(links);
	document.getElementById("whole").innerHTML=links;
}
            function locate(term){
                YUI().use('node', 'yql', function(Y) {
                
    
            //var res = Y.one('#res'),
                //zip = document.getElementById('query');var term=zip.value;
                
            
            var html="";
            
            Y.YQL("SELECT * FROM amazon.ecs WHERE AWSAccessKeyId='AKIAIIG7UJWTQYBMR33Q' AND secret='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' AND ResponseGroup='Large' AND Title='"+term+"' AND SearchIndex = 'MP3Downloads' ", function(r) {
            
            if (r.query && r.query.results ){
            
                
                //Y.log(r);
                    
                var artist = r.query.results.Item[0].ItemAttributes.Creator.content;
                var genre=r.query.results.Item[0].ItemAttributes.Genre;
                var label=r.query.results.Item[0].ItemAttributes.Label;
                var date=r.query.results.Item[0].ItemAttributes.ReleaseDate;
                
            
                html+="<p><h4><span style='color:red;'>Artist:</span> "+artist+" </h4></p>";
                html+="<p><h4><span style='color:red;'>Genre:</span> "+genre+" </h4></p>";
                html+="<p><h4><span style='color:red;'>Label:</span> "+label+" </h4></p>";
                html+="<p><h4><span style='color:red;'>Release Date:</span> "+date+" </h4></p>";
                
            
            }
            
        //res.setContent(html);
            prepareDOM(html);
            
        
            
                
            });
            
                    
            });
            
            }
    
function prepareDOM(links){
	//alert(links);
	document.getElementById("whole").innerHTML=links;
}
			function locate(term){
				YUI().use( 'yql', function(Y) {
    
			var html="";
			Y.YQL("SELECT * FROM amazon.ecs WHERE AWSAccessKeyId='AKIAIIG7UJWTQYBMR33Q' AND secret='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' AND ResponseGroup='Large' AND Title='"+term+"' AND SearchIndex = 'MP3Downloads' ", function(r) {
			 
			if (r.query && r.query.results ){
				var artist = r.query.results.Item[0].ItemAttributes.Creator.content;
				html+=" <h3 style='background-color:rgb(179,168,164);'>Artist:"+artist+"</h3><ul>";
				//alert("select * from music.track.search where keyword='"+artist+"'");
			Y.YQL("select * from music.track.search where keyword='"+artist+"'", function(r1) {
			
			var label=r1.query.results.Track;
			Y.each(label,function(v,k){
			
		 var name=v.title;
			var content= " <a href='http://www.youtube.com/results?search_query="+name+"&aq=f' style='text-decoration:none;color:black; '>"+name+"</a><br/>"
			// alert(name);
			 html+=("<li>"+content+"</li><br/>");
				//alert(html);
			
			});
				
			html+="</ul>";		
			prepareDOM(html);	
			});
			}
				
			});
					
			});
			}
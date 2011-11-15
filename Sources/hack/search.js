	function prepareDOM(links) {
		 //alert('<html><head></head><body><p>RISHABH JAIN</p></body></html>');
		 //document.createElement('html');
		 //var page='<html><head></head><body>' + links + '</body></html>';
		 document.getElementById("whole").innerHTML=links;
	}
	
	function locate(term){
		var code="";
		YUI().use( 'yql', function(Y){
		//alert("HI");
	
	Y.YQL("select * from boss.search where ck='dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz' and secret='a3d93853ba3bad8a99a175e8ffa90a702cd08cfa' and q='"+term+"'", function(r) {
	//alert("I am in");
	//console.log("I AM HERE");
	//Y.log(r);
	if (r.query && r.query.results ){
		var directories = r.query.results.bossresponse.web.results.result;
		
		Y.each(directories, function(v, k){
		
		var dir_title= v.title.content;
		var link =v.url;
		code+="<div style='background-color:rgb(179,168,164);'><a style='color:white;text-decoration:none;' href=\"";
		code+=link;
		code+="\">";
		code+=dir_title;
		code+="</a></div></br>";
		});
		
		prepareDOM(code);	
		
	}
			
	});
	
	
	
	
	});
	
	}


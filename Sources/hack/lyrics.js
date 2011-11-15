		function alltrim(str) {
                return str.replace(/^\s+|\s+$/g, '');
		}

			function lyrics(term){
				//zip = document.getElementById('query');var term=zip.value;
				
				var str = alltrim(term).replace(" ","+");
				var str1= "http://search.lyrics.astraweb.com/?word="+str+"";
				window.location.href = str1;
			}
	
	
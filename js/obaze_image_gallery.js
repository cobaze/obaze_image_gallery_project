var gallery = {
	
	init: function (e)
	{
		var links = document.querySelectorAll('#mainGallery');
		for(var i=0; i<links.length; i++)
		{
			links[i].onclick = gallery.changePhoto;	
		}
		
		var albums = document.querySelectorAll('#albumList a');
		for(var j=0; j<albums.length; j++)
		{
			albums[j].onclick = gallery.changeAlbum;
		}
		
		var divs = document.querySelectorAll('#mainGallery div');
		for(var k=0; k<divs.length; k++)
		{
			divs[k].classList.add('hide');
		}
		
		divs[0].classList.remove('hide');
	},
	
	changePhoto: function(e)
	{
		e.preventDefault();
		var firstPic = document.querySelector('#firstPic');
		var photoCaption = document.querySelector('#photoCaption');
		firstPic.src = e.target.href;
		photoCaption.firstChild.nodeValue = e.target.title;
	},
	
	changeAlbum: function(e)
	{
			e.preventDefault();
			var divs = document.querySelectorAll('#mainGallery div');
			for(var i=0; i<divs.length; i++)
			{
				divs[i].classList.add('hide');
			}
			
		var album = e.target.href.split('#')[1];
		document.getElementById(album).classList.remove('hide');
		var firstPic = document.querySelector('#firstPic');
		var photoCaption = document.querySelector('#photoCaption');
		var theFirstPic = document.getElementById(album).querySelectorAll('a')[0];
		firstPic.src = theFirstPic.href;
		photoCaption.firstChild.nodeValue = theFirstPic.title;
	
	}
		
}

window.onload = gallery.init;
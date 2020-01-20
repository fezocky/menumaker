var Application = Application || {}; 
Application.LandingPage = (function(){

	var doc = $(document),
        windowH = $(window).height(),
        windowW = $(window).width();

	function smooth(){

	    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top -50
	        }, 1000);
	        return false;
	      }
	    }
	}

	function weekDay(_this){
		if(_this.val() == 'mon'){
   			$('#day').removeClass().addClass('mon')
   		} else 
   		if(_this.val() == 'tue'){
   			$('#day').removeClass().addClass('tue')
   		} else 
   		if(_this.val() == 'wed'){
   			$('#day').removeClass().addClass('wed')
   		} else 
   		if(_this.val() == 'thu'){
   			$('#day').removeClass().addClass('thu')
   		} else 
   		if(_this.val() == 'fri'){
   			$('#day').removeClass().addClass('fri')
   		}
	}

	function livePreview(el, val){
		var i = el.indexOf(' '),
			dish = el.substr(0, i),
			item = el.substr(i + 1);
		//console.log(dish);
		//console.log(item);
		//console.log(val);

		$('#myMenu .dish.'+dish+'').find('[data-bind='+item+']').html(val);
	}

	function iHeart(el){
		var before = el.closest('.form-group').find('.bind-me').val(),
			after = ''+ before +'♥';
		
		el.closest('.form-group').find('.bind-me').val(after).blur();

	}

	function spitDate(date) {
	  var monthNames = [
	    "01", "02", "03",
	    "04", "05", "06", "07",
	    "08", "09", "10",
	    "11", "11"
	  ];

	  var day = date.getDate();
	  var monthIndex = date.getMonth();
	  var year = date.getFullYear();

	  return year + monthNames[monthIndex] + day;
	}

	function spitImg(){
		$('#myMenu').addClass('generate');
		
		$('#modalLoading .modal-body h3').html('<i class="fa fa-spinner fa-spin"></i>');
		$('#modalLoading').modal();

		window.setTimeout(function(){
			var node = document.getElementById('myMenu'),
				date = spitDate(new Date());

			domtoimage.toBlob((node), {
			  width: 1080,
			  height: 1920,
			  style: {
			    'transform': 'scale(2)',
			    'transform-origin': 'top left'
			  }
			}).then(function (blob) {
		        window.saveAs(blob, 'cardapio-'+date+'.png');
		    }).catch(function (error) {
		        console.error('oops, something went wrong!', error);
		    });
		    
		    $('#modalLoading .modal-body h3').text('Tudo pronto!');

		    window.setTimeout(function(){
		    	$('#myMenu').removeClass('generate');
		    	$('#modalLoading').modal('hide');
		    }, 1000);

			// domtoimage.toPng((node), {
			//   width: 1080,
			//   height: 1920,
			//   style: {
			//     'transform': 'scale(2)',
			//     'transform-origin': 'top left'
			//   }
			// }).then(function (dataUrl) {
		 //        var img = new Image();
		 //        img.src = dataUrl;
		 //        container.innerHTML = '';
		 //        container.appendChild(img);
		 //    }).catch(function (error) {
		 //        console.error('oops, something went wrong!', error);
		 //    });

		}, 2000);
	}

function bindElements(){

	console.log('bind');


	   	$('.modal-toggle').click(function(e){
	   		e.preventDefault();
		    var tab = $(this).attr('href');
		    $('li > a[href="' + tab + '"]').tab("show");
		});

	   $('.goto').on('click', smooth);

	   $('[data-toggle="tooltip"]').tooltip();


	$('#menuType').change(function(){
   		if($(this).val() == '3'){
   			$('body').removeClass('quartet');
   		} else {
   			$('body').addClass('quartet');
   		}
   	});

	$('#bannerSalad').change(function(){
	   	if($(this).is(':checked')){
	   		$('.banner.salad').removeClass('hidden');
	   	} else {
	   		$('.banner.salad').addClass('hidden');
	   	}
	});

   	$('#weekDay').change(function(){
   		var _this = $(this);
   		weekDay(_this);
   	});

   	$('.bind-me').on('keyup blur', function(){
   		var el = $(this).attr('name'),
   			val = $(this).val();
   		livePreview(el, val);
   	});

   	$('.btn-heart').click(function(){
   		var el = $(this);
   		iHeart(el);
   	});

   	$('#spitImg').click(spitImg);

}

	doc.ready(function(){

		bindElements();

		
	});

})();
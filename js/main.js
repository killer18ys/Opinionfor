$( document ).ready(function() {

	$formInput = $( ".form-item input" );


	$formInput.on( "focusin", function( event ) {
		$this = $(this);
		if (!$this.val()) { //no value
			$this.siblings("label").css('opacity', '0.5');
		}
		else{
			$this.siblings("label").css('opacity', '0');
			$this.siblings("label").hide();
		};		
	});

	$formInput.on( "focusout", function( event ) {
		if (!$this.val()) { //no value
			$(this).siblings("label").show();
			$(this).siblings("label").css('opacity', '1');
		}
		else{
			$(this).siblings("label").hide();
			$(this).siblings("label").css('opacity', '0');
		}
	});
	
	$formInput.keydown(function() {
		if ($this.val() != "undefined") {
			$this.siblings("label").hide();
			$this.siblings("label").css('opacity', '0');
		}
	});

	$formInput.keyup(function(event) {
			if (event.keyCode == 9) {
				$this.siblings("label").css('transition', 'none');
			}else{		
				if (!$this.val()) {
					$this.siblings("label").css('opacity', '0.5');
					$this.siblings("label").show();
				};
			}
	});


	function onClickLoginModalShow(){
		$("#login-modal").show(700);
		$("#tarp").show();
	}

	function onClickLoginModalHide(){
		$("#login-modal").hide();
		$("#tarp").hide();
	}

	$("#main-header .btn.sign-up").on('click', function(event) {
		event.preventDefault();
		onClickLoginModalShow();
	});

	$("#login-modal").on('mouseout', function(event) {
		$("#tarp").on('click', function(event) {
			onClickLoginModalHide();
		});
	});

	$("#login-modal .modal-close").on('click', function(event) {
			onClickLoginModalHide();
	});

});






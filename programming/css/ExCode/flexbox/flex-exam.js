// JS of flex-exam.html

$(document).ready(function() {
	// Function of flex-container (parent)
	
	// Change width
	$('input[type="radio"][name="parent-width"]').change(
		function() {
			if (this.value == 'auto') {
				$('#parent').width('auto');
				$('#parent-width-auto + span').css('color', 'initial');
				toggle_cssOption('#parent-width-px-value', false);
			} else {
				toggle_cssOption('#parent-width-px-value', true);
				$('#parent-width-auto + span').css('color', 'grey');
				$('#parent').width($('#parent-width-px-value').val() + 'px');
			}
		}
	);
	$('#parent-width-px-value').change(
		function() {
			$('#parent').width($('#parent-width-px-value').val() + 'px');
		}
	);
	
	// Change height
	$('input[type="radio"][name="parent-height"]').change(
		function() {
			if (this.value == 'auto') {
				$('#parent').height('auto');
				
				// Enable 'height auto', disable 'height px' input
				$('#parent-height-auto + span').css('color', 'initial');
				toggle_cssOption('#parent-height-px-value', false);
				
				// Disable 'align-content' option
				toggle_cssOption('input[name="parent-align-content"]', false);
			} else {
				if ($('#parent-display').is(':checked')) {
					// Enable 'align-content' option
					toggle_cssOption('input[name^="parent-align-"]', true);
					
					if ($('#parent-align-content-stretch').is(':checked')) {
						// Enable 'align-items' option
						// toggle_cssOption('input[name="parent-align-items"]', true);
					}
				}
				
				// Enable 'height px', disable 'height auto' input
				toggle_cssOption('#parent-height-px-value', true);
				$('#parent-height-auto + span').css('color', 'grey');
				$('#parent').height($('#parent-height-px-value').val() + 'px');
			}
		}
	);
	$('#parent-height-px-value').change(
		function() {
			$('#parent').height($('#parent-height-px-value').val() + 'px');
		}
	);
	
	// Show/hide flex item (child) option
	$('#child-option-show').change(
		function() {
			$('.flex-item .list-attr').css('display', (this.checked)?('block'):('none'));
		}
	);
	
	// Change display
	$('#parent-display').change(
		function() {
			if (this.checked) {
				$('#parent').css('display', 'flex');
				// Enable 'inline' option
				toggle_cssOption('#parent-display-inline', true);
				
				// Enable all parent option
				toggle_cssOption('.list-attr input[type="radio"][name^="parent-"]', true);
				
				// If height is auto
				if ($('#parent-height-px').is(':checked') == false) {
					// Disable 'align-content' option
					toggle_cssOption('input[name="parent-align-content"]', false);
				
				// } else if ($('#parent-align-content-stretch').is(':checked') == false) {
					// // If 'align-content' is not 'stretch', disabled 'align-items' option
					// toggle_cssOption('input[name="parent-align-items"]', false);
				}
				
			} else {
				$('#parent').css('display', 'initial');
				// Disable 'inline' option
				toggle_cssOption('#parent-display-inline', false);
				
				// Disable all parent option
				toggle_cssOption('.list-attr input[type="radio"][name^="parent-"]', false);
			}
		}
	);
	// Change 'inline' option
	$('#parent-display-inline').change(
		function() {
			$('#parent').css('display', ((this.checked)?('inline-'):('')) + 'flex');
		}
	);
	
	// Change direction
	$('input[type="radio"][name="parent-direction"]').change(
		function() {
			$('#parent').css('flex-direction', this.value);
		}
	);
	
	// Change wrap
	$('input[type="radio"][name="parent-wrap"]').change(
		function() {
			$('#parent').css('flex-wrap', this.value);
		}
	);
	
	// Change justify-content
	$('input[type="radio"][name="parent-justify-content"]').change(
		function() {
			$('#parent').css('justify-content', this.value);
		}
	);
	
	// Change align-items
	$('input[type="radio"][name="parent-align-items"]').change(
		function() {
			$('#parent').css('align-items', this.value);
		}
	);
	
	// Change align-content
	$('input[type="radio"][name="parent-align-content"]').change(
		function() {
			$('#parent').css('align-content', this.value);
			
			// // If 'align-content' is 'stretch', enabled 'align-items' option
			// if (this.value == 'stretch') {
				// toggle_cssOption('input[name="parent-align-items"]', true);
			
			// // Otherwise, disabled it
			// } else if ($('input[name="parent-align-items"]').prop('disabled') == false) {
				// toggle_cssOption('input[name="parent-align-items"]', false);
			// }
		}
	);
	
	// -----------------
	
	// Function of flex-item (child)
	
	// Change width/height
	$('input[name^="item-"]').change(
		function() {
			var num = this.name.substr(5, 1);
			var attr = this.name.substr(7);
			
			if (this.value == 'auto') {
				// Enable 'width/height auto', disable 'width/height px'
				$('#item-' + num + '-' + attr + '-auto + span').css('color', 'initial');
				toggle_cssOption('#item-' + num + '-' + attr + '-px-value', false);
				
				// Change item width/height
				$('#item-' + num).css(attr, 'auto');
				
			} else {
				// Enable 'width/height px', disable 'width/height auto'
				$('#item-' + num + '-' + attr + '-auto + span').css('color', 'grey');
				toggle_cssOption('#item-' + num + '-' + attr + '-px-value', true);
				
				// Change item width/height
				$('#item-' + num).css(attr, $('#item-' + num + '-' + attr + '-px-value').val() + 'px');
				
			}
		}
	);
	
	// Change width/height input
	$('input[id^="item-"][id$="-px-value"]').change(
		function() {
			var num = this.id.substr(5, 1);
			var attr = (this.id.indexOf('width') !== -1)?('width'):('height');
			$('#item-' + num).css(attr, $('#item-' + num + '-' + attr + '-px-value').val() + 'px');
		}
	);
	
	// Change order
	$('input[id^="item-"][id$="-order"]').change(
		function() {
			var num = this.id.substr(5, 1);
			$('#item-' + num).css('order', this.value);
		}
	);
	
	// Change flex-grow
	$('input[id^="item-"][id$="-grow"]').change(
		function() {
			var num = this.id.substr(5, 1);
			$('#item-' + num).css('flex-grow', this.value);
		}
	);
	
	// Change flex-shrink
	$('input[id^="item-"][id$="-shrink"]').change(
		function() {
			var num = this.id.substr(5, 1);
			$('#item-' + num).css('flex-shrink', this.value);
		}
	);
	
	// Change flex-basis
	$('input[name^="item-"][name$="-basis"]').change(
		function() {
			var num = this.id.substr(5, 1);
			if (this.value == 'auto') {
				// Disable 'flex-basis int' option
				$('#item-' + num + '-basis-int-value').prop('disabled', true);
				$('#item-' + num + '-basis-int-unit').prop('disabled', true);
				$('#item-' + num).css('flex-basis', 'auto');
				
			} else {
				// Enable 'flex-basis int' option
				$('#item-' + num + '-basis-int-value').prop('disabled', false);
				$('#item-' + num + '-basis-int-unit').prop('disabled', false);
				$('#item-' + num).css('flex-basis', $('#item-' + num + '-basis-int-value').val() + $('#item-' + num + '-basis-int-unit').val());
				
			}
		}
	);
	$('input[id^="item-"][id$="-basis-int-value"]').change(
		function() {
			var num = this.id.substr(5, 1);
			$('#item-' + num).css('flex-basis', this.value + $('#item-' + num + '-basis-int-unit').val());
		}
	);
	$('select[id^="item-"][id$="-basis-int-unit"]').change(
		function() {
			var num = this.id.substr(5, 1);
			$('#item-' + num).css('flex-basis', $('#item-' + num + '-basis-int-value').val() + this.value);
		}
	);
	
	// Change align-self
	$('select[id^="item-"][id$="-align-self"]').change(
		function() {
			var num = this.id.substr(5, 1);
			$('#item-' + num).css('align-self', this.value);
		}
	);
	
});

function toggle_cssOption(selector, state) {
	$(selector).prop('disabled', !(state));
	$(selector + ' + span').css('color', (state)?('initial'):('grey'));
}

















<script>
			
				jQuery(document).ready (function () {
					if (jQuery("#text").length > 0) {
					var cloneText = jQuery("#text").clone ().text();
					jQuery("<span>" + cloneText + "</span>").appendTo(jQuery("#insert_text"));
					} else {
						jQuery("<span>В зависимости от дисциплины</span>").appendTo(jQuery("#insert_text"));
					}
				});
</script>
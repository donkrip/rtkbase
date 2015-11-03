/// This function adds new inputs for particular selects

function checkInputSelects(i, method){ //inp OR out OR log
	$('#' + method + 'str' + i + '-path_entry').attr('type', 'hidden');
	$('#' + method + 'str' + i + '-path_entry').parent().css({'visibility':'hidden', 'border':'none'});
	$('#pos1-navsys_entry').attr('type', 'hidden');
	$('#pos1-navsys_entry').parent().css({'visibility':'hidden', 'border':'none'});

	$('#' + method + 'str' + i + '-path_entry').parent().parent().css('display', 'block');
	$('#' + method + 'str' + i + '-format_entry').parent().parent().parent().css('display', 'block');
	$('div.additional' + method + i).remove();

	$('#' + method + 'str' + i + '-type_entry').parent().parent().parent().css('margin-top', '50px');
	$('#inpstr1-type_entry').parent().parent().parent().css('margin-top', '0px');

	if($('#outstr1-type_entry').val() == 'off'){
		$('#outstr2-type_entry').parent().parent().parent().css('display', 'none');
		$('#outstr2-format_entry').parent().parent().parent().css('display', 'none');
		$('#outstr2-path_entry').parent().parent().css('display', 'none');
		$('#outstr2-type_entry').val('off');
		$('#outstr2-path_entry').val('');
	}
	else
		$('#outstr2-type_entry').parent().parent().parent().css('display', 'block');

	switch ($('#' + method + 'str' + i + '-type_entry').val()){
		case "off":
			$('#' + method + 'str' + i + '-format_entry').parent().parent().parent().css('display', 'none');
			$('#' + method + 'str' + i + '-path_entry').parent().parent().css('display', 'none');
			break;
		case "serial":
			$('#' + method + 'str' + i + '-path_entry').parent().parent().append('<div class="additional' + method + i + ' additional_general"><input type="text" id="device' + method + i + '" data-clear-btn="true" placeholder="Device" class="config_form_field"><input type="text" id="baudrate' + method + i + '" data-clear-btn="true" placeholder="baudrate" class="config_form_field"></div>').trigger("create");
			break;
		case "file":
			$('#' + method + 'str' + i + '-path_entry').parent().parent().append('<div class="additional' + method + i + ' additional_general"><input type="text" id="path' + method + i + '" data-clear-btn="true" placeholder="Path" class="config_form_field"></div>').trigger("create");
			break;
		case "tcpcli":
			$('#' + method + 'str' + i + '-path_entry').parent().parent().append('<div class="additional' + method + i + ' additional_general"><input type="text" id="address' + method + i + '" data-clear-btn="true" placeholder="Address" class="config_form_field"><input type="text" id="port' +method + i + '" data-clear-btn="true" placeholder="Port" class="config_form_field"></div>').trigger("create");
			break;
		case "tcpsvr":
			$('#' + method + 'str' + i + '-path_entry').parent().parent().append('<div class="additional' + method + i + ' additional_general"><input type="text" id="port' + method + i + '" data-clear-btn="true" placeholder="Port" class="config_form_field"></div>').trigger("create");
			break;
		case "ntripcli":
			$('#' + method + 'str' + i + '-path_entry').parent().parent().append('<div class="additional' + method + i + ' additional_general"><input type="text" id="address' + method + i + '" data-clear-btn="true" placeholder="Address" class="config_form_field"><input type="text" id="port' + method + i + '" data-clear-btn="true" placeholder="Port" class="config_form_field"><input type="text" id="mount' + method + i + '" data-clear-btn="true" placeholder="Mount Point" class="config_form_field"><input type="text" id="username' + method + i + '" data-clear-btn="true" placeholder="Username" class="config_form_field"><input type="text" id="password' + method + i + '" data-clear-btn="true" placeholder="Password" class="config_form_field"></div>').trigger("create");
			break;
		case "ntripsvr":
			$('#' + method + 'str' + i + '-path_entry').parent().parent().append('<div class="additional' + method + i + ' additional_general"><input type="text" id="address' + method + i + '" data-clear-btn="true" placeholder="Address" class="config_form_field"><input type="text" id="port' + method + i + '" data-clear-btn="true" placeholder="Port" class="config_form_field"><input type="text" id="mount' + method + i + '" data-clear-btn="true" placeholder="Mount Point" class="config_form_field"><input type="text" id="username' + method + i + '" data-clear-btn="true" placeholder="Username" class="config_form_field"><input type="text" id="password' + method + i + '" data-clear-btn="true" placeholder="Password" class="config_form_field"></div>').trigger("create");
			break;
		case "ftp":
			$('#' + method + 'str' + i + '-path_entry').parent().parent().append('<div class="additional' + method + i + ' additional_general"><input type="text" id="address' + method + i + '" data-clear-btn="true" placeholder="Address" class="config_form_field"></div>').trigger("create");
			break;
		case "http":
			$('#' + method + 'str' + i + '-path_entry').parent().parent().append('<div class="additional' + method + i + ' additional_general"><input type="text" id="address' + method + i + '" data-clear-btn="true" placeholder="Address" class="config_form_field"></div>').trigger("create");
			break;
	}

	$('#inpstr-path_entry').parent().parent().append($('#inpstr-format_base').parent().parent().parent());
	$('#outstr-path_entry').parent().parent().append($('#outstr-format_base').parent().parent());
}

/// This function generates correct strings from inputs for upload

function formString(i, method){
	var mode = $("input[name=radio_base_rover]:checked").val();

	var begin = (mode == 'rover') ? '' : $('#' + method + 'str' + i + '-type_entry').val() + '://';
	var end = (mode == 'rover') ? '' : '#' + $('#' + method + 'str' + i + '-format_base').val();

	switch ($('#' + method + 'str' + i + '-type_entry').val()){
		case "off":
			break;
		case "serial":
			$('#' + method + 'str' + i + '-path_entry').val(begin + $.trim($('.additional' + method + i + ' #device' + method + i).val()) + ':' + $.trim($('.additional' + method + i + ' #baudrate' + method + i).val()) + ':8:n:1:off' + end);
			break;
		case "file":
			$('#' + method + 'str' + i + '-path_entry').val(begin + $.trim($('.additional' + method + i + ' #path' + method + i).val()) + end);
			break;
		case "tcpcli":
			$('#' + method + 'str' + i + '-path_entry').val(begin + $.trim($('.additional' + method + i + ' #address' + method + i).val()) + ':' + $.trim($('.additional' + method + i + ' #port' + method + i).val()) + end);
			break;
		case "tcpsvr":
			$('#' + method + 'str' + i + '-path_entry').val( begin + ':' + $.trim($('.additional' + method + i + ' #port' + method + i).val()) + end);
			break;
		case "ntripcli":
			$('#' + method + 'str' + i + '-path_entry').val(begin + $.trim($('.additional' + method + i + ' #username' + method + i).val()) + ':' + $.trim($('.additional' + method + i + ' #password' + method + i).val()) + '@' + $.trim($('.additional' + method + i + ' #address' + method + i).val()) + ':' + $.trim($('.additional' + method + i + ' #port' + method + i).val()) + '/' + $.trim($('.additional' + method + i + ' #mount' + method + i).val()) + end);
			break;
		case "ntripsvr":
			$('#' + method + 'str' + i + '-path_entry').val(begin + $.trim($('.additional' + method + i + ' #username' + method + i).val()) + ':' + $.trim($('.additional' + method + i + ' #password' + method + i).val()) + '@' + $.trim($('.additional' + method + i + ' #address' + method + i).val()) + ':' + $.trim($('.additional' + method + i + ' #port' + method + i).val()) + '/' + $.trim($('.additional' + method + i + ' #mount' + method + i).val()) + end);
			break;
		case "ftp":
			$('#' + method + 'str' + i + '-path_entry').val(begin + $.trim($('.additional' + method + i + ' #address' + method + i).val()) + end);
			break;
		case "http":
			$('#' + method + 'str' + i + '-path_entry').val(begin + $.trim($('.additional' + method + i + ' #address' + method + i).val()) + end);
			break;
	}
}

/// This function parses default string for particular inputs

function defaultStringToInputs(i, method){

	var mode = $("input[name=radio_base_rover]:checked").val();

	if(mode == 'base'){
		var correctVal = $('#' + method + 'str' + i + '-path_entry').val().split('://');
		correctVal = correctVal[1].split('#');
		correctVal = correctVal[0];
	}
	else
		correctVal = $('#' + method + 'str' + i + '-path_entry').val();

	var splitVal = correctVal.split(':');

	switch ($('#' + method + 'str' + i + '-type_entry').val()){
		case "off":
			break;
		case "serial":
			$('.additional' + method + i + ' #device' + method + i).val(splitVal['0']);
			$('.additional' + method + i + ' #baudrate' + method + i).val(splitVal['1']);
			break;
		case "file":
			$('.additional' + method + i + ' #path' + method + i).val($('#' + method + 'str' + i + '-path_entry').val());
			break;
		case "tcpcli":
			$('.additional' + method + i + ' #address' + method + i).val(splitVal['0']);
			$('.additional' + method + i + ' #port' + method + i).val(splitVal['1']);
			break;
		case "tcpsvr":
			$('.additional' + method + i + ' #port' + method + i).val(splitVal['1']);
			break;
		case "ntripcli": //user : pass @ address : port / mount
			$('.additional' + method + i + ' #username' + method + i).val(splitVal['0']);
			var splitPass = splitVal['1'].split('@');
			$('.additional' + method + i + ' #password' + method + i).val(splitPass['0']);
			var splitAdress = splitPass['1'].split(':');
			$('.additional' + method + i + ' #address' + method + i).val(splitAdress['0']); 
			var splitPort = splitAdress['1'].split('/');
			$('.additional' + method + i + ' #port' + method + i).val(splitPort['0']); 
			$('.additional' + method + i + ' #mount' + method + i).val(splitPort['1']);
			break;
		case "ntripsvr":
			$('.additional' + method + i + ' #username' + method + i).val(splitVal['0']);
			var splitPass = splitVal['1'].split('@');
			$('.additional' + method + i + ' #password' + method + i).val(splitPass['0']);
			var splitAdress = splitPass['1'].split(':');
			$('.additional' + method + i + ' #address' + method + i).val(splitAdress['0']); 
			var splitPort = splitAdress['1'].split('/');
			$('.additional' + method + i + ' #port' + method + i).val(splitPort['0']); 
			$('.additional' + method + i + ' #mount' + method + i).val(splitPort['1']);
			break;
		case "ftp":
			$('.additional' + method + i + ' #address' + method + i).val($('#' + method + 'str' + i + '-path_entry').val());
			break;
		case "http":
			$('.additional' + method + i + ' #address' + method + i).val($('#' + method + 'str' + i + '-path_entry').val());
			break;
	}
}

function showBase(msg){
	var to_append = "";
	var config_key = "";
    var config_value = "";
    var config_description = "";
    var config_parameter = "";
    var config_comment = "";
    var input_title = "";
    var issetInput = "";
	var prefixArr = [ 'inp', 'out'];
	var typeArr = ['serial', 'file', 'tcpsvr', 'tcpcli', 'ntripcli', 'ntripsvr', 'ftp', 'http'];
    var formatArr = ['rtcm2', 'rtcm3', 'nov', 'oem3', 'ubx', 'ss2', 'hemis', 'stq', 'javad', 'nvs', 'binex'];
    var optionsArr = ['1002', '1010', '1019', '1020', '1005', '1006', '1007', '1008'];
    
    console.log("Received current base config:");

    // clean prev versions
    var form_div =$("#config_form_column_space");

    form_div.html("");

    $('.loader').css('display', 'none');
    $('#config_select-button').parent().parent().css('display', 'none');

    to_append += '<div class="ui-field-contain">';

    for (var k in msg) {

        config_key = msg[k];
	    config_value = config_key['value'];
	    config_parameter = config_key['parameter'];
	    config_description = (typeof config_key['description'] == "undefined") ? '' : config_key['description'];

	    config_comment = (typeof config_key['comment'] == "undefined") ? '' : config_key['comment'];
	    input_title = (config_description == '') ? config_parameter : config_description;

    	issetInput = (typeof config_key['description'] == "undefined") ? '0' : '1';

        console.log("config base item: " + config_parameter + " = " + config_value + ' description: ' + config_description + ', comment ' + config_comment);

        to_append += '<div class="ui-field-contain>">';
        to_append += '<input type="hidden" id="' + config_parameter + '_check" value="' + issetInput +'">';
        to_append += '<input type="hidden" id="' + config_parameter + '_comment" value="' + config_comment +'">';
        to_append += '<input type="hidden" id="' + config_parameter + '_order" value="' + k +'">';
        
        if((config_parameter == 'inpstr-path') || (config_parameter == 'outstr-path')){
        	var splitK = config_parameter.split('-');

        	if(config_parameter == 'inpstr-path')
        		typeArr.splice(5, 1);
        	else
        		typeArr.splice(4, 1);
        	
        	var checkedOption = config_value.split('://');
        	var checkedFormat = config_value.split('#');

        	to_append += '<label for="' + config_parameter + '_entry">' + input_title + '</label>';
        	to_append += '<input type="text" id="' + config_parameter + '_entry" value="' + config_value + '">';
        	to_append += '<select name="select-native-1" id="' + splitK[0] + '-type_entry" class="config_form_field top_input">';

        	$.each(typeArr, function(index, value){
        		if(checkedOption[0] == value)
        			to_append += '<option value="' + value + '" selected="selected">' + value + '</option>';
        		else
        			to_append += '<option value="' + value + '">' + value + '</option>';
        	});

        	to_append += '</select>';
        	
        	to_append += '<div>';
        	to_append += '<label for="' + splitK[0] + '-format_base">format</label>';

        	if(config_parameter == 'inpstr-path'){
        		to_append += '<select name="select-native-1" id="' + splitK[0] + '-format_base" class="config_form_field top_input">';
        		
        		$.each(formatArr, function(index, value){
            		if(checkedFormat[1] == value)
            			to_append += '<option value="' + value + '" selected="selected">' + value + '</option>';
            		else
            			to_append += '<option value="' + value + '">' + value + '</option>';
        		})

        		to_append += '</select>';
        	}
        	else{
        		to_append += '<input type="text" readonly value="rtcm3" id="' + splitK[0] + '-format_base">';
        	}

        	to_append += '<div>';
        }
        else if(config_parameter == 'rtcm3_out_messages'){
        		var selectedOptionArr = config_value.split(',');

        		to_append += '<label for="' + config_parameter + '_entry">' + input_title + '</label>';
        		to_append += '<input type="hidden" id="' + config_parameter + '_entry" value="' + config_value + '" data-clear-btn="true">';
        		to_append += '<fieldset>';
        		to_append += '<label for="select-choice-10"> </label>';
	            to_append += '<select name="select-choice-10" id="select-choice-10" multiple="multiple" data-native-menu="false">';
				to_append += '<option data-placeholder="true">Choose options</option>';

				$.each(optionsArr, function(index, value){
        			if(jQuery.inArray( value, selectedOptionArr ) >= 0)
                    	to_append += '<option value="' + value + '" selected>' + value + '</option>';
                    else
                    	to_append += '<option value="' + value + '">' + value + '</option>';
                })

				to_append += '</select>'
				to_append += '</fieldset>';
        }
        else{
        	to_append += '<label for="' + config_parameter + '_entry">' + input_title + '</label>';
            to_append += '<input type="text" id="' + config_parameter + '_entry" value="' + config_value + '" data-clear-btn="true">';
        }
        
        to_append += '</div>';
    }

    to_append += '</div>';

	to_append += '<div data-role="popup" id="popupDialog" data-overlay-theme="a" data-theme="a" data-dismissible="false" style="max-width:400px;">';
    to_append +='<div data-role="header" data-theme="a">';
    to_append +='<h1>Change input?</h1>';
    to_append +='</div>';
    to_append +='<div role="main" class="ui-content">';
    to_append +='<h3 class="ui-title">Are you sure you want to change this input?</h3>';
    to_append +='<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-a" data-rel="back" data-transition="flow" id="acceptChange">Yes</a>';
    to_append +='<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-a" data-rel="back" id="denyChange">No</a>';
    to_append +='</div>';
	to_append +='</div>';

    form_div.html(to_append).trigger("create");

    $(document).on("change", '.top_input', function() {
		var method = $(this).attr('id').substr(0, 3);

		if($(this).attr('id').substr(7, 6) != 'format'){
			$('#' + method + 'str-path_entry').val('');
			checkInputSelects('', method);
		}
		else{
			var hashSplit = $('#' + method + 'str-path_entry').val().split('#');
			$('#' + method + 'str-path_entry').val(hashSplit['0'] + '#' + $('#' + method + 'str-format_base').val());
		}
	});

    $(document).on("change", '#select-choice-10', function() {
		$('#rtcm3_out_messages_entry').val($(this).val());
	});

    var popup = true;

	$('#inpstr-type_entry').click(function() {
		if(popup){
			$( "#popupDialog" ).popup( "open");
			$('#acceptChange').click(function() {popup = false;});
			$('#denyChange').click(function() {popup = true;});
		}
	});


	$(document).on("change", '.additional_general input', function() {
		
		$(this).parent().parent().removeClass('additional_general');
		
		var method = $(this).parent().parent().attr('class').substr(10, 3);
		
		formString('', method);

		$(this).parent().parent().addClass('additional_general');
	});
	
	for (key in prefixArr) {
		checkInputSelects('', prefixArr[key]);
		defaultStringToInputs('', prefixArr[key]);
		formString('', prefixArr[key]);
	}
}

function showRover(msg, rover_config_order, rover_config_comments){
    var to_append = "";
    var config_key = "";
    var config_value = "";
    var config_description = "";
    var config_parameter = "";
    var config_comment = "";
    var input_title = "";
    var issetInput = "";
    var splitArr = "";
    var innerSplit = "";
    var originNavsysArr = [];
    var topClassArr = ['inpstr1-type', 'inpstr1-format' ,'inpstr2-type', 'inpstr2-format', 'inpstr3-type', 'inpstr3-format', 'outstr1-type', 'outstr1-format' , 'outstr2-type', 'outstr2-format', 'logstr1-type', 'logstr1-format', 'logstr2-type', 'logstr2-format', 'logstr3-type', 'logstr3-format'];
    var prefixArr = { log: '3', out: '2', inp: '3' };
    var navsysArr = [ 'gps', 'sbas', 'glo', 'gal', 'qzs', 'comp'];

    console.log("Received current rover config:");

    // clean previous versions
    var form_div = $("#config_form_column_space");

    form_div.html("");

    $('.loader').css('display', 'none');

    to_append += '<div class="ui-field-contain fields-field">';
    to_append += '<div class="general-settings"></div>';
    to_append += '<button class="ui-btn" id="adv-set-btn">Advanced settings</button>';
    to_append += '<div class="advanced-settings" style="display:none">';

    // console.log();

    if (!$.isEmptyObject(msg)) {
        for (var k in msg) {

            config_key = msg[k];
		    config_value = config_key['value'];
		    config_parameter = config_key['parameter'];
		    config_description = (typeof config_key['description'] == "undefined") ? '' : config_key['description'];
 
		    config_comment = (typeof config_key['comment'] == "undefined") ? '' : config_key['comment'];
		    input_title = (config_description == '') ? config_parameter : config_description;

	    	issetInput = (typeof config_key['description'] == "undefined") ? '0' : '1';

            console.log("config rover item: " + config_parameter + " = " + config_value + ' ' + config_description);

            to_append += '<div class="ui-field-contain>">';
            to_append += '<input type="hidden" id="' + config_parameter + '_check" value="' + issetInput +'">';
            to_append += '<input type="hidden" id="' + config_parameter + '_comment" value="' + config_comment +'">';
            to_append += '<input type="hidden" id="' + config_parameter + '_order" value="' + k +'">';
            to_append += '<label for="' + config_parameter + '_entry">' + input_title + '</label>';

            if( (config_comment) && (config_comment.indexOf(',') >= 0) ){
                splitArr = config_comment.split(',');                    

                if(jQuery.inArray(config_parameter, topClassArr) >= 0)
					to_append +=  '<select name="select-native-1" id="' + config_parameter + '_entry" class="config_form_field top_input">';
				else
					to_append +=  '<select name="select-native-1" id="' + config_parameter + '_entry" class="config_form_field">';
                
                $.each(splitArr, function(index, value){
                    value = value.replace(/[# (]+/g,'').replace(/[)]+/g,'');
                    innerSplit = value.split(':');

                    if(innerSplit['1'] == config_value)
                        to_append += '<option value="' + innerSplit['1'] + '" selected="selected">' + innerSplit['1'] + '</option>';
                    else
                    	to_append += '<option value="' + innerSplit['1'] + '">' + innerSplit['1'] + '</option>';
                })

                to_append += '</select>';
            }
            else if(config_parameter == 'pos1-navsys'){
            	to_append += '<fieldset>';
        		to_append += '<label for="select-choice-10"> </label>';
        		to_append += '<input type="text" data-clear-btn="true" id="' + config_parameter + '_entry" value="' + config_value + '" class="config_form_field" >';
	            to_append += '<select name="select-choice-10" id="navsys_select" multiple="multiple" data-native-menu="false">';
				to_append += '<option data-placeholder="true">Choose options</option>';

				for(var i = 5; i>=0; i--){
					if( (config_value - (1 << i)) >= 0 ){
						originNavsysArr.push(i);
						config_value -= (1 << i);
					}
				}

				$.each(navsysArr, function(index, value){
        			if(jQuery.inArray( index, originNavsysArr ) >= 0)
                    	to_append += '<option value="' + index + '" selected>' + value + '</option>';
                    else
                    	to_append += '<option value="' + index + '">' + value + '</option>';
                })

				to_append += '</select>'
				to_append += '</fieldset>';
            }
            else
                to_append += '<input type="text" data-clear-btn="true" id="' + config_parameter + '_entry" value="' + config_value + '" class="config_form_field" >';                 

            to_append += '</div>';
        }
    }

    to_append += '</div>';
    to_append += '</div>';

    form_div.html(to_append).trigger("create");

	for (key in prefixArr) {
		for(var b = prefixArr[key]; b >=1; b--){
			if(key != 'inp' || b != 1){
				$(".ui-field-contain.fields-field .general-settings").prepend($('#' + key + 'str' + b + '-format_base').parent().parent().parent());
			    $(".ui-field-contain.fields-field .general-settings").prepend($('#' + key + 'str' + b + '-path_entry').parent().parent());
    			$(".ui-field-contain.fields-field .general-settings").prepend($('#' + key + 'str' + b + '-type_entry').parent().parent().parent());
			}
			else{
				$(".ui-field-contain.fields-field .advanced-settings").prepend($('#' + key + 'str' + b + '-format_base').parent().parent().parent());
			    $(".ui-field-contain.fields-field .advanced-settings").prepend($('#' + key + 'str' + b + '-path_entry').parent().parent());
    			$(".ui-field-contain.fields-field .advanced-settings").prepend($('#' + key + 'str' + b + '-type_entry').parent().parent().parent());
			}
		}
	}

	$(".ui-field-contain.fields-field .general-settings").prepend($('#pos1-navsys_entry').parent().parent().parent());
	$(".ui-field-contain.fields-field .general-settings").prepend($('#pos1-posmode_entry').parent().parent().parent());

	$(document).on("change", '.top_input', function() {
		var method = $(this).attr('id').substr(0, 3);
		var numb = $(this).attr('id').substr(6, 1);

		if($(this).attr('id').substr(8, 6) != 'format'){
			$('#' + method + 'str' + numb + '-path_entry').val('');
			checkInputSelects(numb, method);
		}
	});

	$(document).on("change", '.additional_general input', function() {
		
		$(this).parent().parent().removeClass('additional_general');
		
		var method = $(this).parent().parent().attr('class').substr(10, 3);
		var numb = $(this).parent().parent().attr('class').substr(13, 1);
		
		formString(numb, method);

		$(this).parent().parent().addClass('additional_general');
	});

	$(document).on("change", '#navsys_select', function() {
		var generalVal = 0;
		$.each($(this).val(), function(index, value){
			generalVal += (1 << parseInt(value));
		})

		$('#pos1-navsys_entry').val(generalVal);
	});

	$('#adv-set-btn').click( function(){
		$( ".advanced-settings" ).slideToggle('slow');
		return false;
	})
	
	for (key in prefixArr) {
		for(var b = 1; b <=prefixArr[key]; b++){
			checkInputSelects(b, key);
			defaultStringToInputs(b, key);
			formString(b, key);
		}
	}
}
/*
* 
* 		Shinyform 1.0 par Léo Fontin pour www.snoupix.com
*		© www.snoupix.com 2011
*		Réalisé pour Snoupix.com et à disposition selon les termes de la licence Creative Commons. http://creativecommons.org/licenses/by-sa/3.0/ 
*
*
*/


(function($){

	$.fn.shinyform = function(options){
	
		/// --- SELECT --- ///
		function shiny_select(elem){
			elem.wrap('<div class="shinyform_select shinyform"></div>');
			elem.hide();
			
			var contener = elem.parent('.shinyform_select');
			contener.addClass(elem.attr('class'));
			contener.append('<span class="shinyform_select_name"></span><span class="shinyform_select_button"></span>');
			var name = $('.shinyform_select_name', contener);
			var button = $('.shinyform_select_button, .shinyform_select_name', contener);
			
			
			var option_selected = 0;
			
			var nb_item = elem.find('option').length;
			if(nb_item > 1){
				contener.append('<ul class="shinyform_select_list"></ul>');
				var liste = $('.shinyform_select_list',contener);
				for(var i=0; i<nb_item; i++){
					liste.append('<li><a href="'+elem.find('option').eq(i).val()+'">&bull; '+elem.find('option').eq(i).text()+'</a></li>');
					if(elem.find('option').eq(i).attr('selected')){
						var option_selected = i;
					}
				}
			}
			
			name.text(elem.find('option').eq(option_selected).text());
			
			liste.hide();
			
			if(elem.attr('disabled')){
				contener.addClass('disabled');
				return;
			}
			
			var manageList = function(){
				if(contener.hasClass('open')){
					$('.shinyform_select').removeClass('open');
					$('.shinyform_select_list').hide();
				}else{
					$('.shinyform_select').removeClass('open');;
					$('.shinyform_select_list').hide();
					contener.addClass('open');
					liste.slideDown(100);
				}
			}
			
			contener.hover(function(){
				$(this).addClass('hover');
			}, function(){
				$(this).removeClass('hover');
			});
			
			button.mousedown(function(){
				contener.addClass('focus');
			});
			button.mouseup(function(){
				contener.removeClass('focus');
			});
			
			button.click(function(){
				manageList();
			});
			
			liste.find('a').click(function(){
				option_selected = liste.find('a').index($(this));
				contener.find('select option').eq(option_selected).attr('selected','selected');
				name.text(elem.find('option').eq(option_selected).text());
				manageList();
				return false;
			});
			
			$('body').click(function() { 
				$('.shinyform_select').removeClass('open');
				$('.shinyform_select_list').hide();
			}); 
			
			button.click(function(event){ 
				event.stopPropagation(); 
			});
			
		}
	
		/// --- RADIO --- ///
		function shiny_radio(elem){
			elem.wrap('<div class="shinyform_radio shinyform"></div>');
			
			var contener = elem.parent('.shinyform_radio');
			contener.addClass(elem.attr('class'));
			elem.css({ 	height : $('.shinyform_radio').height(),
							width : $('.shinyform_radio').width(),
							opacity : 0});
						
			var manageCheck = function(){
				$('input:radio').each(function(){
					if($(this).attr('checked')){
						$(this).parent('.shinyform_radio').addClass('checked');
					}else{
						$(this).parent('.shinyform_radio').removeClass('checked');
					}
					$('input:radio').removeClass('disabled');
					if($(this).attr('disabled')){
						$(this).parent('.shinyform_radio').addClass('disabled');
					}
				});
			};
			
			manageCheck();
			
			elem.mousedown(function(){
				contener.addClass('focus');
			});
			elem.mouseup(function(){
				contener.removeClass('focus');
			});
			
			elem.click(function(){
				manageCheck();
			});		
		}
		
		/// --- CHECKBOX --- ///
		function shiny_checkbox(elem){
			elem.wrap('<div class="shinyform_checkbox shinyform"></div>');
			
			var contener = elem.parent('.shinyform_checkbox');
			contener.addClass(elem.attr('class'));
			elem.css({ 	height : $('.shinyform_checkbox').height(),
							width : $('.shinyform_checkbox').width(),
							opacity : 0});
						
			var manageCheck = function(){
				$('input:checkbox').each(function(){
					if($(this).attr('checked')){
						$(this).parent('.shinyform_checkbox').addClass('checked');
					}else{
						$(this).parent('.shinyform_checkbox').removeClass('checked');
					}
					$('input:checkbox').removeClass('disabled');
					if($(this).attr('disabled')){
						$(this).parent('.shinyform_checkbox').addClass('disabled');
					}
				});
			};
			
			manageCheck();
			
			elem.mousedown(function(){
				contener.addClass('focus');
			});
			elem.mouseup(function(){
				contener.removeClass('focus');
			});
			
			elem.click(function(){
				manageCheck();
			});
		}
		
		/// --- FILE --- ///
		function shiny_file(elem){
			elem.wrap('<div class="shinyform_file shinyform"></div>');
			
			var contener = elem.parent('.shinyform_file');
			contener.addClass(elem.attr('class'));
			contener.append('<span class="shinyform_file_name">'+settings.txtNameFile+'</span><span class="shinyform_file_button">'+settings.txtButtonFile+'</span>');
			var name = $('.shinyform_file_name', contener);
			var button = $('.shinyform_file_button', contener);
			
			
			elem.css({ 	height : $('.shinyform_file').height(),
							opacity : 0.0});
							
			if(elem.attr('disabled')){
				contener.addClass('disabled');
			}
			
			elem.change(function(){
				name.text(elem.val());
			});
			
			contener.hover(function(){
				contener.addClass('hover');
			}, function(){
				contener.removeClass('hover');
			});
			
			elem.mousedown(function(){
				contener.addClass('focus');
			});
			elem.mouseup(function(){
				contener.removeClass('focus');
			});
		}
		
		/// --- INIT OPTIONS --- ///
		var settings = {
			txtNameFile : 'Aucun fichier',
			txtButtonFile : 'Parcourir ...'
		};
		
		
		settings = $.extend(settings,options);
		
		return this.each(function(){
			
			if($.browser.msie && $.browser.version < 7){
				return false;
			}
		
			var my = $(this);
		
			if(my.is('select')){
				shiny_select(my);	
			}
			if(my.is('input:checkbox')){
				shiny_checkbox(my);
			}
			if(my.is('input:radio')){
				shiny_radio(my);
			}
			if(my.is('input:file')){
				shiny_file(my);
			}
			
		});
		
	};

})(jQuery);
function ajax(){var msg=$("#form").serialize();$.ajax({type:"POST",url:"/new_eva.php",data:msg,success:function(data){$("#log").show();$("#log").html(data);$('.sms-form form').hide();},error:function(xhr,str){alert("Возникла ошибка!");}});}function ajax2(){var msg=$("#form_banner").serialize();$.ajax({type:"POST",url:"/eva_mail.php",data:msg,success:function(data){$("#log3").html(data);},error:function(xhr,str){alert("Возникла ошибка!");}});}function ajax1(){var msg=$("#gen1").serialize();$.ajax({type:"POST",url:"/eva_call.php",data:msg,success:function(data){$("#log1").html(data);},error:function(xhr,str){alert("Возникла ошибка!");}});}$(function(){$('a.page-scroll').bind('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top},1500,'easeInOutExpo');event.preventDefault();});});jQuery(function(){jQuery(window).scroll(function(){if(jQuery(this).scrollTop()!=0){jQuery('#toTop').fadeIn();}else{jQuery('#toTop').fadeOut();}});jQuery('#toTop').click(function(){jQuery('body,html').animate({scrollTop:0},800);});});jQuery(document).ready(function($){var select=$('a[href$=".bmp"],a[href$=".gif"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".BMP"],a[href$=".GIF"],a[href$=".JPG"],a[href$=".JPEG"],a[href$=".PNG"]');select.attr('rel','fancybox');select.fancybox();});jQuery(document).ready(function($){$(".zoom").fancybox({'padding':0,'overlayOpacity':0.9,'width':900,'hideOnOverlayClick':true,'overlayColor':'#000','hideOnContentClick':false});});jQuery.fn.notExists=function(){return $(this).length==0;}
$(document).ready(function(){$(".send10").validation($(".InpName5").validate({test:"blank letters minlength2 maxlength10",placeholder:'Ваше имя',invalid:function(){if($(this).nextAll(".error").notExists()){$(this).after('<div class="error">Ваше имя</div>');$(this).nextAll(".error").delay(2000).fadeOut("slow");setTimeout(function(){$(".InpName5").next(".error").remove();},4600);}},valid:function(){$(this).nextAll(".error").remove();}}),$(".InpPhone5").validate({test:"blank digits minlength11 maxlength11 /^\+?([87](?!95[4-79]|99[^2457]|907|94[^0]|336|986)([348]\d|9[0-689]|7[0247])\d{8}|[1246]\d{9,13}|68\d{7}|5[1-46-9]\d{8,12}|55[1-9]\d{9}|55119\d{8}|500[56]\d{4}|5016\d{6}|5068\d{7}|502[45]\d{7}|5037\d{7}|50[457]\d{8}|50855\d{4}|509[34]\d{7}|376\d{6}|855\d{8}|856\d{10}|85[0-4789]\d{8,10}|8[68]\d{10,11}|8[14]\d{10}|82\d{9,10}|852\d{8}|90\d{10}|96(0[79]|17[01]|13)\d{6}|96[23]\d{9}|964\d{10}|96(5[69]|89)\d{7}|96(65|77)\d{8}|92[023]\d{9}|91[1879]\d{9}|9[34]7\d{8}|959\d{7}|989\d{9}|97\d{8,12}|99[^4568]\d{7,11}|994\d{9}|9955\d{8}|996[57]\d{8}|9989\d{8}|380[34569]\d{8}|381\d{9}|385\d{8,9}|375[234]\d{8}|372\d{7,8}|37[0-4]\d{8}|37[6-9]\d{7,11}|30[69]\d{9}|34[67]\d{8}|3[12359]\d{8,12}|36\d{9}|38[1679]\d{8}|382\d{8,9})$/",placeholder:'Номер телефона',invalid:function(){if($(this).nextAll(".error").notExists()){$(this).after('<div class="error">Только мобильный</div>');$(this).nextAll(".error").delay(2000).fadeOut("slow");setTimeout(function(){$(".InpPhone5").next(".error").remove();},4600);}},valid:function(){$(this).nextAll(".error").remove();}}));});$(document).ready(function(){$(".button").validation($(".nameid").validate({test:"blank letters minlength2 maxlength10",placeholder:'Владимир*',invalid:function(){if($(this).nextAll(".error").notExists()){$(this).after('<div class="error">Введите корректное имя</div>');$(this).nextAll(".error").delay(2000).fadeOut("slow");setTimeout(function(){$(".nameid").next(".error").remove();},4600);}},valid:function(){$(this).nextAll(".error").remove();}}));});$(document).ready(function(){$(".send5").validation($(".InpEmail").validate({test:"blank digits minlength11 maxlength15 /^\+?([87](?!95[4-79]|99[^2457]|907|94[^0]|336|986)([348]\d|9[0-689]|7[0247])\d{8}|[1246]\d{9,13}|68\d{7}|5[1-46-9]\d{8,12}|55[1-9]\d{9}|55119\d{8}|500[56]\d{4}|5016\d{6}|5068\d{7}|502[45]\d{7}|5037\d{7}|50[457]\d{8}|50855\d{4}|509[34]\d{7}|376\d{6}|855\d{8}|856\d{10}|85[0-4789]\d{8,10}|8[68]\d{10,11}|8[14]\d{10}|82\d{9,10}|852\d{8}|90\d{10}|96(0[79]|17[01]|13)\d{6}|96[23]\d{9}|964\d{10}|96(5[69]|89)\d{7}|96(65|77)\d{8}|92[023]\d{9}|91[1879]\d{9}|9[34]7\d{8}|959\d{7}|989\d{9}|97\d{8,12}|99[^4568]\d{7,11}|994\d{9}|9955\d{8}|996[57]\d{8}|9989\d{8}|380[34569]\d{8}|381\d{9}|385\d{8,9}|375[234]\d{8}|372\d{7,8}|37[0-4]\d{8}|37[6-9]\d{7,11}|30[69]\d{9}|34[67]\d{8}|3[12359]\d{8,12}|36\d{9}|38[1679]\d{8}|382\d{8,9})$/",placeholder:'',invalid:function(){if($(this).nextAll(".error2").notExists()){$(this).after('<div class="error2">Введите корректный телефон или е-майл</div>');$(this).nextAll(".error2").delay(2000).fadeOut("slow");setTimeout(function(){$(".InpPhone2").next(".error2").remove();},2600);}},valid:function(){$(this).nextAll(".error2").remove();}}));});$('.fancy1').fancybox({helpers:{title:{type:'float',openEffect:'none',closeEffect:'none'}}})
$(".franchise_sale").click(function(){$("#bannersale").toggle("600",function(){});});function ajax5(){var msg=$("#form_ban").serialize();$.ajax({type:"POST",url:"/discount_evakuator.php",data:msg,success:function(data){$(".results5").html(data);},error:function(xhr,str){alert("Возникла ошибка!");}});}$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>0){$('#scroller').fadeIn();}else{$('#scroller').fadeOut();}});});$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>0){$('#scrollerinner').fadeIn();}else{$('#scrollerinner').fadeOut();}});});jQuery(function($){$("#phone_field").mask("+7 999 999-99-99");});jQuery(function($){$("#phone_field2").mask("+7 999 999-99-99");});jQuery(function($){$("#phone_field3").mask("+7 (999) 999-99-99");});function isChecked(checkbox,ms_send){document.getElementById(ms_send).disabled=!checkbox.checked;}$(function(){$('#agree').on('change',function(){if($('#agree').prop('checked')){$('#contactbtn').attr('disabled',false);}else{$('#contactbtn').attr('disabled',true);}});});function checkboxed(){var agreement,button;agreement=document.getElementById('agreement');button=document.getElementById('button');if(agreement.checked==true){button.disabled=false;}else{button.disabled=true;}}function Go(Type){document.getElementById('submit').disabled=!Type;}
$(document).ready(function(){  
   $("#poww").on("keyup", function() { // Выполняем скрипт при изменении содержимого 2-го поля
    $('input').on('click', function(){ 
      var input1 = $("#pow").val(); // Получаем содержимое 1-го поля
      var input2 = $(this).val(); // Получаем содержимое 2-го поля
      
      if(input1 != input2) { // Условие, если поля не совпадают
      
         $("#pow").css('border-bottom', 'red 1px solid'); // Окрашиваем в красный цвет 1 поле
         $('#poww').css('border-bottom', 'red 1px solid');// Окрашиваем в красный цвет 2 поле
         $("#complete").attr("disabled", "disabled"); // Запрещаем отправку формы
         $('#message2').text('пароли не совподают') // выводится сообщения с текстом
         $('#message2').css({  // открываем нах div с сообщением
            display: 'flex',  
         })
         
      } else { // Условие, если поля совпадают
         
         $("#pow").css('border-bottom', '#F2F2F2 1px solid'); // Возвращаем цвет 1 полю
         $('#poww').css('border-bottom', '#F2F2F2 1px solid');// Возвращаем цвет 1 полю
         $("#complete").removeAttr("disabled");  // Разрешаем отправку формы
         $('#message2').css({ // закрываем наdiv с сообщением
            display: 'none', 
         })
         
      }

      if(input1 && input2 < 8) {
         $("#complete").attr("disabled", "disabled"); // Запрещаем отправку формы
      } else {
         $("#complete").removeAttr("disabled");  // Разрешаем отправку формы
      }
   })
   });

   $('#complete').on('click', function() {
      var vali = /[^A-Z-a-z-0-9]/g;
      var input1 = $("#pow").val(); // Получаем содержимое 1-го поля
      var input2 = $('#poww').val(); // Получаем содержимое 2-го поля

      if(input1 && input2 != vali) {
         $("#pow").css('border-bottom', 'red 1px solid'); // Окрашиваем в красный цвет 1 поле
         $('#poww').css('border-bottom', 'red 1px solid');// Окрашиваем в красный цвет 2 поле
         $("#complete").attr("disabled", "disabled"); // Запрещаем отправку формы
         $('#message1').css({
            display: 'flex',
         })
         $('#message1').text('Пароль не совподает A-Z-a-z-0-9')
      } else {
         $("#pow").css('border-bottom', '#F2F2F2 1px solid'); // Возвращаем цвет 1 полю
         $('#poww').css('border-bottom', '#F2F2F2 1px solid');// Возвращаем цвет 1 полю
         $('#message1').css({
            display: 'none',
         })
         $("#complete").removeAttr("disabled");  // Разрешаем отправку формы
        
      }
   })

   $("#email").on("change",function(){ // проверяем email на правено введеные данные
    
      var email = $(this).val(); // получаем поле email

      if (validateEmail(email)) { // Условие если введеные данные совподают 
         $("#complete").removeAttr("disabled");  // Разрешаем отправку формы
         $(this).css({
           color: "black", //  возвращаем цвет тексту 
           "border-bottom-color": "#F2F2F2", // возвращаем цвет полю
         });
       } else { // условие если введеные данные не совподают
         $("#complete").attr("disabled", "disabled"); // Запрещаем отправку формы
         $(this).css({  
           color: "red", // меняем цвет текста на красный 
           "border-bottom": "1px solid red" // меняем цвет поля на красный 
         });
      }          
   });
      function validateEmail(email) { // получаем значение 
         var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; // каким должны быть введенные данные
       
         return $.trim(email).match(pattern) ? true : false; 
       }


$('#complete').on("click",function(e){ // проверяем на заполнение полелей данных
   var va = $('.imp').val(); //получаем поля с классом imp
   
   if(va == '' ) {  // если воля пустые 
      $("#complete").attr("disabled", "disabled"); //запрещаем отправку 
   } else { // если не пустыее 
      $("#complete").removeAttr("disabled"); // разрешаем отправку 
      $('header').css({ // после отправке закрываем страницу для веедения данных
         display: 'none',
      });
      $('footer').css({ // открываем страницу об успешной отправки 
         display: 'flex',
      })
   }
   return false;
});

   
});
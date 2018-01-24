$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};
      var value = $('form input').val();

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          $('#todo-table ul').append('<li onclick="$(this).remove();">' + value + '</li>')
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var selectedLi = $(this);
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          $(selectedLi).remove();
        }
      });
  });

});

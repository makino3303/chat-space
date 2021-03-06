$(function(){
  function buildMessage(message){
    let image = message.image ? `<img class="lower-message__image" src="${message.image}"></img>` : "" ;
    var html = `<div class="message" data-message-id=${message.id}>
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.username}
                    </div>
                    <div class="upper-message__date">
                      ${message.data}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    ${image}
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType:  false
    })
    .done(function(message){
      var html = buildMessage(message);
      $('.messages').append(html)
      $('.block__main').animate({ scrollTop: $('.block__main')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
    .always(function(){
      $('.form__submit').prop( 'disabled', false )
    })
  })

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data("message-id");
      $.ajax({
        url: 'api/messages',
        type:'get',
        dataType: 'json',
        data: {last_id: last_message_id}
      })
      .done(function (messages) {
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildMessage(message);
          $('.messages').append(insertHTML);
          $('.block__main').animate({scrollTop: $('.block__main')[0].scrollHeight}, 'fast');
        })
      })
      .fail(function() {
        alert("更新に失敗しました");
      });
    }
  };
  setInterval(reloadMessages, 5000);
});
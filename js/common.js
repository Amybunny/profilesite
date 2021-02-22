$(function(){

  //トップページスライド
  $('.topImg').slick({
    autoplay:true,
    infinite:true,
    speed:2000,
    arrows:false,
    fade:true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });

  //入力チェック
  const MSG_EMPTY = '入力必須です';
  const MSG_EMAIL = 'emailの形式で入力してください';
  
  $text = $('.text');
  $email = $('.email');
  $comment = $('.comment');

  function diaplayErrMsg($str){
    $str.on('keyup',function(e){
      var form_g = $(this).closest('.form-group');
      if($(this).val().length === 0){
        form_g.find('.msg-area').text(MSG_EMPTY);
      }else{
        form_g.find('.msg-area').text('');
      }
    });
  }

  //email形式チェック
  function validEmail($str){
    $str.on('focusout',function(e){
      var form_g = $(this).closest('.form-group');
      if($(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
        form_g.find('.msg-area').text('');
      }else{
        form_g.find('.msg-area').text(MSG_EMAIL);

      }
    });
  }

  diaplayErrMsg($text);
  diaplayErrMsg($email);
  diaplayErrMsg($comment);

  validEmail($email);

});


$('li').click(function(){
    alert('clicked')
});

$('#btn').click(function (){
    $('h1').text('Testing text')
    $('#h1').append('Extra text')
});

$('#btn2').on('click',function(){
    console.log('Second button is clicked')
});
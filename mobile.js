// Этот скрипт для того, чтобы изменять круги в зависимости от того, мобильное устройство, или нет.

//Определяем стиль для компа
var computer_style1 = 'body::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(#04a2f4, #007de7); clip-path: circle(25% at left 60%); z-index: 2; }';
var computer_style2 = 'body::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(#007de7, #262d37); clip-path: circle(20% at right 10%); z-index: 0; }';
var computer_style = computer_style1 + computer_style2;


//Определяем стиль для тела
var mobile_style1 = 'body::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(#04a2f4, #007de7); clip-path: circle(10% at left 60%); z-index: 2; }';
var mobile_style2 = 'body::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(#007de7, #262d37); clip-path: circle(8% at right 35%); z-index: 0; }';
var mobile_style = mobile_style1 + mobile_style2;

//Находим разрешение экрана
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

if (width > height){ //Комп (или горизонтальная ориентация тела)
    document.write('<style>' + computer_style + '</style>'); //Добавляем стиль компа
} else { //Вертикальная ориентация тела
    document.write('<style>' + mobile_style + '</style>'); //Добавляем стиль тела
}
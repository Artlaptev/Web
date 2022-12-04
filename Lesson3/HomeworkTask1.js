function ConvertToForengate(gradC){
return gradC*9/5+32;
}
const gradC=Number.parseFloat(prompt("Введите значение в градусах Цельсия"));
alert("Цельсий:"+gradC+"Фаренгейт: "+ConvertToForengate(gradC));
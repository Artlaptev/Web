// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.
 
function getMaxEvenElement(arr) {
    let maxValue=arr[0];
    for (let index = 0; index < arr.length; index++) {
        if(index%2==0){
            if(maxValue<=arr[index]){
                maxValue=arr[index];
            }
        }        
    }
}
 
console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
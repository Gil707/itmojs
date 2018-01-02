/* Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
    Библиотека должна обладать следующими методами:
    - поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов переданного массива;
- создание копии (клонирование) переданного массива.
*/

;(function(){
    window.arrayUtils = {
        min:function(arr){
            return Math.min.apply(null, arr);
        },
        max:function(arr){
            return Math.max.apply(null, arr);
        },
        avg: function (arr) {
            var length = arr.length,
                summ = 0;
            for (i = 0; i < length; i++) {
                summ += arr[i];
            }

            return (summ/length).toFixed(2);
        },
        copy: function (arr) {
            return arr.slice();
        }
    }
}());

let add =(function  () {
    let sum=0;
  return  function increase(value) {
        sum+=value;
        increase.toString= function () {
            return sum
        };
        return increase
    };

})();



 console.log(add(1)(6)(-3).toString());

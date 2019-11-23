
document.addEventListener('DOMContentLoaded', function() {
let subscribe = document.getElementById('submit');
console.log(subscribe);
subscribe.addEventListener('click', function(event){
    alert("Thank you for subscribing to our newsletter!");
});
})
/*Menu-toggle*/
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
    $("#menu-toggle i").toggleClass("fa fa-outdent").toggleClass("fa fa-indent")
});
$(".dropdown-button").click(function(e) {
    $("#dropdown").slideToggle("100");
    $("i.dropdown-icon").toggleClass("fa fa-angle-right").toggleClass("fa fa-angle-down");
    this.toggleClass("active");
});
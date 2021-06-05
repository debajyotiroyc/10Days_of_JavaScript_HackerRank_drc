/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    function val(a,b)
    {
        this.length=a;
        this.width=b;
        this.perimeter=2*(this.length+this.width);
        this.area=this.length*this.width;
    }
    var ob=new val(a,b);
    return ob;
}
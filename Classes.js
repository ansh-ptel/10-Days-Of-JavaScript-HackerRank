class Polygon {
    constructor(array){
        this.array = array;
    }
    perimeter(){
        for (var i=0 , sum=0; i < this.array.length; ++i){
            sum += this.array[i];
        }
        return sum;
    }
}
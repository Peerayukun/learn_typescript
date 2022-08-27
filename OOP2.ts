class Point{
    x:number = 0
    y:number = 0
    readonly read:string = "this is read"
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}

class gettersetter{
    _x:number = 0;
    get x():number{
        this._x = this._x+1;
        return this._x
    }
    set x(value:number){
        this._x = value
    }
}

const point = new Point(10,20)
console.log(point.x,point.y,point.read)

const getset = new gettersetter
console.log(getset._x)
console.log(getset.x)
console.log(getset.x)
console.log(getset.x)
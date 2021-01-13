class vector2d{
    x = 0.0;
    y = 0.0;

    vector2d(){
        x = 0.0;
        y = 0.0;
    }

    vector2d(_x, _y){
        x = _x;
        y = _y;
    }

    vector2d(newvector){
        this.x = newvector.x;
        this.y = newvector.y;
    }

    mag(){
        return Math.sqrt(x * x + y * y);
    }

    norm(){
        r = 1 / this.mag();
        return vector2d(x * r, y * r);
    }

    dot(_vector){
        return this.x * _vector.x + this.y * _vector.y;
    }
}
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

    dist(_vector){
        return Math.sqrt(Math.pow(this.x - _vector.x, 2) + Math.pow(this.y - _vector.y, 2));
    }

    norm(){
        r = 1 / this.mag();
        return vector2d(x * r, y * r);
    }

    dot(_vector){
        return this.x * _vector.x + this.y * _vector.y;
    }
}
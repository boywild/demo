##弹性运动

由加减速组成
```html
    <input type="button" value="运动" class="btn">
    <div class="box"></div>
    <div class="line"></div>
```

```css
        .box {
            width: 200px;
            height: 200px;
            background: #f00;
            position: absolute;
            left: 0;
        }

        .line {
            position: absolute;
            width: 1px;
            height: 700px;
            background: #000;
            left: 500px;
        }
```


```js

    var btn = document.querySelector('.btn');
    var box = document.querySelector('.box');
    var speed = 0, timer;
    btn.onclick = function () {
        startMove();
    }
    function startMove() {

        clearInterval(timer);
        timer = setInterval(function () {
            if (box.offsetLeft > 500) {
                speed -= 10;
            } else {
                speed += 10;
            }
            box.style.left = box.offsetLeft + speed + 'px';
        }, 30);

    }
```

找到加速度和运动距离之间的关系，距离越解决目标值，加速度应该越小
```js
    timer = setInterval(function () {
        if (box.offsetLeft > 500) {
            speed -= (box.offsetLeft-500)/50;
        } else {
            speed += (500-box.offsetLeft)/50;
        }
        box.style.left = box.offsetLeft + speed + 'px';
    }, 30);
```

整理后
```js
speed += (500-box.offsetLeft)/50;
speed -= (box.offsetLeft-500)/50;
========>
speed += -(box.offsetLeft-500)/50;========>speed += (500-box.offsetLeft)/50;
```

在js中没有可以表示摩擦力的方法 F(摩擦力)=f(摩擦系数)/m(物体质量)，这里能让物体运动停下来和运动快慢的只有速度，所以考虑在速度上进行一些调整，让速度越来越接近0，就能让物体停下来
```js
speed += (500-box.offsetLeft)/50;
speed *=0.95l;
```

物体看似是停止了，其实，定时器还没有被清楚，定时器内的方法仍然在执行，所以这里考虑在何时清楚定时器，清除定时器的条件为 当速度小于1 ，距离目标点的距离小于1的时候
```js
    function startMove() {
        clearInterval(timer);
        timer = setInterval(function () {
            speed += (500 - box.offsetLeft) / 50;
            speed *= 0.95;
            if (Math.abs(speed) < 1 && Math.abs(500 - box.offsetLeft) < 1) {
                clearInterval(timer);
            }
            box.style.left = box.offsetLeft + speed + 'px';
        }, 30);
    }
```

修正偏差
```js
    if (Math.abs(speed) < 1 && Math.abs(500 - box.offsetLeft) < 1) {
        clearInterval(timer);
        box.style.left=500+'px';
        speed=0;
    }
```

弹性公式
速度+=(目标值-当前值)/大于0的系数  6 7 8
速度*=摩擦系数 0.7 0.75

缓冲公式
速度=(目标值-当前值)/大于0的系数
速度取整不让出现小数

##碰撞运动

首先找到碰撞的零界点，在确定运动的方向,然后去更改对应的速度(速度取反)
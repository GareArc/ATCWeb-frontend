import {compileScript} from "@vue/compiler-sfc";

interface Option {
    dom: string,
    cw: number,
    ch: number,
    ds: number,
    r: number,
    cl: string,
    dis: number
}

interface Dot {
    x: number,
    y: number,
    ax: number,
    ay: number,
    label: string | undefined
}

export default class DotLine {
    opt: Option = {
        dom: "canvas",//画布id
        cw: 1000,//画布宽
        ch: 500,//画布高
        ds: 100,//点的个数
        r: 0.5,//圆点半径
        cl: "#fff",//颜色
        dis: 100//触发连线的距离
    };
    c!: HTMLCanvasElement;
    ctx!: CanvasRenderingContext2D;
    dotSum!: number;
    radius!:number;
    disMax!:number;
    color!:string;
    dots!:Dot[];
    animate!: () => void;
    stopAnime!: () => void;

    constructor(option: Option) {
        Object.assign(this.opt, option);

        this.dotSum = this.opt.ds;//点的数量
        this.radius = this.opt.r;//圆点的半径
        this.disMax = this.opt.dis * this.opt.dis;//点与点触发连线的间距
        this.color = this.color2rgb(this.opt.cl);//设置粒子线颜色
        this.dots = [];

    }

    color2rgb(colorStr: string): string {
        let red = null,
            green = null,
            blue = null;
        let cstr = colorStr.toLowerCase();//变小写
        const cReg = /^#[0-9a-fA-F]{3,6}$/;//确定是16进制颜色码
        if (cstr && cReg.test(cstr)) {
            if (cstr.length == 4) {
                let cstrnew = '#';
                for (let i = 1; i < 4; i++) {
                    cstrnew += cstr.slice(i, i + 1).concat(cstr.slice(i, i + 1));
                }
                cstr = cstrnew;
            }
            red = parseInt('0x' + cstr.slice(1, 3));
            green = parseInt('0x' + cstr.slice(3, 5));
            blue = parseInt('0x' + cstr.slice(5, 7));
        }
        return red + ',' + green + ',' + blue;
    }


    //画点
    addDots():void {
        let dot;
        for (let i = 0; i < this.dotSum; i++) {//参数
            dot = {
                x: Math.floor(Math.random() * this.c.width) - this.radius,
                y: Math.floor(Math.random() * this.c.height) - this.radius,
                ax: (Math.random() * 2 - 1) / 1.5,
                ay: (Math.random() * 2 - 1) / 1.5
            }
            this.dots.push(dot as Dot);
        }
    }

    //点之间画线
    drawLine(dots: Dot[]):void {
        let nowDot;
        const _that = this;
        //自己的思路：遍历两次所有的点，比较点之间的距离，函数的触发放在animate里
        this.dots.forEach(function (dot) {
            _that.move(dot);
            for (let j = 0; j < dots.length; j++) {
                nowDot = dots[j];
                if (nowDot === dot || nowDot.x === null || nowDot.y === null) continue;//continue跳出当前循环开始新的循环
                const dx = dot.x - nowDot.x,//别的点坐标减当前点坐标
                    dy = dot.y - nowDot.y;
                const dc = dx * dx + dy * dy;
                if (Math.sqrt(dc) > Math.sqrt(_that.disMax)) continue;
                // 如果是鼠标，则让粒子向鼠标的位置移动
                if (nowDot.label && Math.sqrt(dc) > Math.sqrt(_that.disMax) / 2) {
                    dot.x -= dx * 0.02;
                    dot.y -= dy * 0.02;
                }
                const ratio = (_that.disMax - dc) / _that.disMax;
                _that.ctx.beginPath();
                _that.ctx.lineWidth = ratio / 2;
                _that.ctx.strokeStyle = 'rgba(' + _that.color + ',' + (ratio + 0.2).toFixed(1) + ')';
                _that.ctx.moveTo(dot.x, dot.y);
                _that.ctx.lineTo(nowDot.x, nowDot.y);
                _that.ctx.stroke();//不描边看不出效果

                // dots.splice(dots.indexOf(dot), 1);
            }
        });
    }

    //点运动
    move(dot: Dot):void {
        dot.x += dot.ax;
        dot.y += dot.ay;
        //点碰到边缘返回
        dot.ax *= (dot.x > (this.c.width - this.radius) || dot.x < this.radius) ? -1 : 1;
        dot.ay *= (dot.y > (this.c.height - this.radius) || dot.y < this.radius) ? -1 : 1;
        //绘制点
        this.ctx.beginPath();
        this.ctx.arc(dot.x, dot.y, this.radius, 0, Math.PI * 2, true);
        this.ctx.stroke();
    }


    //开始动画
    async start(): Promise<void> {
        this.c = <HTMLCanvasElement>document.getElementById(this.opt.dom);//canvas元素id
        this.ctx = <CanvasRenderingContext2D>this.c.getContext('2d');
        this.c.width = this.opt.cw;//canvas宽
        this.c.height = this.opt.ch;//canvas高

        //requestAnimationFrame控制canvas动画
        const RAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
            return -1;
        }

        const _self = this;
        //增加鼠标效果
        const mousedot = { x: 0, y: 0, label: 'mouse' };
        this.c.onmousemove = function (e) {
            e = e || window.event;
            mousedot.x = e.clientX - _self.c.offsetLeft;
            mousedot.y = e.clientY - _self.c.offsetTop + document.documentElement.scrollTop;
        };
        this.c.onmouseout = function (e) {
            mousedot.x = -100;
            mousedot.y = -100;
        }
        let stop = -1;
        //控制动画
        this.animate = function () {
            _self.ctx.clearRect(0, 0, _self.c.width, _self.c.height);
            _self.drawLine((<Dot[]>[mousedot]).concat(_self.dots));
            stop = RAF(_self.animate);
        };
        //停止动画
        this.stopAnime = function () {
            if(stop !== -1) window.cancelAnimationFrame(stop);
        }

        const _that = this;
        this.addDots();
        setTimeout(function () {
            _that.animate();
        }, 100);
    }

    async stop(): Promise<void> {
        const _that = this;
    }

}

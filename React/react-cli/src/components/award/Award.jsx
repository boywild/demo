import a from 'assets/images/01.png';
import b from 'assets/images/02.png';
import c from 'assets/images/03.png';
import d from 'assets/images/04.png';
import e from 'assets/images/05.png';
import './award.css';


export default class Award extends React.Component {
    constructor() {
        super();
        this.starts = this.starts.bind(this);
        this.roll = this.roll.bind(this);
        this.click = false;
    }
    luckFactory = {
        index: 0,	//当前转动到哪个位置，起点位置
        count: 0,	//总共有多少个位置
        timer: 0,	//setTimeout的ID，用clearTimeout清除
        speed: 20,	//初始转动速度
        times: 0,	//转动次数
        cycle: 50,	//转动基本次数：即至少需要转动多少次再进入抽奖环节
        prize: -1,	//中奖位置
        init: (id) => {
            if (this.luck.querySelectorAll('.luck-unit').length > 0) {
                // $luck = this.luck;
                // $units = this.luck.querySelectorAll(".luck-unit");
                // this.luckFactory.obj = $luck;
                this.luckFactory.count = this.luck.querySelectorAll(".luck-unit").length;
                this.luck.querySelector(".luck-unit-" + this.luckFactory.index).classList.add("active");
                console.log(this.luckFactory.count);
            };
        },


        rotate: () => {
            let index = this.luckFactory.index;
            let count = this.luckFactory.count;
            let luck = this.luck;
            luck.querySelector(".luck-unit-" + index).classList.remove("active");
            index += 1;
            console.log(index, count, luck);
            if (index > count - 1) {
                index = 0;
            };
            luck.querySelector(".luck-unit-" + index).classList.add("active");
            this.luckFactory.index = index;
            return false;
        },
        stop: function (index) {
            this.luckFactory.prize = index;
            return false;
        }
    }

    roll() {
        console.log(this.luckFactory);
        this.luckFactory.times += 1;
        this.luckFactory.rotate();
        if (this.luckFactory.times > this.luckFactory.cycle + 10 && this.luckFactory.prize == this.luckFactory.index) {
            clearTimeout(this.luckFactory.timer);
            this.luckFactory.prize = -1;
            this.luckFactory.times = 0;
            this.click = false;
        } else {
            if (this.luckFactory.times < this.luckFactory.cycle) {
                this.luckFactory.speed -= 10;
            } else if (this.luckFactory.times == this.luckFactory.cycle) {
                let index = Math.random() * (this.luckFactory.count) | 0;
                // if (index > 5) {
                //     index = 7;
                // } else {
                //     index = 5;
                // }
                console.log(this.luckFactory);
                this.luckFactory.prize = index;//最终中奖位置
            } else {
                if (this.luckFactory.times > this.luckFactory.cycle + 10 && ((this.luckFactory.prize == 0 && this.luckFactory.index == 7) || this.luckFactory.prize == this.luckFactory.index + 1)) {
                    this.luckFactory.speed += 110;
                } else {
                    this.luckFactory.speed += 20;
                }
            }
            if (this.luckFactory.speed < 40) {
                this.luckFactory.speed = 40;
            };

            this.luckFactory.timer = setTimeout(this.roll, this.luckFactory.speed);
        }
        return false;
    }
    starts() {
        this.luckFactory.init('luck');
        console.log(this.click)
        if (this.click) {
            return false;
        }
        else {
            this.luckFactory.speed = 100;
            this.roll();
            this.click = true;
            return false;
        }
    }


    render() {
        return (
            <div className="shanDeng" id="deng">
                <div id="luck" ref={node => this.luck = node}>
                    <table style={{ 'borderSpacing': '.08rem .03rem' }}>
                        <tbody>
                            <tr>
                                <td className="luck-unit luck-unit-0"><img src={a} /></td>
                                <td className="luck-unit luck-unit-1"><img src={b} /></td>
                                <td className="luck-unit luck-unit-2"><img src={c} /></td>
                            </tr>
                            <tr>
                                <td className="luck-unit luck-unit-7"><img src={e} /></td>
                                <td className="cjBtn" id="btn" onClick={this.starts}></td>
                                <td className="luck-unit luck-unit-3"><img src={a} /></td>
                            </tr>
                            <tr>
                                <td className="luck-unit luck-unit-6"><img src={b} /></td>
                                <td className="luck-unit luck-unit-5"><img src={d} /></td>
                                <td className="luck-unit luck-unit-4"><img src={c} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
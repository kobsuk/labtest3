export{}
abstract class ShippingCalculator{
    public pay: number;
    public wight: number;
    constructor(wight: number,pay: number){
        this.wight = wight;
        this.pay = pay;
    }
    calculator(){
        let total: number = this.wight*0.005 
    }
}
class StandardShipping extends ShippingCalculator{
    constructor(private des: number = 1.005){
        super(des)
    }
    override calculator(): void {
        let total: number = this.pay+this.wight*this.des
    }

}
class ExpressShipping extends ShippingCalculator{
    constructor(private espressspeed: number = 2){
        super(espressspeed)
    }
    override calculator(): void {
        let total: number = this.pay+this.wight*20*this.espressspeed
    }
}
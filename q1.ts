export{}
interface PaymentMethod {
    howtopay: string = 'การชำระเงินด้วยบัตรเครดิต'
    money: number
    pay(money: number): number{
    }
}
class paymentcrad implements PaymentMethod{
    id: number
    constructor(id: number){
        this.id = id;
    }
    pay1(): void{
        console.log(`ชำระเงิน ${this.pay} บาท โดยใช้บัตรเครดิตหมายเลข ${this.id} `)
    }
}
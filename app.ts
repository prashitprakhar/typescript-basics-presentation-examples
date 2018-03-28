//Using more than one generic types
class GenericConcat<T extends number | string, U extends number | string>{
    empName: T;
    level: U;
    concatValue(): string{
        return this.empName+' '+this.level;
    }
}

const concatObj = new GenericConcat<string, number>();
concatObj.empName='Rahul';
concatObj.level=20;
console.log(concatObj.concatValue());
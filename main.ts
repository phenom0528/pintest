/**
 * Functions are mapped to blocks using various macros 
 * in comments starting with % (e.g., //% block).
 * The most important macro "block" specifies that a
 * block should be generated for a **exported** function.
 */
//% block="pintest" color="#55278D"
namespace pintest {

    //weight=20
    //% blockId=digital_wirtepin
    //% block="digital write pin |%tname|to|%tvalue|"
    //%tname.fieldEditor="gridpicker"
    //%tname.fieldOptuions.columns=3
    //%tvalue.defl=0
    //%tvalue.min=0
    //%tvalue.max=0
export function digital_wirtepin(tname:Digitalpin, tvalue: number ): void{ 
    pins.digitalWritePin(tname,tavlue)
}

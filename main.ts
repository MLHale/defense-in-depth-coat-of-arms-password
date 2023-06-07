radio.onReceivedNumber(function (receivedNumber) {
    console.log("received: " + ("" + ("" + ("" + ("" + ("" + ("" + receivedNumber)))))))
console.log('reset function variables')
result = ""
    result2 = ""
    result3 = ""
    coatOfArms = paddBinary(integerToBinary(receivedNumber))
    console.log("converting back to binary...")
console.log(coatOfArms)
console.log("checking against stored password: " + checkpassword)
if (checkpassword == coatOfArms) {
        console.log("passwords match!")
if (coatOfArms.charAt(0) == "1") {
            led.plot(0, 0)
        }
        if (coatOfArms.charAt(1) == "1") {
            led.plot(1, 0)
        }
        if (coatOfArms.charAt(2) == "1") {
            led.plot(2, 0)
        }
        if (coatOfArms.charAt(3) == "1") {
            led.plot(3, 0)
        }
        if (coatOfArms.charAt(4) == "1") {
            led.plot(4, 0)
        }
        if (coatOfArms.charAt(5) == "1") {
            led.plot(0, 1)
        }
        if (coatOfArms.charAt(6) == "1") {
            led.plot(1, 1)
        }
        if (coatOfArms.charAt(7) == "1") {
            led.plot(2, 1)
        }
        if (coatOfArms.charAt(8) == "1") {
            led.plot(3, 1)
        }
        if (coatOfArms.charAt(9) == "1") {
            led.plot(4, 1)
        }
        if (coatOfArms.charAt(10) == "1") {
            led.plot(0, 2)
        }
        if (coatOfArms.charAt(11) == "1") {
            led.plot(1, 2)
        }
        if (coatOfArms.charAt(12) == "1") {
            led.plot(2, 2)
        }
        if (coatOfArms.charAt(13) == "1") {
            led.plot(3, 2)
        }
        if (coatOfArms.charAt(14) == "1") {
            led.plot(4, 2)
        }
        if (coatOfArms.charAt(15) == "1") {
            led.plot(0, 3)
        }
        if (coatOfArms.charAt(16) == "1") {
            led.plot(1, 3)
        }
        if (coatOfArms.charAt(17) == "1") {
            led.plot(2, 3)
        }
        if (coatOfArms.charAt(18) == "1") {
            led.plot(3, 3)
        }
        if (coatOfArms.charAt(19) == "1") {
            led.plot(4, 3)
        }
        if (coatOfArms.charAt(20) == "1") {
            led.plot(0, 4)
        }
        if (coatOfArms.charAt(21) == "1") {
            led.plot(1, 4)
        }
        if (coatOfArms.charAt(22) == "1") {
            led.plot(2, 4)
        }
        if (coatOfArms.charAt(23) == "1") {
            led.plot(3, 4)
        }
        if (coatOfArms.charAt(24) == "1") {
            led.plot(4, 4)
        }
        control.waitMicros(2000000)
        basic.showIcon(IconNames.Yes)
    } else {
        console.log("passwords do not match!")
basic.showIcon(IconNames.No)
    }
    control.waitMicros(3000000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
function integerToBinary (num: number): any {
    if (num >= 1) {
        result2 = integerToBinary(Math.idiv(num, 2))
    }
    // print(result + str(num%2))
    return "" + result2 + ("" + num % 2)
}
input.onButtonPressed(Button.A, function () {
    coatOfArms = "" + row1 + row2 + row3 + row4 + row5
    let bitstringAsInt = parseInt(coatOfArms, 2)
console.log("converting: " + coatOfArms + " to integer.")
console.log("sending: " + ("" + ("" + ("" + ("" + ("" + ("" + bitstringAsInt)))))))
radio.sendNumber(bitstringAsInt)
})
input.onButtonPressed(Button.B, function () {
    if (coatOfArms.charAt(0) == "1") {
        led.plot(0, 0)
    }
    if (coatOfArms.charAt(1) == "1") {
        led.plot(1, 0)
    }
    if (coatOfArms.charAt(2) == "1") {
        led.plot(2, 0)
    }
    if (coatOfArms.charAt(3) == "1") {
        led.plot(3, 0)
    }
    if (coatOfArms.charAt(4) == "1") {
        led.plot(4, 0)
    }
    if (coatOfArms.charAt(5) == "1") {
        led.plot(0, 1)
    }
    if (coatOfArms.charAt(6) == "1") {
        led.plot(1, 1)
    }
    if (coatOfArms.charAt(7) == "1") {
        led.plot(2, 1)
    }
    if (coatOfArms.charAt(8) == "1") {
        led.plot(3, 1)
    }
    if (coatOfArms.charAt(9) == "1") {
        led.plot(4, 1)
    }
    if (coatOfArms.charAt(10) == "1") {
        led.plot(0, 2)
    }
    if (coatOfArms.charAt(11) == "1") {
        led.plot(1, 2)
    }
    if (coatOfArms.charAt(12) == "1") {
        led.plot(2, 2)
    }
    if (coatOfArms.charAt(13) == "1") {
        led.plot(3, 2)
    }
    if (coatOfArms.charAt(14) == "1") {
        led.plot(4, 2)
    }
    if (coatOfArms.charAt(15) == "1") {
        led.plot(0, 3)
    }
    if (coatOfArms.charAt(16) == "1") {
        led.plot(1, 3)
    }
    if (coatOfArms.charAt(17) == "1") {
        led.plot(2, 3)
    }
    if (coatOfArms.charAt(18) == "1") {
        led.plot(3, 3)
    }
    if (coatOfArms.charAt(19) == "1") {
        led.plot(4, 3)
    }
    if (coatOfArms.charAt(20) == "1") {
        led.plot(0, 4)
    }
    if (coatOfArms.charAt(21) == "1") {
        led.plot(1, 4)
    }
    if (coatOfArms.charAt(22) == "1") {
        led.plot(2, 4)
    }
    if (coatOfArms.charAt(23) == "1") {
        led.plot(3, 4)
    }
    if (coatOfArms.charAt(24) == "1") {
        led.plot(4, 4)
    }
    control.waitMicros(4000000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
function paddBinary (binarynumber: string) {
    let index: number;
console.log("length:" + ("" + ("" + ("" + ("" + ("" + result3.length))))))
if (binarynumber.length < 25) {
        index = 0
        while (index <= 25 - binarynumber.length - 1) {
            console.log("index: " + ("" + ("" + ("" + ("" + ("" + index))))))
result3 = "" + result3 + "0"
            console.log(result3)
index += 1
        }
    }
    return "" + result3 + binarynumber
}
let result2 = ""
let result = ""
let row5 = ""
let row4 = ""
let row3 = ""
let row2 = ""
let row1 = ""
// Set this to your group number
radio.setGroup(1)
// Set this to your group number
radio.setFrequencyBand(1)
let result3 = ""
let coatOfArms = ""
let checkpassword = ""
coatOfArms = ""
// Set your accepted coat of arms password here
checkpassword = "0000100001000010000100001"
// This is the first row of the coat of arms password you want to test against the accepted one
row1 = "00001"
// This is the second row of the test password
row2 = "00001"
// This is the third row of the test password
row3 = "00001"
// This is the fourth row of the test password
row4 = "00001"
// This is the fifth row of the test password
row5 = "00001"

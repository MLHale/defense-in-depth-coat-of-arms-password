def on_received_number(receivedNumber):
    global coatOfArms
    print("received: " + ("" + ("" + ("" + ("" + ("" + str(receivedNumber)))))))
    coatOfArms = paddBinary(integerToBinary(receivedNumber))
    print("converting back to binary...")
    print(coatOfArms)
    print("checking against stored password: " + checkpassword)
    if checkpassword == coatOfArms:
        print("passwords match!")
        if coatOfArms.char_at(0) == "1":
            led.plot(0, 0)
        if coatOfArms.char_at(1) == "1":
            led.plot(1, 0)
        if coatOfArms.char_at(2) == "1":
            led.plot(2, 0)
        if coatOfArms.char_at(3) == "1":
            led.plot(3, 0)
        if coatOfArms.char_at(4) == "1":
            led.plot(4, 0)
        if coatOfArms.char_at(5) == "1":
            led.plot(0, 1)
        if coatOfArms.char_at(6) == "1":
            led.plot(1, 1)
        if coatOfArms.char_at(7) == "1":
            led.plot(2, 1)
        if coatOfArms.char_at(8) == "1":
            led.plot(3, 1)
        if coatOfArms.char_at(9) == "1":
            led.plot(4, 1)
        if coatOfArms.char_at(10) == "1":
            led.plot(0, 2)
        if coatOfArms.char_at(11) == "1":
            led.plot(1, 2)
        if coatOfArms.char_at(12) == "1":
            led.plot(2, 2)
        if coatOfArms.char_at(13) == "1":
            led.plot(3, 2)
        if coatOfArms.char_at(14) == "1":
            led.plot(4, 2)
        if coatOfArms.char_at(15) == "1":
            led.plot(0, 3)
        if coatOfArms.char_at(16) == "1":
            led.plot(1, 3)
        if coatOfArms.char_at(17) == "1":
            led.plot(2, 3)
        if coatOfArms.char_at(18) == "1":
            led.plot(3, 3)
        if coatOfArms.char_at(19) == "1":
            led.plot(4, 3)
        if coatOfArms.char_at(20) == "1":
            led.plot(0, 4)
        if coatOfArms.char_at(21) == "1":
            led.plot(1, 4)
        if coatOfArms.char_at(22) == "1":
            led.plot(2, 4)
        if coatOfArms.char_at(23) == "1":
            led.plot(3, 4)
        if coatOfArms.char_at(24) == "1":
            led.plot(4, 4)
        control.wait_micros(2000000)
        basic.show_icon(IconNames.YES)         
    else:
        print("passwords do not match!")
        basic.show_icon(IconNames.NO) 
    control.wait_micros(3000000)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
radio.on_received_number(on_received_number)

def integerToBinary(num: number):
    global result2
    if num >= 1:
        result2 = integerToBinary(Math.idiv(num, 2))
    # print(result + str(num%2))
    return "" + result2 + ("" + str(num % 2))

def on_button_pressed_a():
    bitstringAsInt = int(coatOfArms, 2)
    print("converting: " + coatOfArms + " to integer.")
    print("sending: " + ("" + ("" + ("" + ("" + ("" + str(bitstringAsInt)))))))
    radio.send_number(bitstringAsInt)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if coatOfArms.char_at(0) == "1":
        led.plot(0, 0)
    if coatOfArms.char_at(1) == "1":
        led.plot(1, 0)
    if coatOfArms.char_at(2) == "1":
        led.plot(2, 0)
    if coatOfArms.char_at(3) == "1":
        led.plot(3, 0)
    if coatOfArms.char_at(4) == "1":
        led.plot(4, 0)
    if coatOfArms.char_at(5) == "1":
        led.plot(0, 1)
    if coatOfArms.char_at(6) == "1":
        led.plot(1, 1)
    if coatOfArms.char_at(7) == "1":
        led.plot(2, 1)
    if coatOfArms.char_at(8) == "1":
        led.plot(3, 1)
    if coatOfArms.char_at(9) == "1":
        led.plot(4, 1)
    if coatOfArms.char_at(10) == "1":
        led.plot(0, 2)
    if coatOfArms.char_at(11) == "1":
        led.plot(1, 2)
    if coatOfArms.char_at(12) == "1":
        led.plot(2, 2)
    if coatOfArms.char_at(13) == "1":
        led.plot(3, 2)
    if coatOfArms.char_at(14) == "1":
        led.plot(4, 2)
    if coatOfArms.char_at(15) == "1":
        led.plot(0, 3)
    if coatOfArms.char_at(16) == "1":
        led.plot(1, 3)
    if coatOfArms.char_at(17) == "1":
        led.plot(2, 3)
    if coatOfArms.char_at(18) == "1":
        led.plot(3, 3)
    if coatOfArms.char_at(19) == "1":
        led.plot(4, 3)
    if coatOfArms.char_at(20) == "1":
        led.plot(0, 4)
    if coatOfArms.char_at(21) == "1":
        led.plot(1, 4)
    if coatOfArms.char_at(22) == "1":
        led.plot(2, 4)
    if coatOfArms.char_at(23) == "1":
        led.plot(3, 4)
    if coatOfArms.char_at(24) == "1":
        led.plot(4, 4)
    control.wait_micros(4000000)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def paddBinary(binarynumber: str):
    global result
    print("length:" + ("" + ("" + ("" + ("" + str(len(result)))))))
    if len(binarynumber) < 25:
        index = 0
        while index <= 25 - len(binarynumber) - 1:
            print("index: " + ("" + ("" + ("" + ("" + str(index))))))
            result = "" + result + "0"
            print(result)
            index += 1
    return "" + result + binarynumber
result2 = ""
result = ""
coatOfArms = ""
checkpassword = ""
coatOfArms = ""
checkpassword = "0000100001000010000100001"
row1 = "00001"
row2 = "00001"
row3 = "00001"
row4 = "00001"
row5 = "00001"
coatOfArms = "" + row1 + row2 + row3 + row4 + row5
package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.util.Range;

/**
 * Created by rrnan on 10/10/2016.
 */

public class MyFirstArcadeDrive extends OpMode {

    DcMotor leftMotor;
    DcMotor rightMotor;

    @Override
    public void init() {
        //the motor variables in the code are assigned to actual motors on the robot via the hardwareMap
         leftMotor = hardwareMap.dcMotor.get("left_drive");
        rightMotor = hardwareMap.dcMotor.get("right_drive");
        /*the right motor would start going backwards since it is pretty much the left motor flipped
        *around so its direction is REVERSE
        */
        rightMotor.setDirection(DcMotor.Direction.REVERSE);
    }

    @Override
    public void loop() {
        /* the variable "xValue" takes the value from the left joystick when it is moved on the x axis
        (right to left) and the variable "yValue" takes the value from the left joystick when it is
        moved on the y axis(up and down)
         */
        float xValue = gamepad1.left_stick_x;
        float yValue = -gamepad1.left_stick_y;
        /* the values of both "xValue" and "yValue" are then added or subtracted accordingly and the end
        sum or difference is then assigned to the varibles leftPower and rightPower
         */
        float leftPower = yValue + xValue;
        float rightPower = yValue - xValue;
        /* the range of the powers that can be given to the variables leftPower and rightPower are limited
        to the range java allows, -1 - 1
         */
        leftPower = Range.clip(leftPower, -1, 1);
        rightPower = Range.clip(rightPower, -1, 1);
        /* the value assigned varibles, leftPower and rightPower, are now set as the power to the leftMotor
        and rightMotor accordingly
         */
        leftMotor.setPower(leftPower);
        rightMotor.setPower(rightPower);
    }
}

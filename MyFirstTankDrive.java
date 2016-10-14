package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.hardware.DcMotor;

/**
 * Created by rrnan on 10/10/2016.
 */

public class MyFirstTankDrive extends OpMode {

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
        /* the gamepad 1 variable from OpMode is inplace for the gamepad in reality and reads the value
         * when the joysticks are pushed on the y axis(up and down) and gives that value to the variables
         * leftY and rightY which are decimals(floats)
         */
        float leftY = -gamepad1.left_stick_y;
        float rightY = -gamepad1.right_stick_y;
        /* the give value from the gamepad  is the set as power for the left and right motors
         */
        leftMotor.setPower(leftY);
        rightMotor.setPower(rightY);
    }

}

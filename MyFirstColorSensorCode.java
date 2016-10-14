package org.firstinspires.ftc.teamcode;

import android.graphics.Color;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.hardware.ColorSensor;

/**
 * Created by rrnan on 10/11/2016.
 */

public class MyFirstColorSensorCode extends OpMode {
    private ColorSensor coloRsensoR;

    public void init() {
        coloRsensoR = hardwareMap.colorSensor.get("mr");
        coloRsensoR.enableLed(true);
    }

    public void loop() {
    float colorProperties[] = {0f,0f,0f};
    int color = Color.argb(coloRsensoR.alpha(),coloRsensoR.red(),coloRsensoR.blue(),coloRsensoR.green());
    float blue = coloRsensoR.blue();
    float red = coloRsensoR.red();
        float green = coloRsensoR.green();

        if(blue > red){
            telemetry.addData("Color","is","BLUE");
        }
        else if(blue < red){
            telemetry.addData("Color","is","RED");
        }

        coloRsensoR.enableLed(false);
        Color.RGBToHSV(coloRsensoR.red(),coloRsensoR.green(),coloRsensoR.blue(),colorProperties);
        telemetry.addData("Hue","=",colorProperties[0]);
        telemetry.addData("Saturation","=",colorProperties[1]);
        telemetry.addData("Value","=",colorProperties[2]);
        telemetry.addData("Blue","Value","=",coloRsensoR.blue());
        telemetry.addData("Red","Value","=",coloRsensoR.red());
        telemetry.addData("Green","Value","=",coloRsensoR.green());
        updateTelemetry(telemetry);

    }


}

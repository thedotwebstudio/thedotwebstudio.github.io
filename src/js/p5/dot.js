import React, { Component } from 'react';
import PropTypes from 'prop-types';
import p5 from "p5";
import { hexagon, hexagonLine, squareLine } from './helper.js'
import dat from "dat.gui";
import Stats from "stats-js";
import { Vector } from "p5"


// http://wiseslang.com/
// https://www.jeansforrefugees.com/home/victoria-beckham
class Dot extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p5) => {

        // Variables scoped within p5
        const WIDTH = p5.windowWidth;
        const HEIGHT = p5.windowHeight;

        // make library globally available
        window.p5 = p5;

        var font, fontS;
        var vehicles = [];

        //Random Color select
        //const PALLATE = ["#1be7ff", "#f8333c", "#8f2d56", "#6eeb83", "#e4ff1a"];
        //const PALLATE = ["#333232", "#4c5454", "#f3a712", "#db2b39", "#447604"];
        //const PALLATE = ["#30bced", "#d16014", "#e3e4db", "#23395b", "#050401"];
        //const PALLATE = ["#26547c", "#ef476f", "#ffd166", "#23af82", "#fcfcfc"];
        //const PALLATE = ["#900c3f", "#c70039", "#ffd166", "#ff5733", "#ffc300"];
        //const PALLATE = ["#a0006b", "#ffb533", "#f95c41", "#9ec630", "#ff959b"];
        const PALLATE = ["#fc0015", "#023ba8", "#cccccc", "#dddddd", "#000000"];

        //Pestal color
        //const PALLATE = ['#E8614F', '#F3F2DB', '#79C3A7', '#668065', '#4B3331'];

        let TEXTURE;
        let BG;

        function preload() {
            fontS = loadFont(F);
            font = loadFont(F);
        }
        // Setup function
        // ======================================
        p5.setup = () => {
            p5.createCanvas(WIDTH, HEIGHT);
            // p5.angleMode(DEGREES);
            TEXTURE = p5.createGraphics(WIDTH, HEIGHT);
            let bgNum = p5.int(p5.random(PALLATE.length));
            let BG = PALLATE[bgNum];
            p5.background(BG);
            PALLATE.splice(bgNum, 1);
            //Render Texture
            createTexture()
            //LOOP
            for (var i = 0; i < 100; i++) {
                var vehicle = new Vehicle(p5.random(0, WIDTH), p5.random(0, HEIGHT));
                vehicles.push(vehicle);
            }
        };
        function createTexture() {
            for (let i = 0; i < 100000; i = i + 1) {
                p5.stroke(255, 15);
                let px = p5.random(WIDTH);
                let py = p5.random(HEIGHT);
                p5.point(px, py);
            }
        }
        // Draw function
        // ======================================
        p5.draw = () => {
            p5.background(0);
            // background(255, 245, 232);
            for (var i = 0; i < vehicles.length; i++) {
                var v = vehicles[i];
                v.update();
                v.show();
                v.behaviors();
            }
        }

        class Vehicle {
            constructor(x, y) {
                this.pos = p5.createVector(p5.random(500), p5.random(500));
                this.target = p5.createVector(x, y);
                this.vel = p5.constructor.Vector.random2D();
                this.acc = p5.createVector();
                this.r = 8;
                this.maxSpeed = 10;
                this.maxForce = 1;
            }
            show() {
                p5.stroke(255);
                p5.strokeWeight(1);
                p5.point(this.pos.x, this.pos.y);
                // vertex(this.pos.x, this.pos.y);
            }
            behaviors() {
                var arrive = this.arrive(this.target);
                var mouse = p5.createVector(p5.mouseX, p5.mouseY);
                var flee = this.flee(mouse);
                arrive.mult(1);
                flee.mult(5)
                this.applyForce(arrive);
                this.applyForce(flee);
            }
            applyForce(f) {
                this.acc.add(f);
            }
            arrive(target) {
                var desired = p5.constructor.Vector.sub(target, this.pos);
                var d = desired.mag();
                var speed = this.maxSpeed;
                if (d < 100) {
                    speed = p5.map(d, 0, 100, 0, this.maxSpeed)
                }
                desired.setMag(speed);
                var steer = p5.constructor.Vector.sub(desired, this.vel);
                steer.limit(this.maxForce)
                return steer;
            }
            flee(target) {
                var desired = p5.constructor.Vector.sub(target, this.pos);
                var d = desired.mag();
                if (d < 50) {
                    desired.setMag(this.maxSpeed);
                    desired.mult(-1);
                    var steer = p5.constructor.Vector.sub(desired, this.vel);
                    steer.limit(this.maxForce)
                    return steer;
                } else {
                    return p5.createVector(0, 0);
                }
            }
            update() {
                this.pos.add(this.vel);
                this.vel.add(this.acc);
                this.acc.mult(0);
            }
        }
        //Save Image
        function keyReleased() {
            //Only year-month-date
            var day = new Date().toISOString().split('T')[0];
            //Only year-month-date-time
            var timestamp = new Date().toISOString();
            if (key == 's' || key == 'S') saveCanvas(timestamp, 'png');
            if (keyCode == DELETE || keyCode == BACKSPACE) clear();
        }

    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            <div ref={this.myRef}></div>
        )
    }
}
export default Dot;
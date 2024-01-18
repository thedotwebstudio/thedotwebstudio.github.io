import React, { Component } from 'react';
import PropTypes from 'prop-types';
import p5 from "p5";
import { hexagon, hexagonLine, squareLine } from './helper.js'
import dat from "dat.gui";
import Stats from "stats-js";
// http://wiseslang.com/
// https://www.jeansforrefugees.com/home/victoria-beckham
class Sketch extends React.Component {
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

        //Random Color select
        //const PALLATE = ["#1be7ff", "#f8333c", "#8f2d56", "#6eeb83", "#e4ff1a"];
        //const PALLATE = ["#333232", "#4c5454", "#f3a712", "#db2b39", "#447604"];
        //const PALLATE = ["#30bced", "#d16014", "#e3e4db", "#23395b", "#050401"];
        //const PALLATE = ["#26547c", "#ef476f", "#ffd166", "#23af82", "#fcfcfc"];
        const PALLATE = ["#900c3f", "#c70039", "#ffd166", "#ff5733", "#ffc300"];
        //const PALLATE = ["#a0006b", "#ffb533", "#f95c41", "#9ec630", "#ff959b"];
        // const PALLATE = ["#fc0015", "#023ba8", "#cccccc", "#dddddd", "#000000"];

        //Pestal color
        //const PALLATE = ['#E8614F', '#F3F2DB', '#79C3A7', '#668065', '#4B3331'];

        let TEXTURE;
        let BG;
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
            let cellNum = p5.int(p5.random(20, 30));
            let offset = 0; //60px;
            let cell = (WIDTH - offset * 10) / cellNum; // if cellNum = 3 cell=160

            for (let j = 0; j < HEIGHT / cellNum; j = j + 1) {
                for (let i = 0; i < WIDTH / cellNum; i = i + 1) {
                    let x = i * cell + offset + cell / 2;
                    let y = j * cell + offset + cell / 2;
                    let d = cell * 0.25;

                    // Random color and stroke
                    let c = p5.random(PALLATE);
                    if (p5.random(100) < 50) {
                        p5.fill(c);
                        p5.noStroke();
                    } else {
                        p5.stroke(c);
                        p5.noFill();
                    }
                    p5.push();
                    p5.translate(x, y);
                    p5.ellipse(0, 0, d / 2);
                    p5.pop();
                }
            }
            //Render Texture
            createTexture()
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
        p5.draw = () => { }


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
export default Sketch;
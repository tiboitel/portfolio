"use strict"

import { gsap } from "gsap";

class CursorComponent {

    constructor() {
        document.body.addEventListener('mousemove', this.onMouseMoveEventCallback);
        document.body.addEventListener('mouseenter', this.onMouseMoveEventCallback);
        document.body.addEventListener('mouseleave', this.onMouseMoveEventCallback);
    }

    private onMouseMoveEventCallback(event:MouseEvent) {
        const outerCircle = document.getElementById('outerCircle') as HTMLElement;
        const innerCircle = document.getElementById('innerCircle') as HTMLElement;
        const outerCircleX = event.pageX - 15;
        const outerCircleY = event.pageY - 15;
        const innerCircleX = event.pageX - 5;
        const innerCircleY = event.pageY - 7;

        /* gsap.to(outerCircle, {
                distance: 0.4,
                x: outerCircleX,
                y: outerCircleY,
                ease: Power1.easeOut,
        })*/
    }

    private onMouseEnterEventCallback(event:MouseEvent) {
    
    }

    private onMouseLeaveEventCallback(event:MouseEvent) {

    }
}
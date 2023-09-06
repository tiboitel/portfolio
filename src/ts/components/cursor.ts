"use strict"

class CursorComponent {
    private cursor: HTMLElement | null;
    private hoverables: HTMLCollectionOf<Element> | null;
    private hasScale: boolean = false; 

    constructor() {
        this.cursor = null;
        this.hoverables = document.getElementsByClassName('hoverable');

        for (let i = 0; i < this.hoverables.length; i++) {
            let hoverable:HTMLElement = this.hoverables.item(i) as HTMLElement;

            hoverable.addEventListener('mouseenter', this.onMouseEnterEventCallback.bind(this));
            hoverable.addEventListener('mouseleave', this.onMouseLeaveEventCallback.bind(this));
        }

        document.body.addEventListener('mousemove', this.onMouseMoveEventCallback.bind(this));
    }

    private onMouseMoveEventCallback(event:MouseEvent) {
        this.cursor = document.getElementById('cursor') as HTMLElement;

        if (this.cursor === null)
            return ;
        let cursorOffsetX = event.clientX + window.scrollX;
        let cursorOffsetY = event.clientY + window.scrollY;

        if (this.hasScale === true) {
            cursorOffsetX -= 8;
            cursorOffsetY -= 8;
        }

        this.cursor.style.setProperty('left', cursorOffsetX + "px");
        this.cursor.style.setProperty('top', cursorOffsetY + "px");
    }

    private onMouseEnterEventCallback(event:MouseEvent) {
        this.cursor = document.getElementById('cursor') as HTMLElement;

        this.hasScale = true;
        this.cursor.style.setProperty('transform', 'scale(4)');
    }

    private onMouseLeaveEventCallback(event:MouseEvent) {
        this.cursor = document.getElementById('cursor') as HTMLElement;


        this.cursor.style.setProperty('transform', 'scale(1)');
    }
}
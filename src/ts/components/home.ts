"use strict";

class HomeComponent {
    constructor() {
        this.initializeSections();
        this.setNavigationLinksCallbacks();
    }

    private initializeSections(): void {
        const sections = ['contact', 'projects', 'about'];

        sections.forEach((sectionName) => this.setSectionVisible(sectionName, false));
        this.setSectionVisible('about', true);
    }

    private setSectionVisible(sectionName: string, isVisible: boolean): void {
        const section = document.getElementById(sectionName);

        if (section !== null) {
            section.hidden = !isVisible;
        }
    }

    private setNavigationLinksCallbacks() {
        const links = {
            'link-about': 'about',
            'link-projects': 'projects',
            'link-contact': 'contact',
            'button-contact': 'contact'
        };

        for (const [linkId, sectionName] of Object.entries(links)) {
            const linkElement = document.querySelector(`a[data-id="${linkId}"]`);
            
            if (linkElement) {
                linkElement.addEventListener('click', () => this.onNavigationLinkClicked(sectionName));
            }
        }
    }

    private onNavigationLinkClicked(sectionName: string) {
        const sections = ['contact', 'projects', 'about'];

        sections.forEach((value) => this.setSectionVisible(value, value === sectionName));
    }
}

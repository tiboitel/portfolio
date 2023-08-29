"use strict"

class HomeComponent {
    constructor() {
        this.setNavigationLinksCallbacks();
    }

    private setSectionVisible(sectionName: string, isVisible: boolean): void {
        const section = document.getElementById(sectionName);
    
        if (section !== null) {
            if (isVisible) {
                section.style.visibility = 'visible';
                section.style.display = 'initial';
            } else {
                section.style.visibility = 'hidden';
                section.style.display = 'none';
            }
        }
    }

    private setNavigationLinksCallbacks() {
        const aboutLink = document.querySelector('a[data-id="link-about"]');
        const projectsLink = document.querySelector('a[data-id="link-projects"]');
        const contact = document.querySelector('a[data-id="link-contact"]');

        if (aboutLink)
            aboutLink.addEventListener('click', () => this.onNavigationLinkClicked('about'));
        if (projectsLink)
            projectsLink.addEventListener('click', () => this.onNavigationLinkClicked('projects'));
        if (contact)
            contact.addEventListener('click', () => this.onNavigationLinkClicked('contact'));
    }

    private onNavigationLinkClicked(sectionName :string) {
        const sections = ['about', 'projects', 'contact'];

        sections.forEach((value) => {
            if (value == sectionName) {
                this.setSectionVisible(value, true);
            } else {
                this.setSectionVisible(value, false);
            }
        });
    }
}
"use strict"

class HomeComponent {
    constructor() {
		this.setSectionVisible('contact', false);
		this.setSectionVisible('projects', false);
        this.setNavigationLinksCallbacks();
    }

    private setSectionVisible(sectionName: string, isVisible: boolean): void {
        const section = document.getElementById(sectionName) as HTMLElement;

        if (section !== null) {
            if (isVisible) {
                section.style.visibility = 'visible';
                section.style.display = 'block';
            } else {
                section.style.visibility = 'hidden';
                section.style.display = 'none';
            }
        }
    }

    private setNavigationLinksCallbacks() {
        const aboutLink = document.querySelector('a[data-id="link-about"]');
        const projectsLink = document.querySelector('a[data-id="link-projects"]');
        const contactLink = document.querySelector('a[data-id="link-contact"]');
        const contactButton = document.querySelector('a[data-id="button-contact"]');


        if (aboutLink)
            aboutLink.addEventListener('click', () => this.onNavigationLinkClicked('about'));
        if (projectsLink)
            projectsLink.addEventListener('click', () => this.onNavigationLinkClicked('projects'));
        if (contactLink)
            contactLink.addEventListener('click', () => this.onNavigationLinkClicked('contact'));
        if (contactButton)
            contactButton.addEventListener('click', () => this.onNavigationLinkClicked('contact'));
    }

    private onNavigationLinkClicked(sectionName :string) {
        const sections = ['about', 'projects', 'contact'];

        sections.forEach(value => this.setSectionVisible(value, value === sectionName));
    }
}
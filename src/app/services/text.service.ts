import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  getHeroTexts() {
    return {
      buttonText: { de: 'Kontakt aufnehmen', en: 'Get in Touch' },
      helloText: { de: 'Hallo Welt', en: 'Hello World' }
    };
  }

  getContactTexts() {
    return {
      contactLabel: { de: 'KONTAKTIERE MICH', en: 'CONTACT ME' },
      contactTitle: { de: 'Bereit zusammenzuarbeiten?', en: 'Ready to work together?' },
      contactDescription1: {
        de: 'Ermutige Leute, dich zu kontaktieren und beschreibe, an welcher Rolle du interessiert bist.',
        en: 'Encourage people to contact you and describe what role you are interested in.'
      },
      contactDescription2: {
        de: 'Zeige Interesse daran, zu einem neuen Projekt beizutragen.',
        en: 'Show interest in contributing to a new project.'
      },
      nameLabel: { de: 'Wie ist dein Name?', en: 'What\'s your name?' },
      namePlaceholder: { de: 'Dein Name steht hier', en: 'Your name goes here' },
      emailLabel: { de: 'Wie ist deine E-Mail?', en: 'What\'s your email?' },
      emailPlaceholder: { de: 'deineemail@email.com', en: 'youremail@email.com' },
      messageLabel: { de: 'Wie kann ich dir helfen?', en: 'How can I help you?' },
      messagePlaceholder: { de: 'Hallo Kay, ich bin interessiert an...', en: 'Hello Kay, I am interested in...' },
      privacyText: {
        de: 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.',
        en: 'I\'ve read the privacy policy and agree to the processing of my data.'
      },
      privacyLink: { de: 'Datenschutzerklärung', en: 'privacy policy' },
      submitButton: { de: 'Senden', en: 'Send' },
      successMessage: { de: 'Vielen Dank für deine Nachricht!', en: 'Thank you for your message!' },
      errorMessage: { de: 'Bitte fülle alle Felder aus.', en: 'Please fill in all fields.' },
      copyrightText: { de: '© Kay Dietrich 2025', en: '© Kay Dietrich 2025' },
      legalNotice: { de: 'Impressum', en: 'Legal Notice' }
    };
  }

  getProjectTexts() {
    return {
      craftLabel: { de: 'MEINE ARBEIT', en: 'MY CRAFT' },
      projectsTitle: { de: 'Projekte', en: 'Projects' },
      titleDescription: {
        de: 'Ermutige Menschen, einen Blick zu werfen und mit deinen Projekten zu interagieren. Hebe deinen Ansatz zur Erstellung responsiver, benutzerfreundlicher Projekte mit effizientem Code hervor.',
        en: 'Encourage people to take a look and interact with your projects. Highlight your approach to creating responsive, user-friendly projects with efficient code.'
      },
      joinTitle: { de: 'Join', en: 'Join' },
      joinDescription: {
        de: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
        en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
      },
      powerTitle: { de: 'Power of the Beast', en: 'Power of the Beast' },
      powerDescription: {
        de: 'Spring-, Lauf- und Wurfspiel basierend auf objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
        en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
      },
      dabubbleTitle: { de: 'DABubble', en: 'DABubble' },
      dabubbleDescription: {
        de: 'Diese App ist eine Slack-Clone-App. Sie revolutioniert die Teamkommunikation und -zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeit-Messaging und nahtlosem Dateiaustausch für erhöhte Produktivität.',
        en: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and seamless file sharing for enhanced productivity.'
      }
    };
  }

  getProjectDetailTexts() {
    return {
      description: { de: 'Beschreibung', en: 'Description' },
      implementationDetails: { de: 'Implementierungsdetails', en: 'Implementation Details' },
      duration: { de: 'Dauer', en: 'Duration' },
      goBack: { de: 'Zurück', en: 'Go Back' },
      nextProject: { de: 'Nächstes Projekt', en: 'Next Project' },
      github: { de: 'GitHub', en: 'GitHub' },
      liveTest: { de: 'Live Test', en: 'Live Test' }
    };
  }

  getAboutTexts() {
    return {
      whoIs: { de: 'WER IST KAY?', en: "WHO'S KAY?" },
      aboutMe: { de: 'Über mich', en: 'About me' },
      description: {
        de: 'Hey! Ich bin Kay – ein passionierter Full-Stack-Developer, der 2022 seinen Weg über eine FAIE-Umschulung und die Bundeswehr in die faszinierende Welt der Softwareentwicklung gefunden hat.',
        en: "Hey there! I'm Kay – a passionate Full-Stack Developer who discovered the fascinating world of software development in 2022 through a FAIE retraining program and the German Armed Forces."
      },
      collaboration: {
        de: 'Ich bin aufgeschlossen und lernbegierig – bereit, neue Projekte anzugehen.',
        en: 'I am open-minded and eager to learn – ready to tackle new projects.'
      },
      button: { de: 'Lass uns reden', en: "Let's talk" }
    };
  }

  getInfoStickerTexts() {
    return {
      basedIn: { de: 'Ansässig in Lüneburg', en: 'Based in Lüneburg' },
      relocate: { de: 'Umzug? NEIN!', en: 'relocate? NO!' },
      remote: { de: 'Offen für Remote-Arbeit', en: 'Open to work remote' }
    };
  }


}
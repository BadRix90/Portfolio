import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  getNavigationTexts() {
    return {
      aboutMe: { de: 'Über mich', en: 'About me' },
      skills: { de: 'Fähigkeiten', en: 'Skills' },
      projects: { de: 'Projekte', en: 'Projects' },
      contact: { de: 'Kontakt', en: 'Contact' }
    };
  }

  getHeroTexts() {
    return {
      buttonText: { de: 'Schreib mir', en: 'Contact me' },
      helloText: { de: 'Moin Welt', en: 'Hello World' }
    };
  }

  getContactTexts() {
    return {
      contactLabel: { de: 'KONTAKTIERE MICH', en: 'CONTACT ME' },
      contactTitle: { de: 'Bereit zusammenzuarbeiten?', en: 'Ready to work together?' },
      contactDescription1: {
        de: 'Ich suche eine Entwicklerstelle als Frontend-Developer, Anwendungsentwickler oder auch als Projektmanager.',
        en: 'I am looking for a developer position as Frontend Developer, Application Developer or Project Manager.'
      },
      contactDescription2: {
        de: 'Mein Fokus liegt auf strukturiertem Code und der Verwendung modernster Technologien.',
        en: 'My focus is on structured code and using cutting-edge technologies.'
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
        de: 'Entdecke meine Projekte und sieh, wie ich strukturierten, modernen Code mit aktuellen Technologien und SEO-optimierten Ansätzen entwickle.',
        en: 'Discover my projects and see how I develop structured, modern code with current technologies and SEO-optimized approaches.'
      },
      joinTitle: { de: 'Join', en: 'Join' },
      joinDescription: {
        de: 'Kollaborativer Task-Manager nach Kanban-Prinzip. Features: Drag & Drop, Benutzerverteilung, Aufgaben-Kategorisierung und Team-Dashboard mit Echtzeit-Updates.',
        en: 'Collaborative task manager based on Kanban principles. Features: Drag & Drop, user assignment, task categorization and team dashboard with real-time updates.'
      },
      powerTitle: { de: 'Power of the Beast', en: 'Power of the Beast' },
      powerDescription: {
        de: 'Objektorientiertes Jump\'n\'Run-Spiel mit JavaScript. Entwickelt mit sauberer Code-Architektur, Collision-Detection und progressivem Level-Design.',
        en: 'Object-oriented jump\'n\'run game with JavaScript. Developed with clean code architecture, collision detection and progressive level design.'
      },
      dabubbleTitle: { de: 'DABubble', en: 'DABubble' },
      dabubbleDescription: {
        de: 'Moderne Team-Kommunikationsplattform mit Angular. Real-time Messaging, Datei-Upload, Channel-Management und responsive Design für alle Geräte.',
        en: 'Modern team communication platform with Angular. Real-time messaging, file upload, channel management and responsive design for all devices.'
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
      liveTest: { de: 'Live Test', en: 'Live Test' },
      comingSoon: { de: 'Demnächst', en: 'Coming Soon' }
    };
  }

  getAboutTexts() {
    return {
      whoIs: { de: 'WER IST KAY?', en: "WHO'S KAY?" },
      aboutMe: { de: 'Über mich', en: 'About me' },
      description: {
        de: 'Moin! Ich bin Kay – ein passionierter Full-Stack-Developer aus Lüneburg. 8 Jahre IT-Soldat bei der Bundeswehr, dann Anwendungsentwickler und jetzt Full-Stack-Weiterbildung bei der Developer Akademie.',
        en: "Hey! I'm Kay – a passionate Full-Stack Developer from Lüneburg. 8 years IT soldier in the German Armed Forces, then application developer and now Full-Stack training at Developer Academy."
      },
      collaboration: {
        de: 'Ich übernehme gerne Führungsrollen, arbeite mit KI-Tools und achte auf Clean Code mit modernen Strukturen.',
        en: 'I like to take on leadership roles, work with AI tools and focus on clean code with modern structures.'
      },
      button: { de: 'Lass uns reden', en: "Let's talk" }
    };
  }

  getInfoStickerTexts() {
    return {
      basedIn: { de: 'Ansässig in Lüneburg', en: 'Based in Lüneburg' },
      relocate: { de: 'Umzug? JA!', en: 'relocate? YES!' },
      remote: { de: 'Remote/Vor Ort/Hybrid', en: 'Remote/On-site/Hybrid' }
    };
  }

  getTestimonialTexts() {
    return {
      headerLabel: {
        de: 'IN IHREN WORTEN:',
        en: 'IN THEIR WORDS:'
      },
      testimonialsTitle: {
        de: 'Kollegen-Meinungen',
        en: 'Colleagues\' Thoughts'
      },
      profileText: {
        de: 'Profil',
        en: 'Profile'
      },
      testimonials: [
        {
          id: 1,
          name: 'Relja Jovanovic',
          position: 'Frontend Developer',
          text: {
            de: 'Kay hat beim Join-Projekt die Führung übernommen und uns als Team zusammengehalten. Seine strukturierte Herangehensweise und Hilfsbereitschaft haben das Projekt zum Erfolg geführt.',
            en: 'Kay took the lead on the Join project and kept us together as a team. His structured approach and willingness to help made the project a success.'
          },
          linkedinUrl: 'https://www.linkedin.com/in/relja-jovanovic-794374356/',
          backgroundImage: 'assets/img/imonials-left.webp',
          zIndex: 3
        },
        {
          id: 2,
          name: 'Andre Groß',
          position: 'Developer',
          text: {
            de: 'Kays Führungsqualitäten und sein Fokus auf Clean Code haben unser Team-Projekt erheblich verbessert. Er findet immer eine Lösung und motiviert das ganze Team.',
            en: 'Kay\'s leadership skills and focus on clean code significantly improved our team project. He always finds a solution and motivates the whole team.'
          },
          linkedinUrl: 'https://www.linkedin.com/in/andre-gro%C3%9F-b61b43339/',
          backgroundImage: 'assets/img/imonials-middle.webp',
          zIndex: 2
        },
        {
          id: 3,
          name: 'Kevin Schmidt',
          position: 'Application Developer',
          text: {
            de: 'Kay bringt seine Bundeswehr-Erfahrung perfekt in die Entwicklung ein. Strukturiert, zuverlässig und immer auf dem neuesten Stand der Technik. Ein echter Team-Player.',
            en: 'Kay perfectly brings his military experience into development. Structured, reliable and always up-to-date with technology. A real team player.'
          },
          linkedinUrl: 'https://www.linkedin.com/in/kevin-schmidt-a76862313/',
          backgroundImage: 'assets/img/imonials-right.webp',
          zIndex: 1
        }
      ]
    };
  }

  getSkillTexts() {
    return {
      stackLabel: { de: 'MEIN STACK', en: 'MY STACK' },
      stackDescription: {
        de: 'Als Full-Stack-Developer kombiniere ich Führungserfahrung mit modernen Frontend-Technologien. Aktuell vertiefe ich mich in Angular und setze auf Clean Code-Prinzipien.',
        en: 'As a Full-Stack Developer, I combine leadership experience with modern frontend technologies. Currently deepening my Angular skills while focusing on clean code principles.'
      }
    };
  }
}
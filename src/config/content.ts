// ============================================================
// CENTRAL CONTENT CONFIGURATION
// Edit all messages, names, and labels here.
// ============================================================

export const content = {
  meta: {
    title: 'A Little Sorry, My Baby 🧸',
    description: 'A little sorry, my baby — made with love, just for you.',
  },

  names: {
    recipient: 'Baby',
    nickname: 'Chubby',
    sender: 'Your Captain',
  },

  // ── SCENE 1: WELCOME ──────────────────────────────────────
  welcome: {
    heading: 'Heyyy, My Baby! 🧸',
    subheading: 'Someone has something special to tell you...',
    smallText: 'Made with love, just for you.',
    buttonLabel: 'Open Your Surprise 💌',
  },

  // ── SCENE 2: ENVELOPE ─────────────────────────────────────
  envelope: {
    heading: 'To My Favourite Person ❤️',
    intro: 'Baby, before anything else, I just want you to know how special you are to me.',
    buttonLabel: 'Continue 💗',
    tapHint: 'Tap the envelope to open',
  },

  // ── SCENE 3: APOLOGY LETTER ───────────────────────────────
  letter: {
    salutation: 'My Dearest Baby,',
    paragraphs: [
      "I'm really sorry, Chubby.",
      "I don't want a silly moment or misunderstanding to make you feel that you're any less special to me.",
      "You mean a lot to me, and I never want you to feel unheard or unappreciated.",
      "I know saying sorry isn't enough by itself. I want my actions to show you that I genuinely care.",
      "I love your smile, your little talks, your presence, and all those tiny moments that make us us.",
      "You are my favourite person, Baby.",
      "I love you. ❤️",
    ],
    closing: 'Always yours,',
    signature: 'Your Captain 🫶',
    buttonLabel: 'Keep reading 💗',
  },

  // ── SCENE 4: PROMISES ─────────────────────────────────────
  promises: {
    heading: 'Three Little Promises, Baby 💗',
    cards: [
      {
        title: 'I Will Listen',
        message: "I'll try to understand your feelings instead of rushing to respond.",
        emoji: '👂',
      },
      {
        title: 'More Understanding',
        message: "I'll communicate honestly and try to handle misunderstandings with patience.",
        emoji: '🤝',
      },
      {
        title: 'Show It Through Actions',
        message: 'I want my actions to show you how much you mean to me.',
        emoji: '🌸',
      },
    ],
    buttonLabel: 'Next 💌',
  },

  // ── SCENE 5: SURPRISE ─────────────────────────────────────
  surprise: {
    heading: 'One Tiny Question, Chubby...',
    question: 'Can I have a little smile from you? 🥺',
    hugButtonLabel: 'Sending you a hug 🤗',
    hugMessage: 'Sending you the biggest virtual hug, Baby! ❤️',
    surpriseButtonLabel: 'Play our little surprise',
    buttonLabel: 'One Last Thing... 🌸',
  },

  // ── SCENE 6: FINAL ────────────────────────────────────────
  final: {
    heading: "You're My Favourite Part of Every Day ❤️",
    subtitle: 'No matter how imperfect I may be, I always want to keep learning how to love you better.',
    message: 'I love you, Baby.\nForever your Captain. 🧸❤️',
    hugButtonLabel: 'Send a virtual hug',
    hugResponseMessage: 'Wrapped in a million hugs and all my love. Forever yours. 💗',
  },
} as const;

export type Content = typeof content;

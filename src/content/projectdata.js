
export const ProjectData = [
  { path: "/",
    exact: true,
    name: "Melissa Wei",
    github: "https://github.com/mwei2509",
    linkedin: "https://www.linkedin.com/in/melissa-wei/",
    mainphoto: "http://i.imgur.com/PAUSPym.png",
    resume: "download",
    date: "4/8/2017",
    tagline: "Expiring group chats",
    about: "Full stack web developer and designer based in New York City.",
    gif: "demo gif",
    stack: ["Ruby on Rails", "jQuery", "Postgres", "HTML/CSS"],
    photos:["photo 1", "photo 2"]
  },
  { path: "/ghostchat",
    name: "GhostChat",
    github: "https://github.com/mwei2509/ghostchat",
    demo: "http://www.ghostchat.io/",
    date: "4/8/2017",
    about: "Quickly create public or private expiring group chats. No user registration required!",
    long_desc: `GhostChat uses a Ruby on Rails and Postgres SQL database backend framework with Action Cable
      websockets to enable real-time chatting.  Users can create group chats in as easy as two clicks - no
      need to create names for groups or usernames (when no names are provided, a random, unique name is generated).\n\n
      GhostChat uses symmetric server-side encryption to store messages.  Chats expire after a certain amount of time,
      and all messages are automatically destroyed`,
    gif: "demo gif",
    stack: ["Ruby on Rails", "jQuery", "Postgres", "HTML/CSS"],
    mainphoto: "http://i.imgur.com/FT2s6qp.png",
    thumbnail: "http://i.imgur.com/dYlnZc0.png",
    photos:[{
      header: false,
      feature: true,
      url: "http://i.imgur.com/kVqCpVL.png",
      desc: `Groups automatically expire after a set amount of time and your messages are destroyed.`
    },{
      header: true,
      feature: true,
      url: "http://i.imgur.com/BAFXjJq.png",
      desc: ""
    },{
      header: true,
      feature: false,
      url: "http://i.imgur.com/FT2s6qp.png",
      desc: ""
    }]
  },
  { path: "/passanote",
    name: "Pass a Note",
    github: "https://github.com/mwei2509/pass-a-note",
    demo: "http://frozen-oasis-62460.herokuapp.com",
    date: "4/12/2017",
    about: "A blank canvas to speak your mind",
    long_desc: `Pass-a-note is a simple, single-page React app where users can double click anywhere
      on their screen and create inspirational quotes. Font family, opacity, and size are randomly
      genrated, and words created can be edited, moved, and deleted to string together thoughts in
      an creative and aesthetically pleasing way.`,
    gif: "demo gif",
    stack: ["React/JS"],
    mainphoto: "http://i.imgur.com/rXsWcxL.png",
    thumbnail: "http://i.imgur.com/9FgNRtd.png",
    photos:[{
      header: false,
      feature: true,
      url: "http://i.imgur.com/TRq47oO.png",
      desc: "Drag and drop to insert photos from other websites or upload "
    }]
  },
  { path: "/corkly",
    name: "Corkly",
    github: "https://github.com/mwei2509/corkly-react",
    demo: "http://corkly.co",
    date: "4/25/2017",
    about: "Corkly makes it easy to pin notes and images to a virtual bulletin board. Collaborate on personal boards with your favorite people, or create public boards to share with everybody.",
    long_desc: `Corkly was created with a Ruby on Rails and Postgres API backend
      and a React/Redux frontend framework, using JWT and BCrypt authentication.
      Corkly sticky notes and sidebar features custom, handwritten CSS.\n\n
      Sticky notes can be created with a simple double-click on the screen.
      Photos can be uploaded from the user's computer or drag-and-dropped from
      an outside website.`,
    gif: "demo gif",
    stack: ["Ruby on Rails", "React/JS", "Postgres", "HTML/CSS"],
    mainphoto: "http://i.imgur.com/eNVJ5Z2.png",
    thumbnail: "http://i.imgur.com/iblXf4c.png",
    photos:[
      {header: false,
      feature: true,
      url: "http://i.imgur.com/LunPDNY.png",
      desc: `Start out with an empty corkboard and double click anywhere
        to create a note.  Save your personal bulletin boards and keep track of them
        in your personalized sidebar.`
    },{
      header: false,
      feature: true,
      url: "http://i.imgur.com/5AWQ3oD.gif",
      desc: `Drag and drop your favorite images from other websites (or upload
        them from your computer)`
    },{
      header: false,
      feature: true,
      url: "http://i.imgur.com/LNiXAiP.gif",
      desc: `Collaborate on boards with friends. Adding a friend as a collaborator
        adds your board to their list of boards. Private boards are only accessible
        to its collaborators.`

    }]
  },
  { path: "/routefinder",
    name: "RouteFinder",
    github: "github link",
    demo: "https://thawing-ravine-76522.herokuapp.com/",
    date: "date",
    about: "Find the optimized waypoint through multiple addresses, perfect for planning your most efficient route.",
    long_desc: `RouteFinder is a single-page React app that uses the Google Directions API to find
      the optimized waypoint to get from origin to destination through multiple stops.`,
    gif: "demo gif",
    stack: ["Ruby on Rails", "React/JS", "Postgres", "HTML/CSS"],
    mainphoto: "http://i.imgur.com/yPaX7vg.png",
    thumbnail: "http://i.imgur.com/ECjE0sW.png",
    photos:[{
      header: false,
      feature: true,
      url: "http://i.imgur.com/R9yFqzf.gif",
      desc: "Drag and drop to insert photos from other websites or upload "
    },
    {
      header: false,
      feature: false,
      url: "url",
      desc: "Description"
    }
    ]
  },
  {path: "/howaboutwe",
    name: "HowAboutWe",
    github: "github link",
    demo: "http://damp-falls-31244.herokuapp.com",
    date: "date",
    about: "Meet new people through fun activities!",
    long_desc: `HowAboutWe was made as a Ruby on Rails project at the Flatiron
      School Web Development course.  It is a light-weight Rails app that uses
      the Postgres database\n\n
      The idea was to create a simple app where people can search for events taking
      place in their favorite locations and attend events that interest them.  We use the
      Google API to create event locations and render them on a map`,
    gif: "demo gif",
    stack: ["Ruby on Rails", "Postgres", "HTML/CSS", "Sass"],
    mainphoto: "http://i.imgur.com/UIdRRex.png",
    thumbnail: "http://i.imgur.com/9dGxqog.png",
    photos:[{
      header: false,
      feature: false,
      url: "http://i.imgur.com/R9yFqzf.gif",
      desc: "Drag and drop to insert photos from other websites or upload "
    }]
  }

]

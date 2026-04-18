// Instructions

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch() {
        return console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }
}

// First instance
const video1 = new Video("JavaScript Basics", "Daniel", 300);
video1.watch();

// Second instance
const video2 = new Video("React Tutorial", "Sarah", 600);
video2.watch();

const videosData = [
  { title: "JS Intro", uploader: "Mike", time: 200 },
  { title: "CSS Flexbox", uploader: "Anna", time: 400 },
  { title: "HTML Basics", uploader: "Tom", time: 250 },
  { title: "NodeJS Crash Course", uploader: "Emma", time: 800 },
  { title: "React Hooks", uploader: "Chris", time: 500 }
];

const videoInstances = [];

videosData.forEach(video => {
  const newVideo = new Video(video.title, video.uploader, video.time);
  videoInstances.push(newVideo);
});

videoInstances.forEach(video => video.watch());

// Generate a random hexadecimal color
const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  // Violet: #2712EF, #9A60EA
  // Orange-Yellow: #FFD860
  // Neon Green: #5EE725, #54F354
  // Light Blue: #02C8DE
  // Good Purple: #CB5EEF
  // REALLY good purple: #A48DF3
  // Solid red: #E41B05, #E12263
  // P good blue: #4E9DF0
  // Sky Blue: #01BCDB
  // Classy Orange: #EB8F6B
  // Beautiful purple: #EB4AEA
  // Great purple-pink on projects page: #EF06D0
  // Great peach on home: #DE92A1
  // Another great blue on projects: #5A64C6
  // Great purple-pink on "About Me": #CB21C3
  // Red-Peach: #FF8586
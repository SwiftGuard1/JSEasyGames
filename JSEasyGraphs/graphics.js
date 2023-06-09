var nameList = [
    "Time",
    "Past",
    "Future",
    "Dev",
    "Fly",
    "Flying",
    "Soar",
    "Soaring",
    "Power",
    "Falling",
    "Fall",
    "Jump",
    "Cliff",
    "Mountain",
    "Rend",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Gold",
    "Demon",
    "Demonic",
    "Panda",
    "Cat",
    "Kitty",
    "Kitten",
    "Zero",
    "Memory",
    "Trooper",
    "XX",
    "Bandit",
    "Fear",
    "Light",
    "Glow",
    "Tread",
    "Deep",
    "Deeper",
    "Deepest",
    "Mine",
    "Your",
    "Worst",
    "Enemy",
    "Hostile",
    "Force",
    "Video",
    "Game",
    "Donkey",
    "Mule",
    "Colt",
    "Cult",
    "Cultist",
    "Magnum",
    "Gun",
    "Assault",
    "Recon",
    "Trap",
    "Trapper",
    "Redeem",
    "Code",
    "Script",
    "Writer",
    "Near",
    "Close",
    "Open",
    "Cube",
    "Circle",
    "Geo",
    "Genome",
    "Germ",
    "Spaz",
    "Shot",
    "Echo",
    "Beta",
    "Alpha",
    "Gamma",
    "Omega",
    "Seal",
    "Squid",
    "Money",
    "Cash",
    "Lord",
    "King",
    "Duke",
    "Rest",
    "Fire",
    "Flame",
    "Morrow",
    "Break",
    "Breaker",
    "Numb",
    "Ice",
    "Cold",
    "Rotten",
    "Sick",
    "Sickly",
    "Janitor",
    "Camel",
    "Rooster",
    "Sand",
    "Desert",
    "Dessert",
    "Hurdle",
    "Racer",
    "Eraser",
    "Erase",
    "Big",
    "Small",
    "Short",
    "Tall",
    "Sith",
    "Bounty",
    "Hunter",
    "Cracked",
    "Broken",
    "Sad",
    "Happy",
    "Joy",
    "Joyful",
    "Crimson",
    "Destiny",
    "Deceit",
    "Lies",
    "Lie",
    "Honest",
    "Destined",
    "Bloxxer",
    "Hawk",
    "Eagle",
    "Hawker",
    "Walker",
    "Zombie",
    "Sarge",
    "Capt",
    "Captain",
    "Punch",
    "One",
    "Two",
    "Uno",
    "Slice",
    "Slash",
    "Melt",
    "Melted",
    "Melting",
    "Fell",
    "Wolf",
    "Hound",
    "Legacy",
    "Sharp",
    "Dead",
    "Mew",
    "Chuckle",
    "Bubba",
    "Bubble",
    "Sandwich",
    "Smasher",
    "Extreme",
    "Multi",
    "Universe",
    "Ultimate",
    "Death",
    "Ready",
    "Monkey",
    "Elevator",
    "Wrench",
    "Grease",
    "Head",
    "Theme",
    "Grand",
    "Cool",
    "Kid",
    "Boy",
    "Girl",
    "Vortex",
    "Paradox",
  ];
  
  function generate() {
    // The function doesn't need to "return" anything. It just needs
    // to set the value of the text field to the random name.
    let result = nameList[Math.floor(Math.random() * nameList.length)];
    let result2 = nameList[Math.floor(Math.random() * nameList.length)];
    return result + result2;
  }
  
  function dragElement(elmnt) {
    var newElem = elmnt;
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    newElem.onmousedown = dragMouseDown;
    newElem.innerText = ""
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      newElem.style.top = newElem.offsetTop - pos2 + "px";
      newElem.style.left = newElem.offsetLeft - pos1 + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  
    return newElem;
  }
  
  export class DOMGraphics {
    #color = "black";
    #debug = false;
  
    generateDebugTool() {
      document.body.insertAdjacentHTML("beforeend", "<div id=\"attribs\" style=\"position: absolute; right: 0;\"></div>")
    }
  
    setDebug(bool) {
      this.#debug = bool;
    }
  
    setDrawColor(color) {
      this.#color = color;
    }
  
    createText(text = "Hello World!", x, y, layer) {
      let elem = document.createElement("label");
      elem.innerHTML = text;
      elem.style.color = this.#color;
      elem.style.position = "absolute";
      elem.style.left = x;
      elem.style.top = y;
      elem.style.zIndex = layer;
      elem.id = generate();
      if (this.#debug === true) {
        elem.onmouseover = function(){
          document.getElementById("attribs").innerHTML = `X: ${elem.style.left}, Y: ${elem.style.top}`
        };
        elem.innerText += "⚓"
      }
      return elem;
    }
  
    createRect(width, height, x, y, layer) {
      let elem = document.createElement("div");
      elem.style.backgroundColor = this.#color;
      elem.style.width = width;
      elem.style.height = height;
      elem.style.position = "absolute";
      elem.style.left = x;
      elem.style.top = y;
      elem.style.zIndex = layer;
      elem.id = generate();
      if (this.#debug === true) {
        elem.onmouseover = function(){
          document.getElementById("attribs").innerHTML = `X: ${elem.style.left}, Y: ${elem.style.top}`
        };
        elem.style.display = "flex";
        elem.style.justifyContent = "center";
        elem.style.lineHeight = elem.style.height;
        elem.innerText = "⚓"
      }
      return elem;
    }
  
    createSquare(length, x, y, layer, drag = false) {
      let elem = document.createElement("div");
      elem.style.backgroundColor = this.#color;
      elem.style.width = length;
      elem.style.height = length;
      elem.style.position = "absolute";
      elem.style.left = x;
      elem.style.top = y;
      elem.style.zIndex = layer;
      elem.id = generate();
      if (this.#debug === true) {
        elem.onmouseover = function(){
          document.getElementById("attribs").innerHTML = `X: ${elem.style.left}, Y: ${elem.style.top}`
        };
        elem.style.display = "flex";
        elem.style.justifyContent = "center";
        elem.style.lineHeight = elem.style.height;
        elem.innerText = "⚓"
      }
      return elem;
    }
  
    createCircle(diameter, x, y, layer) {
      let elem = document.createElement("div");
      elem.style.backgroundColor = this.#color;
      elem.style.width = diameter;
      elem.style.height = diameter;
      elem.style.position = "absolute";
      elem.style.left = x;
      elem.style.top = y;
      elem.style.borderRadius = `calc(${diameter}/2)`;
      elem.style.zIndex = layer;
      elem.id = generate();
      if (this.#debug === true) {
        elem.onmouseover = function(){
          document.getElementById("attribs").innerHTML = `X: ${elem.style.left}, Y: ${elem.style.top}`
        };
        elem.style.display = "flex";
        elem.style.justifyContent = "center";
        elem.style.lineHeight = elem.style.height;
        elem.innerText = "⚓"
      }
      return elem;
    }
  
    createTriangle(width, height, x, y, layer) {
      let elem = document.createElement("div");
      elem.style.width = 0;
      elem.style.height = 0;
      elem.style.borderLeft = `${width} solid transparent`;
      elem.style.borderRight = `${width} solid transparent`;
      elem.style.borderBottom = `${height} solid ${this.#color}`;
      elem.style.position = "absolute";
      elem.style.left = x;
      elem.style.top = y;
      elem.style.zIndex = layer;
      elem.id = generate();
      if (this.#debug === true) {
        elem.onmouseover = function(){
          document.getElementById("attribs").innerHTML = `X: ${elem.style.left}, Y: ${elem.style.top}`
        };
        elem.style.display = "flex";
        elem.style.justifyContent = "center";
        elem.style.lineHeight = elem.style.height;
        elem.innerText = "⚓"
      }
      return elem;
    }
  
    createOval(width, height, x, y, layer) {
      let elem = document.createElement("div");
      elem.style.width = width;
      elem.style.height = height;
      elem.style.backgroundColor = this.#color;
      elem.style.borderRadius = "50%";
      elem.style.position = "absolute";
      elem.style.left = x;
      elem.style.top = y;
      elem.style.zIndex = layer;
      elem.id = generate();
      if (this.#debug === true) {
        elem.onmouseover = function(){
          document.getElementById("attribs").innerHTML = `X: ${elem.style.left}, Y: ${elem.style.top}`
        };
        elem.style.display = "flex";
        elem.style.justifyContent = "center";
        elem.style.lineHeight = elem.style.height;
        elem.innerText = "⚓"
      }
      return elem;
    }
  
    createImage(source, width, height, x, y, layer) {
      let elem = document.createElement("img");
      elem.style.width = width;
      elem.style.height = height;
      elem.src = source;
      elem.style.position = "absolute";
      elem.style.left = x;
      elem.style.top = y;
      elem.style.zIndex = layer;
      elem.id = generate();
      if (this.#debug === true) {
        elem.onmouseover = function(){
          document.getElementById("attribs").innerHTML = `X: ${elem.style.left}, Y: ${elem.style.top}`
        };
        elem.style.display = "flex";
        elem.style.justifyContent = "center";
        elem.style.lineHeight = elem.style.height;
        elem.innerText = "⚓"
      }
      return elem;
    }
  
    makeDraggable(element) {
      return dragElement(element);
    }
  
    insertGraphic(element) {
      document.body.appendChild(element);
    }
  }
  
  export const ColorFormat = {
    red: 0,
    green: 0,
    blue: 0,
  };
  
  class LightingPhysics {
    /**
     * Creates and centers a radial gradient behind an element to give the effetc of ementating light.
     * Intensity affects transparency
     * Power affects how far the color is pushed out from the center
     * Range affects how large the diameter is.
     * Ending is the position where the light ends in percenatages.
     *
     * @param {HTMLElement} element
     * @param {ColorFormat} color
     * @param {Number} intensity
     * @param {Number} power
     * @param {Number} range
     * @param {Number} ending
     */
    applyLightSource(element, color, intensity, power, range, ending) {
      if (element.onmousedown) {
        let lightSource = document.createElement("div");
        lightSource.id = element.id + "-light";
        lightSource.style = `background: radial-gradient(circle, rgba(${color.red},${color.green},${color.blue},1) 0%, rgba(${color.red},${color.green},${color.blue},1) ${power}%, rgba(255,255,255,0) ${ending}%)`
        lightSource.style.position = "absolute";
        lightSource.style.width = range;
        lightSource.style.height = range;
        lightSource.style.left = `calc(${element.style.left} - ${lightSource.style.width}/2.5)`;
        lightSource.style.top = `calc(${element.style.top} - ${lightSource.style.height}/2.5)`;
        lightSource.style.zIndex = element.style.zIndex - 1;
        lightSource.style.borderRadius = "999999999px";
        lightSource.style.opacity = intensity;
        document.body.appendChild(lightSource);
      }
    }
  }
  
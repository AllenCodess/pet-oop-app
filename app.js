// create the pet object

const pet = {
  name: "Biscuit",
  hunger: 5,
  happiness: 5,

  feed: function () {
    if (this.hunger > 0) {
      this.hunger--;
    }
  },

  play: function () {
    if (this.happiness < 10) {
      this.happiness++;
    }
  },

  getStatus: function () {
    return this.name + "'s Hunger: " + this.hunger + " | Happiness: " + this.happiness;
  },
};

// get dom elements
const feedBtnEl = document.getElementById("feedbtn");
const playBtnEl = document.getElementById("playbtn");
const statusEl = document.getElementById("status");

// create functions

feedBtnEl.addEventListener("click", function () {
  updateStatus();
  pet.feed();
});

playBtnEl.addEventListener("click", function () {
  updateStatus();
  pet.play();
});

updateStatus();

function updateStatus() {
  statusEl.textContent = pet.getStatus();
}

const app = {
  'bodyweight': 70,
  'load': 0,
  'pushupToBench': function() {
    let bench = (this.load*0.77) + (this.bodyweight*0.64);
    return bench.toFixed(1)
  },
  'pistolToSquat': function() {
    let squat = this.bodyweight + (this.load * 2);
    return squat.toFixed(1)
  },
  'currentExercise': 'bench'
}

const ui = {
  'bodyweightNumber': document.querySelector('.static-elements .bodyweight ul li .number'),
  'loadNumber': document.querySelector('.static-elements .load ul li .number'),
  'exerciseNumber': document.querySelector('.dynamic-elements div ul li .number'),
  'exerciseTitle': document.querySelector('.dynamic-elements div h2'),
  'renderExercisePanel': function(exercise){
    this.exerciseTitle.innerHTML = exercise;
  },
  'addToBodyweight': function(amount){
    app.bodyweight += amount;
    if(app.bodyweight <0){
      app.bodyweight = 0;
    }
    this.bodyweightNumber.innerHTML = app.bodyweight;
    ui.calculateAndRender();

  },
  'addToLoad': function(amount){
    app.load += amount;
    if(app.load <0){
      app.load = 0;
    }
    this.loadNumber.innerHTML = app.load;
    ui.calculateAndRender();

  },
  'calculateAndRender': function(){
    switch (app.currentExercise) {
      case 'bench':
        this.exerciseNumber.innerHTML = app.pushupToBench();
        break;

      case 'squat':
        this.exerciseNumber.innerHTML = app.pistolToSquat();
        break;
    }
  }
}

const radios = document.querySelectorAll('.button');
radios.forEach((r) => {
  r.addEventListener('click', () => {
    let exercise = r.dataset.exercise;
    ui.renderExercisePanel(exercise)
    app.currentExercise = exercise;
    ui.calculateAndRender();
  })
})

ui.calculateAndRender();

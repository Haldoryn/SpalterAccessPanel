function $(selector, container) {
    return (container || document).querySelector(selector);
  }
  
  
  (function() {
  
    var _ = self.Life = function(seed) {
      this.seed = seed;
      this.height = seed.length
      this.width = seed[0].length;
  
      this.prevBoard = [];
      this.board = cloneArray(seed);
    }
  
    _.prototype = {
      next: function() {
        this.prevBoard = cloneArray(this.board);
  
        for(var y = 0; y < this.height; y++) {
          for(var x = 0; x < this.width; x++) {
            var neighbors = this.aliveNeighbors(this.prevBoard, x, y);
  
            alive = !!this.board[y][x];
  
            if(alive) {
              if(neighbors < 2 || neighbors > 3) {
                this.board[y][x] = 0;
              }
            } else if(neighbors === 3) {
              this.board[y][x] = 1;
            }
  
          }
        }
        if(checkCompleted(this.board)){
            document.getElementById('container').style.visibility = "visible";
            document.getElementById('container').style.display = "block";

        }
      },
  
      aliveNeighbors: function(array, x, y) {
        var sum = 0;
        var prevRow = array[y - 1] || [];
        var nextRow = array[y + 1] || [];
  
        return  [
          prevRow[x - 1],prevRow[x], prevRow[x + 1], 
          array[y][x - 1], array[y][x + 1], 
          nextRow[x - 1], nextRow[x], nextRow[x + 1], 
        ].reduce(function(prev, cur) {
          return prev + +!!cur;
        }, 0);
  
  
      },
  
      toString: function() {
        return this.board.map(function(row) {
          return row.join(' ');
        }).join('\n');
  
      }
  
    }; 
  
    // Helpers
  
    // Warning: Only clones 2D arrays
    function cloneArray(array) {
      return array.slice().map(function(row) {
        return row.slice();
      });
    }
    function checkCompleted(array) {
        for (var y = 0; y < 45; y++) {
            for(var x = 0; x < 55; x++){
                if(array[y][x]){
                    return false;
                }
            }
        }
        return true;
      }
  
  })();
  
  (function() {
    var _ = self.LifeView = function(table, size) {
      this.grid = table;
      this.size = size;
      this.started = false;
      this.autoplay = false;
  
      this.createGrid();
    };
  
    _.prototype = {
        createGrid: function() {
          var me = this;
          var fragment = document.createDocumentFragment();
          this.grid.innerHTML = '';
          this.checkboxes = [];
    
          for(var y = 0; y < 45; y++) {
            var row = document.createElement('tr');
            this.checkboxes[y] = [];
            for(var x = 0; x < 55; x++) {
              var cell = document.createElement('td');
              cell.className = 'cell';
              var checkbox = document.createElement('input');
              checkbox.disabled = true;
              checkbox.type = 'checkbox';
              this.checkboxes[y][x] = checkbox;
              checkbox.coords = [y , x];
  
    
              cell.appendChild(checkbox);
              row.appendChild(cell);
            }
            fragment.appendChild(row);
          }
  
          var bla = 0
          var bla2 = 10
  
          for(var y = 25; y < 30; y++ ){
              for(var x = 39; x < 49; x++){
                  this.checkboxes[x-bla2][y-bla].className  += " actavatable";
                  this.checkboxes[x-bla2][y-bla].disabled = false;
              }
          }
          //x 39 - 49   y 25 - 29
          -bla2
          this.checkboxes[26-bla2][25-bla].checked = true;
          this.checkboxes[26-bla2][24-bla].checked = true;
          this.checkboxes[25-bla2][24-bla].checked = true;
          this.checkboxes[24-bla2][25-bla].checked = true;
          this.checkboxes[24-bla2][26-bla].checked = true;
          this.checkboxes[25-bla2][26-bla].checked = true;
          this.checkboxes[28-bla2][25-bla].checked = true;
          this.checkboxes[28-bla2][24-bla].checked = true;
          this.checkboxes[29-bla2][26-bla].checked = true;
          this.checkboxes[29-bla2][24-bla].checked = true;
          this.checkboxes[30-bla2][26-bla].checked = true;
          this.checkboxes[30-bla2][25-bla].checked = true;
          this.checkboxes[25-bla2][28-bla].checked = true;
          this.checkboxes[24-bla2][28-bla].checked = true;
          this.checkboxes[26-bla2][29-bla].checked = true;
          this.checkboxes[24-bla2][29-bla].checked = true;
          this.checkboxes[26-bla2][30-bla].checked = true;
          this.checkboxes[25-bla2][30-bla].checked = true;
          this.checkboxes[28-bla2][29-bla].checked = true;
          this.checkboxes[28-bla2][30-bla].checked = true;
          this.checkboxes[29-bla2][30-bla].checked = true;
          this.checkboxes[29-bla2][28-bla].checked = true;
          this.checkboxes[30-bla2][29-bla].checked = true;
          this.checkboxes[30-bla2][28-bla].checked = true;
          this.checkboxes[22-bla2][25-bla].checked = true;
          this.checkboxes[22-bla2][24-bla].checked = true;
          this.checkboxes[21-bla2][24-bla].checked = true;
          this.checkboxes[20-bla2][24-bla].checked = true;
          this.checkboxes[22-bla2][29-bla].checked = true;
          this.checkboxes[22-bla2][30-bla].checked = true;
          this.checkboxes[21-bla2][30-bla].checked = true;
          this.checkboxes[20-bla2][30-bla].checked = true;
          this.checkboxes[32-bla2][24-bla].checked = true;
          this.checkboxes[32-bla2][25-bla].checked = true;
          this.checkboxes[33-bla2][24-bla].checked = true;
          this.checkboxes[34-bla2][24-bla].checked = true;
          this.checkboxes[32-bla2][30-bla].checked = true;
          this.checkboxes[32-bla2][29-bla].checked = true;
          this.checkboxes[33-bla2][30-bla].checked = true;
          this.checkboxes[34-bla2][30-bla].checked = true;
          this.checkboxes[24-bla2][20-bla].checked = true;
          this.checkboxes[24-bla2][21-bla].checked = true;
          this.checkboxes[24-bla2][22-bla].checked = true;
          this.checkboxes[25-bla2][22-bla].checked = true;
          this.checkboxes[24-bla2][34-bla].checked = true;
          this.checkboxes[24-bla2][33-bla].checked = true;
          this.checkboxes[24-bla2][32-bla].checked = true;
          this.checkboxes[25-bla2][32-bla].checked = true;
          this.checkboxes[30-bla2][34-bla].checked = true;
          this.checkboxes[30-bla2][33-bla].checked = true;
          this.checkboxes[30-bla2][32-bla].checked = true;
          this.checkboxes[29-bla2][32-bla].checked = true;
          this.checkboxes[30-bla2][20-bla].checked = true;
          this.checkboxes[30-bla2][21-bla].checked = true;
          this.checkboxes[30-bla2][22-bla].checked = true;
          this.checkboxes[29-bla2][22-bla].checked = true;
  

        this.grid.addEventListener('change', function(event) {
          if(event.target.nodeName.toLowerCase() === 'input') {
            me.started = false;
          }
        });
  
        this.grid.addEventListener('keyup', function(event) {
          var checkbox = event.target; 
          if(event.target.nodeName.toLowerCase() === 'input') {
            var coords = checkbox.coords;
            var y = coords[0];
            var x = coords[1];
  
            switch(event.keyCode) {
              case 37: //Left
                if(x > 0) {
                  me.checkboxes[y][x - 1].focus();
                }
                break;
              case 38: // UP
                if(y > 0){
                  me.checkboxes[y - 1][x].focus();
                }
                break;
              case 39: //Right
                if(x < me.size - 1) {
                  me.checkboxes[y][x + 1].focus();
                }
                break;
              case 40: //Down
                if(y < me.size - 1) {
                  me.checkboxes[y + 1][x].focus();
                }
                break;
            }
  
          }
        });
  
        this.grid.appendChild(fragment);
      },
  
      get boardArray() {
        return this.checkboxes.map(function(row) {
          return row.map(function(checkbox) {
            return +checkbox.checked;
          });
        });
      },
  
      play: function() {
        this.game = new Life(this.boardArray);
        this.started = true;
      },
  
      next: function() {
        var me = this;
  
        if(!this.started || this.game) {
          this.play();
        }
  
        this.game.next();
  
        var board = this.game.board;
  
        for(var y = 0; y < 45; y++) {
          for(var x = 0; x < 55; x++) {
            this.checkboxes[y][x].checked = !!board[y][x];
          }
        }
  
        if(this.autoplay) {
          this.timer = setTimeout(function () {
            me.next();
          }, 278 );
        }
  
      }
    };
  
  
  })();
  
  (function() {
  
    var buttons = {
      next: $('button.next')
    }
  
  
    buttons.next.addEventListener('click', function(event) {
      lifeView.next();
    });
  
    $("#autoplay").addEventListener('change', function() {
      buttons.next.disabled = this.checked;
  
      if(this.checked) {
        lifeView.autoplay = this.checked;
        lifeView.next();
      } else {
        clearTimeout(lifeView.timer);
      }
  
    });
  })();
  
  
  var lifeView = new LifeView(document.getElementById('grid'), 55);
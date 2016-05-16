function Frame(id){
  this._details = {
    pins: null,
    firstScore: null,
    secondScore: null,
    thirdScore: null,
    id: id
  }
}

Frame.prototype.updateScore = function(pins) {
  this._details.pins += pins;
}

Frame.prototype.firstBowl = function(pins){
  this.isIllegal(pins);
  this._details.firstScore = pins;
  this.updateScore(pins);
}

Frame.prototype.secondBowl = function(pins){
  this.isIllegal(pins);
  this._details.secondScore = pins;
  this.updateScore(pins);
}

Frame.prototype.thirdBowl = function(pins){
  if ((this._details.id !== 10) || 
     (this._details.id === 10 && this._details.pins < 10)) {
    throw new Error('Error: You cannot bowl a third time.');
  }
    this._details.thirdScore = pins;
    this.updateScore(pins);
}

Frame.prototype.isStrike = function() {
  return (this._details.firstScore === 10);
}

Frame.prototype.isSpare = function() {
  return (this._details.firstScore !== 10 && this._details.pins === 10);
}

Frame.prototype.isIllegal = function(pins){
  if(this._details.id !== 10 && (pins > 10 || 
     pins + this._details.pins > 10)) {
    throw new Error('Error: You cannot hit more than 10 pins.');
  }
}
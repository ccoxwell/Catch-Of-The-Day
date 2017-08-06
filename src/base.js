import Rebase from 're-base';

//creating connection to firebase
const base = Rebase.createClass({
  //okay to include apiKey because we are going to have authentication rules
  apiKey: "AIzaSyAEnUvHVCmjirkRlxrReRnGG9c4VcCOwc0",
  authDomain: "catch-of-the-day-ccoxwell.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ccoxwell.firebaseio.com"
})

export default base;
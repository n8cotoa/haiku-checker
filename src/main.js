import { Haiku } from './haiku';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){

  $("#inputForm").submit(function(e){
    e.preventDefault();
    let line1 = $("#input1").val();
    let line2 = $("#input2").val();
    let line3 = $("#input3").val();
    let haiku = new Haiku(line1, line2, line3);
    let isHaiku = haiku.isHaiku();
    $("#resultField").text(isHaiku);
  });


});

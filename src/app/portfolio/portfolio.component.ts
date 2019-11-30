import { Component, OnInit } from '@angular/core';
import { iziModal } from 'izimodal/node_modules/jquery/src/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modalOpen_1() {
    document.getElementById('modal_1').style.visibility = 'visible';
    document.getElementById('modal_1').style.marginTop = '0';
    document.getElementById('modal_1').style.opacity = '1';
    document.getElementById('modal_1').style.display = 'block';
    document.getElementById('modal_1').style.animation = '.5s 1 alternate slide_down';
    document.getElementById('modal_back').style.visibility = 'visible';
  }

  modalClose_1() {
    document.getElementById('modal_1').style.animation = '.2s 1 alternate slide_up';
    document.getElementById('modal_1').style.visibility = 'hiddden';
    document.getElementById('modal_1').style.marginTop = '-30px';
    document.getElementById('modal_1').style.opacity = '0';
    document.getElementById('modal_1').style.display = 'none';
    document.getElementById('modal_back').style.visibility = 'hidden';
  }

  modalOpen_2() {
    document.getElementById('modal_2').style.visibility = 'visible';
    document.getElementById('modal_2').style.marginTop = '0';
    document.getElementById('modal_2').style.opacity = '1';
    document.getElementById('modal_2').style.display = 'block';
    document.getElementById('modal_2').style.animation = '.5s 1 alternate slide_down';
    document.getElementById('modal_back').style.visibility = 'visible';
  }

  modalClose_2() {
    document.getElementById('modal_2').style.animation = '.2s 1 alternate slide_up';
    document.getElementById('modal_2').style.visibility = 'hiddden';
    document.getElementById('modal_2').style.marginTop = '-30px';
    document.getElementById('modal_2').style.opacity = '0';
    document.getElementById('modal_2').style.display = 'none';
    document.getElementById('modal_back').style.visibility = 'hidden';
  }
  modalOpen_3() {
    document.getElementById('modal_3').style.visibility = 'visible';
    document.getElementById('modal_3').style.marginTop = '0';
    document.getElementById('modal_3').style.opacity = '1';
    document.getElementById('modal_3').style.display = 'block';
    document.getElementById('modal_3').style.animation = '.5s 1 alternate slide_down';
    document.getElementById('modal_back').style.visibility = 'visible';
  }

  modalClose_3() {
    document.getElementById('modal_3').style.animation = '.2s 1 alternate slide_up';
    document.getElementById('modal_3').style.visibility = 'hiddden';
    document.getElementById('modal_3').style.marginTop = '-30px';
    document.getElementById('modal_3').style.opacity = '0';
    document.getElementById('modal_3').style.display = 'none';
    document.getElementById('modal_back').style.visibility = 'hidden';
  }
  modalOpen_4() {
    document.getElementById('modal_4').style.visibility = 'visible';
    document.getElementById('modal_4').style.marginTop = '0';
    document.getElementById('modal_4').style.opacity = '1';
    document.getElementById('modal_4').style.display = 'block';
    document.getElementById('modal_4').style.animation = '.5s 1 alternate slide_down';
    document.getElementById('modal_back').style.visibility = 'visible';
  }

  modalClose_4() {
    document.getElementById('modal_4').style.animation = '.2s 1 alternate slide_up';
    document.getElementById('modal_4').style.visibility = 'hiddden';
    document.getElementById('modal_4').style.marginTop = '-30px';
    document.getElementById('modal_4').style.opacity = '0';
    document.getElementById('modal_4').style.display = 'none';
    document.getElementById('modal_back').style.visibility = 'hidden';
  }


  modalOpen_5() {
    document.getElementById('modal_5').style.visibility = 'visible';
    document.getElementById('modal_5').style.marginTop = '0';
    document.getElementById('modal_5').style.opacity = '1';
    document.getElementById('modal_5').style.display = 'block';
    document.getElementById('modal_5').style.animation = '.5s 1 alternate slide_down';
    document.getElementById('modal_back').style.visibility = 'visible';
  }

  modalClose_5() {
    document.getElementById('modal_5').style.animation = '.2s 1 alternate slide_up';
    document.getElementById('modal_5').style.visibility = 'hiddden';
    document.getElementById('modal_5').style.marginTop = '-30px';
    document.getElementById('modal_5').style.opacity = '0';
    document.getElementById('modal_5').style.display = 'none';
    document.getElementById('modal_back').style.visibility = 'hidden';
  }

  modalOpen_6() {
    document.getElementById('modal_6').style.visibility = 'visible';
    document.getElementById('modal_6').style.marginTop = '0';
    document.getElementById('modal_6').style.opacity = '1';
    document.getElementById('modal_6').style.display = 'block';
    document.getElementById('modal_6').style.animation = '.5s 1 alternate slide_down';
    document.getElementById('modal_back').style.visibility = 'visible';
  }

  modalClose_6() {
    document.getElementById('modal_6').style.animation = '.2s 1 alternate slide_up';
    document.getElementById('modal_6').style.visibility = 'hiddden';
    document.getElementById('modal_6').style.marginTop = '-30px';
    document.getElementById('modal_6').style.opacity = '0';
    document.getElementById('modal_6').style.display = 'none';
    document.getElementById('modal_back').style.visibility = 'hidden';
  }
  modalOpen_7() {
    document.getElementById('modal_7').style.visibility = 'visible';
    document.getElementById('modal_7').style.marginTop = '0';
    document.getElementById('modal_7').style.opacity = '1';
    document.getElementById('modal_7').style.display = 'block';
    document.getElementById('modal_7').style.animation = '.5s 1 alternate slide_down';
    document.getElementById('modal_back').style.visibility = 'visible';
  }

  modalClose_7() {
    document.getElementById('modal_7').style.animation = '.2s 1 alternate slide_up';
    document.getElementById('modal_7').style.visibility = 'hiddden';
    document.getElementById('modal_7').style.marginTop = '-30px';
    document.getElementById('modal_7').style.opacity = '0';
    document.getElementById('modal_7').style.display = 'none';
    document.getElementById('modal_back').style.visibility = 'hidden';
  }
  modalOpen_8() {
    document.getElementById('modal_8').style.visibility = 'visible';
    document.getElementById('modal_8').style.marginTop = '0';
    document.getElementById('modal_8').style.opacity = '1';
    document.getElementById('modal_8').style.display = 'block';
    document.getElementById('modal_8').style.animation = '.5s 1 alternate slide_down';
    document.getElementById('modal_back').style.visibility = 'visible';
  }

  modalClose_8() {
    document.getElementById('modal_8').style.animation = '.2s 1 alternate slide_up';
    document.getElementById('modal_8').style.visibility = 'hiddden';
    document.getElementById('modal_8').style.marginTop = '-30px';
    document.getElementById('modal_8').style.opacity = '0';
    document.getElementById('modal_8').style.display = 'none';
    document.getElementById('modal_back').style.visibility = 'hidden';
  }

}

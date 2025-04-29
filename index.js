/**
 * @fileoverview GQuuuuuuX Activation
 * @author bills-appworks https://bsky.app/profile/did:plc:lfjssqqi6somnb7vhup2jm5w
 * @copyright bills-appworks 2025
 * @license This software is released under the MIT License. http://opensource.org/licenses/mit-license.php
*/
'use strict';

var omega_psycommu_color_inoperative = 'lightseagreen';
var omega_psycommu_color_active = 'darkorange';
var u_element = document.getElementById("u");
var message_element = document.getElementById("message");
var omega_psycommu_element = document.getElementById("omega-psycommu");
var status_element = document.getElementById("status");
var link_element = document.getElementById("link");
var sync_element = document.getElementById("sync");
var guide_element = document.getElementById("guide");
var share_element = document.getElementById("share");
var copied_balloon_element = document.getElementById("copied-balloon");
var share_text_element = document.getElementById("share-text");
var qux_number = 0;
var difference = 1;
var timer_id = null;
var max_number = 9;
var min_number = 0;
var delay = 10;
var message = '';

function initialize() {
  omega_psycommu_element.style.color = omega_psycommu_color_inoperative;
  status_element.style.color = omega_psycommu_color_inoperative;
  status_element.style.borderColor = omega_psycommu_color_inoperative;
  status_element.style.backgroundColor = '';
  status_element.textContent = 'INOPERATIVE';
  link_element.textContent = '---';
  sync_element.textContent = '---';
  message_element.innerHTML = '&nbsp;';
  guide_element.textContent = 'タップして"GQuuuuuuX"を出してオメガ・サイコミュを起動';
  share_element.style.visibility = 'hidden';

  qux_number = 0;
  difference = 1;
  timer_id = window.setTimeout(tick, delay);
}

function qux_render() {
  var text = 'u'.repeat(qux_number);
  u_element.textContent = text;
}

function tick() {
  qux_render();
  qux_number += difference;
  if (qux_number >= max_number) {
    difference = -1;
  } else if (qux_number <= min_number) {
    difference = 1;
  }

  timer_id = window.setTimeout(tick, delay);
}

function get_message_inoperative() {
  var messages = [
    'こちらのサイコミュはロックが外れない',
    'なんで起動しないんだ！',
    'サイコミュコントロールならもっと反応できるのに！',
    '僕の力じゃ動かないのかオメガ・サイコミュ'
  ];

  var index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

function action_tap() {
  qux_render();
  if (timer_id) {
    window.clearTimeout(timer_id);
    timer_id = null;
    message = get_message_inoperative();
    if (qux_number === 6) {
      message = 'オメガ・サイコミュの起動シグナル受信';
      omega_psycommu_element.style.color = omega_psycommu_color_active;
      status_element.style.color = '#000000';
      status_element.style.borderColor = omega_psycommu_color_active;
      status_element.style.backgroundColor = omega_psycommu_color_active;
      status_element.textContent = 'ACTIVE';
      link_element.textContent = 'NML';
      sync_element.textContent = 'NML';
    }
    message_element.textContent = message;
    guide_element.textContent = 'タップで再起動';
    share_element.style.visibility = 'visible';
  } else {
      initialize();
  }
}

function action_share() {
  navigator.clipboard.writeText(
    'GQ' + 'u'.repeat(qux_number) + "X\n" +
    message + "\n" +
    'https://bills-appworks.github.io/GQuuuuuuX'
  );
  copied_balloon_element.style.opacity = '0';
  copied_balloon_element.style.visibility = 'visible';
  setTimeout(() => {
    copied_balloon_element.style.opacity = '1';
    copied_balloon_element.style.visibility = 'hidden';
  }, 3000);
}

initialize();

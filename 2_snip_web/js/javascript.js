//ส่วน table database
// (function() {
//     HTMLImports.whenReady(function() {
//       var grid = document.querySelector('#sasas');
//
//       getJSON('https://demo.vaadin.com/demo-data/1.0/people', function(json) {
//         grid.items = json.result;
//       });
//     });
//
//     function getJSON(url, callback) {
//       var xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//           callback(JSON.parse(xhr.responseText));
//         }
//       };
//       xhr.open('GET', url, true);
//       xhr.send();
//     }
//   })();
// ส่วน ไดอาร็อก
function clickHandler(e) {
     var button = e.target;
    // alert(button.hasAttribute('data-dialog'));
     while (!button.hasAttribute('data-dialog') && button !== document.body) {
       button = button.parentElement;
     }
     if (!button.hasAttribute('data-dialog')) {
       return;
     }
     var id = button.getAttribute('data-dialog');
     var dialog = document.getElementById(id);
     if (dialog) {
       dialog.open();
     }
}

// เพิ่มเมนู
function add_menu() {
  var icon_pic = document.getElementById('add_menu_icon_pic').value;
  var add_menu_icon_name = document.getElementById('add_menu_icon_name').value;
  var add_menu_id = document.getElementById('add_menu_id').value;
  // เช็คว่าไม่ใส่ข้อมูลรึไม่ หรือ เป็นค่าว่างรึไม่
  if (icon_pic == "" || icon_pic == null || add_menu_icon_name =="" || add_menu_icon_name == null || add_menu_id=="" || add_menu_id==null){
    // สั่งไปหาไออาล็อก id ที่แสดงค่ากล่องที่ไม่ถูกต้อง แล้วสั่งเปิด
    error_dialog();
  }else {
    var pane_menu="<paper-item id=\""+add_menu_id+"\"><div class=\"setting_drawer_menu\"><iron-icon class=\"icon-drawer\" icon=\""+icon_pic+"\"><\/iron-icon><\/div><div class=\"title_menu\">"+add_menu_icon_name+"<\/div><\/paper-item>";
    $(".paperlistbox_drawer").append(pane_menu);
    //  สั่งไปหาไออาล็อก id ที่แสดงกล่องถูกต้อง แล้วสั่งเปิด
    ok_dialog();
  }
}
// แก้ไขเมนู
function edit_menu(e) {
  //สั่งเปิด ไดอาล้อก
  var edit_add_drawer_menu = document.getElementById('edit_add_drawer_menu');
  if (edit_add_drawer_menu.open) {
    edit_add_drawer_menu.open();
  }
  // .nodeName  บอกชื่อแท็ก
  var edit_icon_pic = e.target;
  // ออกไปที่ paper-item เพื่อไปเตรียมเปลี่ยนข้อความ
  var edit_drawer = ((edit_icon_pic.parentElement).parentElement).parentElement;
  // console.log(edit_drawer);
   var edit_value_id = edit_drawer.getAttributeNode("id").value;
  //  console.log(edit_value_id);
  var edit_value_menu_id = document.getElementById('edit_add_menu_id').setAttribute("value",edit_value_id);
  // เข้าส่วน icon
  var edit_drawer_icon=(edit_drawer.firstElementChild).lastElementChild;
  // console.log(edit_drawer_icon);
  // ดึงค่า icon ออกมา
  var edit_value_icon = edit_drawer_icon.getAttributeNode("icon").value;
  var edit_value_icon_pic = document.getElementById('edit_add_menu_icon_pic').setAttribute("value",edit_value_icon);
  // console.log(edit_value_icon);
  // console.log(edit_value_icon_pic);
  // สั่งเข้าไปใน แท็ก  nodeValue คือการเข้าไปที่ค่า text
  var edit_drawer_name_value = ((edit_drawer.lastElementChild).firstChild).nodeValue;
  var edit_value_paper_input = document.getElementById('edit_add_menu_icon_name').setAttribute("value",edit_drawer_name_value);
  // console.log(edit_drawer_name);
}
// แก้ไขแล้วเซพ   ยังไม่สำเร็จ
function edit_menu_save(e) {
  var edit_icon_pic = e.target.nodeName;
  console.log(edit_icon_pic);
  var edit_value_icon_pic = document.getElementById('edit_add_menu_icon_pic').value;
  var edit_value_paper_input = document.getElementById('edit_add_menu_icon_name').value;
  var edit_add_menu_id = document.getElementById('edit_add_menu_id').value;
  var save_icon_pic = document.getElementById('edit_add_menu_icon_pic').setAttribute("value",edit_value_icon_pic);
  var save_paper_input = document.getElementById('edit_add_menu_icon_name').setAttribute("value",edit_value_paper_input);
  console.log(edit_value_icon_pic);
  console.log(edit_value_paper_input);
  console.log(edit_add_menu_id);
}
// เพิ่ม Card ui
function addpane() {
  var add_card_ui_name = document.getElementById('add_card_ui_name').value;
  if (add_card_ui_name =="" || add_card_ui_name == null) {
    error_dialog();
  } else {
    var pane="<paper-card class=\"card_main card_main_1\"><div class=\"setting_card-ui\"><\/div><div class=\"card-header\">"+add_card_ui_name+"<\/div><div class=\"card-content\">มีข้อมูลอะไรบ้างละ<\/div><\/paper-card>";
    $(".content").prepend(pane);
    ok_dialog();
  }
}
//แก้ไข card-ui
function edit_card_ui(e) {
  //สั่งเปิด ไดอาล้อก
  var edit_card = document.getElementById('edit_card_ui');
  if (edit_card.open) {
    edit_card.open();
  }
  var edit_card_component = e.target;
  var edit_card_component = ((edit_card_component.parentElement).parentElement).parentElement;
  var edit_card_id = edit_card_component.getAttributeNode("id").value;
  // console.log(edit_card_component);
  console.log(edit_card_component);
  //เช็คว่าคืนน่าเป็น content รึเปล่า ถ้าจริง ก็สั่งปิด dialog
  if (edit_card_id == "content") {
    edit_card.close();
    console.log(222);
  }
 var edit_card_id_value = document.getElementById(edit_card_id);
  // console.log(edit_card_id_value);
 var edit_card_name = edit_card_id_value.getElementsByClassName("card-header")[0];  //เลือกอันแรก เนื้องจากมีแท็กเดียวใน div นี้
//เข้าถึงข้อความ โดยต้องเข้าผ้าน firstChild ก่อนถึงจะเรียงผ่าน  nodeValue อีกที
 var text_head = edit_card_name.firstChild.nodeValue;
 // console.log(text_head);
 document.getElementById('edit_card_ui_name').setAttribute("value",text_head);

 var edit_style_card = edit_card_component.getAttribute("class").slice(10, 21);
 // console.log(edit_id_card);
 document.getElementById('edit_card_ui_style').setAttribute("value",edit_style_card);

 var edit_id_card = edit_card_component.getAttribute("id");
 document.getElementById('edit_card_id').setAttribute("value",edit_id_card);
}
function delete_card(e) {
  var delete_card = (((e.target).parentElement).parentElement).parentElement;
  delete_card.remove();
  console.log(delete_card);
}
// แสดงไดอาล็อกที่ถูกต้อง
function ok_dialog() {
  var dialog = document.getElementById('paper-dialog_ok');
  if (dialog) {
     dialog.open();
  }
}
// แสดงไดอาล็อกที่ผิดพลาด
function error_dialog() {
  var dialog = document.getElementById('paper-dialog_error');
  if (dialog) {
     dialog.open();
  }
}

// เรียง card ui ใหม่ ใช้ jquery-ui ช่วยเรียง
$(function() {
  // ต้องคลิก icon "move_card" ก่อนถึงจะย้ายการ์ดได้
  // $("#paper-dialog_ok").dialog();
  $( "#content" ).sortable({
    placeholder: "highlight",
    handle: '#move_card'
  });
  $("#paperlistbox_drawer").sortable({
    placeholder: "highlight",
    handle:'#move_drawer_menu'
  });
  // สั่งไม่แสดงเมนูเคลื่อนย้าย
});
//สั้งซ่อนเมนู เปิดเมนู
function change_editweb() {
  var toggle = document.getElementById('change_editweb').hasAttribute("checked");
  var drawer_menu = "<paper-icon-button icon=\"open-with\" title=\"Move\" id=\"move_drawer_menu\" class=\"move_drawer_menu\"><\/paper-icon-button><paper-icon-button class=\"card_setting\" icon=\"build\" title=\"Edit\" id=\"setting_card\" onclick=\"edit_menu(event)\" ><\/paper-icon-button>";
  var card_setting = "<paper-icon-button class=\"card_setting\" icon=\"open-with\" title=\"Move\" id=\"move_card\"><\/paper-icon-button><paper-icon-button class=\"card_setting\" icon=\"add\" title=\"Add\" id=\"add_element\"><\/paper-icon-button><paper-icon-button class=\"card_setting\" icon=\"build\" title=\"Edit\" id=\"setting_card\" onclick=\"edit_card_ui(event)\"><\/paper-icon-button><paper-icon-button class=\"card_setting\" icon=\"delete\" title=\"Delete\" id=\"delete_card\" onclick=delete_card(event)><\/paper-icon-button>";
  if (toggle != true) {
    $(".setting_card-ui").prepend(card_setting); //สั่งเพิ่มปุ่มออก
    $(".setting_drawer_menu").prepend(drawer_menu);//สั่งเพิ่มปุ่มออก
  }else {
    $(".card_setting").remove(); //สั่งลบปุ่มออก
    $(".move_drawer_menu").remove();//สั่งลบปุ่มออก
  }
}

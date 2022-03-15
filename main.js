//1. Cho người dùng nhập vào 3 số nguyên.
//Viết chương trình xuất 3 số theo thứ tự tăng dần

//      Đầu vào
//  1. 3 số nguyên
//      Xử lý
//  1. Cho 3 số a, b, c
//  2. So sánh lần lượt a với b, a với c
//  3. Nếu a > b thì a = a, (Trường hợp ngược lại a = b)
//  4. Nếu a > c thì a = a, (Trường hợp ngược lại a = c)
//  5  Nếu b > c thì b = b, (Trường hợp ngược lại b = c)
//      Đầu ra
//  1. In ra a, b, c (Đã được sắp xếp theo thứ tự tăng dần)
//---------------------------------------------------------

document.getElementById("btnSapxep").onclick = function () {
  var a = +document.getElementById("soNg_a").value;
  var b = +document.getElementById("soNg_b").value;
  var c = +document.getElementById("soNg_c").value;

  if (a < b) {
    var d = a;
    a = b;
    b = d;
  } else {
    a = a;
  }
  if (a < c) {
    var e = a;
    a = c;
    c = e;
  } else {
    a = a;
  }

  if (b < c) {
    var f = b;
    b = c;
    c = f;
  } else {
    b = b;
  }
  var inRakQ = "Thứ tự các số sau khi sắp xếp: " + c + " " + b + " " + a;
  document.getElementById("footerSapxep3So").innerHTML = inRakQ;
};

//2.Viết chương trình “Chào hỏi” các thành viên trong gia đình
//với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó
//dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia
//đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)

//      Đầu vào
//  1. Các chữ cái đại diện cho các thành viên như: B, M, A, E
//      Xử lý
//  1. Dúng Switch-Case cho từng trường hợp
//  2. Tương ưng với 4 trường hợp B - In ra câu trả lời Chào Bố
//  3. Lặp đi lặp lại cho các trường hợp còn lại
//      Đầu ra
//  1. In ra câu chào
//      Note: Bài này dùng if sẽ tối ưu được A hoặc a;
//---------------------------------------------------------
document.getElementById("btnDinhdanh").onclick = function () {
  var chuCaidauTien = document.getElementById("chuCaidinhDanh").value;
  switch (chuCaidauTien) {
    case "B":
      var inRakQua = "Con chào Bố!";
      document.getElementById("footerDinhdanhNguoithan").innerHTML = inRakQua;
      break;
    case "M":
      var inRakQua = "Con chào Mẹ!";
      document.getElementById("footerDinhdanhNguoithan").innerHTML = inRakQua;
      break;
    case "A":
      var inRakQua = "Em chào Anh!";
      document.getElementById("footerDinhdanhNguoithan").innerHTML = inRakQua;
      break;
    case "C":
      var inRakQua = "Em Chào Chị!";
      document.getElementById("footerDinhdanhNguoithan").innerHTML = inRakQua;
      break;
    default:
      var inRakQua = "Con xin lỗi, vui lòng nhập lại ký tự nhận dạng";
      document.getElementById("footerDinhdanhNguoithan").innerHTML = inRakQua;
      break;
  }
};


// 3.Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu
// số lẻ và bao nhiêu số chẵn.

//      Đầu vào
//  1. Nhập 3 số nguyên vào
//      Xử lý
//  1. Xét từng số
//  2. Cho hai biến đếm số lẻ và biến đếm số chẵn
//  3. Nếu là số lẻ thì đếm lẻ +1; ngược lại thì biến chẵn +1;
//      Đầu ra
//  1. In ra Kq của 2 biến đếm;

document.getElementById("btnXacdinhChanle").onclick=function(){
    var so__01 = +document.getElementById("soNg_01").value;
    var so__02 = +document.getElementById("soNg_02").value;
    var so__03 = +document.getElementById("soNg_03").value;
    var demSo_chan = 0;
    var demSo_le = 0;
    if(so__01 % 2 == 0)
    {
        demSo_chan++;
    }
    else
    {
        demSo_le++;
    }
    if(so__02 % 2 == 0)
    {
        demSo_chan++;
    }
    else
    {
        demSo_le++;
    }
    if(so__03 % 2 == 0)
    {
        demSo_chan++;
    }
    else
    {
        demSo_le++;
    }
    var inRketQ = "Số lượng số chẵn là: " + demSo_chan + "<br>" + "Số lượng số lẻ là: " + demSo_le;
    document.getElementById("footerXdChanle").innerHTML = inRketQ;
};

// 4. Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho 
//biết đó là tam giác gì?
// Ví dụ: a=2, b=2, c=1 => Tam giác cân
// a = 3, b=3 c=3 => Tam giác đều
// a = 3, b = 4, c=5 => Tam giác vuông (đinh lý Pytago)

//      Đầu vào
//  1. Nhập độ dài của 03 cạnh trong tam giác
//      Xử lý
//  2. Dựa theo hướng dẫn bắt đầu đi so sánh độ dài giữa các cạnh
//  3. ...
//      Đầu ra
//  1. In ra kết quả loại tam giác

function soLon_nhat(a, b, c) {
    var soLon__nhat = a;
    if(soLon__nhat < b)
    {
        soLon__nhat = b;
    }
    if(soLon__nhat < c)
    {
        soLon__nhat = c;
    }
    return soLon__nhat;
}

//Định dùng function mà tới khúc này rối quá, Admin thông cảm!

document.getElementById("btnXacdinhTamgiac").onclick=function(){
    var doDai_ab = document.getElementById("doDai_aB").value;
    var doDai_ac = document.getElementById("doDai_aC").value;
    var doDai_bc = document.getElementById("doDai_bC").value;
    //var doanLonnhat = soLon_nhat(doDai_ab, doDai_ac, doDai_bc);
    if(doDai_ab == doDai_ac && doDai_ab == doDai_bc)
    {
        var inRaketQua = "Là tam giác đều"
    }
    else if(doDai_ab == doDai_ac || doDai_ab == doDai_bc)
    {
        var inRaketQua = "Là tam giác cân"
    }
    else if(doDai_ab*doDai_ab == doDai_ac*doDai_ac + doDai_bc*doDai_bc ||
        doDai_ac*doDai_ac == doDai_ab*doDai_ab + doDai_bc*doDai_bc ||
        doDai_bc*doDai_bc == doDai_ab*doDai_ab + doDai_ac*doDai_ac)
    {
            var inRaketQua = "Là tam giác vuông"
    }
    document.getElementById("footerXacdinhLoaitamGiac").innerHTML = inRaketQua;
};